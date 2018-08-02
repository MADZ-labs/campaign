const request = require('supertest');
const { connection } = require('../../db/index');
const app = require('../index.js');

describe('Test /project/1/section/about_components', () => {
  it('should return status code 200', async () => {
    const response = await request(app).get('/project/1/section/about_components');
    expect(response.statusCode).toBe(200);
    connection.end();
  });
});