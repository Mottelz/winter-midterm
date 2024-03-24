const request = require("supertest");
const app = require("../../src/app");

describe("All comics route", () => {
    test("Should return all comics", async () => {
        const response = await request(app).get('/comic/all');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatch({
            comics: [
                {
                    series: 'Superman',
                    issue: 1,
                },
                {
                    series: 'Superman',
                    issue: 2,
                },
                {
                    series: 'Superman',
                    issue: 3,
                },
                {
                    series: 'Batman',
                    issue: 1,
                },
                {
                    series: 'Batman',
                    issue: 2,
                }
            ],
            count: 5
        })
    })
});

describe("Series route", () => {
    test("Should return based on series", async () => {
        const response = await request(app).get('/comic/series/batman');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatch({
            comics: [
                {
                    series: 'Batman',
                    issue: 1,
                },
                {
                    series: 'Batman',
                    issue: 2,
                }
            ],
            count: 2
        })
    })
});

describe("Single issue route", () => {
    test("Should return based on issue", async () => {
        const response = await request(app).get('/comic/series/batman/issue/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatch({
            issue:
                {
                    series: 'Batman',
                    issue: 1,
                },
        })
    })
});