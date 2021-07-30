const request = require('supertest');
const app = require('./app');

describe('GET /api/add', () => {
    it('Add positive numbers', async () => {
        const a = 1;
        const b = 1;
        const result = 2;

        await request(app)
            .get('/api/add')
            .query({a, b})
            .expect(200)
            .then(({text}) => {
                expect(text).toBe(result.toString());
            });
    });
})

