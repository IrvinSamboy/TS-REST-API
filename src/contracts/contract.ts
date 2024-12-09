import { initContract } from "@ts-rest/core";
import { PostSchema } from "../schemas/PostSchema";

const c = initContract()

export const contract = c.router({
    createPost: {
        method: 'POST',
        path: '/posts',
        responses: {
            200: PostSchema,
        },
        body: PostSchema,
        summary: 'Create post'
    },
    getPosts: {
        method: 'GET',
        path: '/posts/',
        responses: {
            200: PostSchema.nullable().array()
        },
        summary: 'Get posts'
    }
})