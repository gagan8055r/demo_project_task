////TESTING/////////////////////
const request = require('supertest');
const app = require('./server');
const sinon = require("sinon");
const knex = require("./db/knex");


describe('GET /all-users', () => {
    it('should respond with status code 200 and return an array of users', async () => {
        const response = await request(app).get('/all-users');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    },10000);


});


describe('GET /single-user/:id', () => {
    it('should respond with status code 200 and return the user object', async () => {
        const response = await request(app).get('/single-user/4');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('name');
        expect(response.body[0]).toHaveProperty('email');
        expect(response.body[0]).toHaveProperty('phone_number');
        expect(response.body[0]).toHaveProperty('is_active');
        expect(response.body[0]).toHaveProperty('created_at');
        expect(response.body[0]).toHaveProperty('updated_at');
    }, 10000);
    it('should respond with status code 404 and no body if user does not exist', async () => {
        const response = await request(app).get('/single-user/100');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({});
    }, 10000);
});


describe('POST /create-user', () => {
    it('should respond with status code 201 and a success message', async () => {
        const newUser = {
            id: 14,
            name: 'Naveen',
            email: 'naveen@example.com',
            phone_number: '123444848',
            status: false
        };
        const response = await request(app)
            .post('/create-user')
            .send(newUser);
        expect(response.status).toBe(201);
        expect(response.text).toBe('user added successfully');
    }, 10000);

});

describe('PATCH /update-user/:id', () => {
    it('should respond with status code 200 and a success message', async () => {
        const updatedUser = {
            phone_number: '5871967825',
            is_active: true
        };
        const response = await request(app)
            .patch('/update-user/9')
            .send(updatedUser);
        expect(response.status).toBe(200);
        expect(response.text).toBe('User updated successfully');
    }, 10000);
});

describe('PUT /update-f-user/:id', () => {
    it('should respond with status code 200 and a success message', async () => {
        const updatedUser = {
            name: 'narendra',
            email: 'naramail@example.com',
            phone_number: '8937183574',
            is_active: true
        };
        const response = await request(app)
            .put('/update-f-user/13') // Assuming user with ID 1 exists
            .send(updatedUser);
        expect(response.status).toBe(200);
        expect(response.text).toBe('User replaced successfully');
    }, 10000);
});

describe('DELETE /delete-user/:id', () => {
    it('should respond with status code 200 and a success message', async () => {
        const response = await request(app).delete('/delete-user/14'); // Assuming user with ID 1 exists
        expect(response.status).toBe(200);
        expect(response.text).toBe('User deleted successfully');
    }, 10000);
});

describe('GET /batch-users-req', () => {
    it('should respond with status code 200 and return an array of users', async () => {
        const response = await request(app).get('/batch-users-req?pg=1&lm=4');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    }, 10000);
});

