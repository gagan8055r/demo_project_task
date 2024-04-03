const express = require('express');
const Ajv = require('ajv');
const Joi = require('joi');

const app = express();
const ajv = new Ajv();

const requestBodySchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        age: { type: 'number' },
        email: { type: 'string' },
    },
    required: ['name', 'age', 'email'],
    additionalProperties: false,
};

const valid = ajv.validateSchema(requestBodySchema);
if (!valid) {
    console.error('Invalid JSON schema:', ajv.errors);
    process.exit(1);
}

const validateRequestBody = ajv.compile(requestBodySchema);

const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    age: Joi.number().integer().min(18).required(),
    email: Joi.string().email().required(),
});

app.use(express.json());

app.post('/users', (req, res) => {
    const start = performance.now();
    const validBody = validateRequestBody(req.body);
    const jsonValidationTime = performance.now() - start;

    if (!validBody) {
        return res.status(400).json({ error: 'Invalid request body', details: validateRequestBody.errors });
    }

    const startJoiValidation = performance.now();
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    const joiValidationTime = performance.now() - startJoiValidation;

    if (error) {
        return res.status(400).json({ error: 'Invalid data', details: error.details });
    }

    const { name, age, email } = req.body;

    const totalValidationTime = jsonValidationTime + joiValidationTime;
    console.log(`JSON validation time: ${jsonValidationTime.toFixed(2)} ms`);
    console.log(`Joi validation time: ${joiValidationTime.toFixed(2)} ms`);
    console.log(`Total validation time: ${totalValidationTime.toFixed(2)} ms`);

    res.json({ message: 'User created successfully', user: { name, age, email } });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// JSON validation time: 0.12 ms
// Joi validation time: 2.19 ms
// Total validation time: 2.31 ms
