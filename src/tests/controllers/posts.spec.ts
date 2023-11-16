beforeAll((done) => {
	done();
});

afterAll((done) => {
	db.close().then(() => done());
});

describe("PostController", () => {
	describe("index", () => {
		it("should return a list of posts", async () => {
			const response = await request(app).get("/posts");
			expect(response.status).toBe(200);
			expect(response.body).toBeInstanceOf(Array);
		});
	});

	describe("create", () => {});
	describe("show", () => {
		it("should return a post", async () => {
			const response = await request(app).get(
				"/posts/65562c1311e38631e524b4d4",
			);
			expect(response.status).toBe(200);
			// check if body schema  match PostDTO
			expect(response.body).toMatchObject({
				content: expect.any(String),
				title: expect.any(String),
				image: expect.any(String),
				likes: expect.any(Number),
				tags: expect.any(Array),
				_id: expect.any(String),
				createdAt: expect.any(String),
				updatedAt: expect.any(String),
				__v: expect.any(Number),
			});
		});
		it("should return 404 if post not found", async () => {
			const response = await request(app).get(
				"/posts/65562c1311e38630d524b4d4",
			);
			expect(response.status).toBe(404);
		});
		it("should return 400 if id is not valid", async () => {
			const response = await request(app).get("/posts/not_found");
			expect(response.status).toBe(400);
		});
	});
});
import request from "supertest";
import app from "../../app";
import { db } from "../../db";
