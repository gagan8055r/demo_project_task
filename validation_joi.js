const express = require('express');
const Joi = require('joi');

const app = express();

app.use(express.json())
app.use((req, res, next) => {
    const startTime = new Date();
    res.on('finish', () => {
        const endTime = new Date();
        const duration = endTime - startTime;
        console.log(`Request processed in ${duration}ms`);
    });
    next();
});


const querySchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    page: Joi.number().integer().min(1).default(1)
});

app.get('/user', (req, res) => {

    const { error, value } = querySchema.validate(req.query);

    if (error) {

        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }

    res.status(200).json({ message: 'Valid query parameters', data: value });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});


