import { initContract } from "@ts-rest/core";
import { z } from 'zod'


const c = initContract()

const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    body: z.string()
})

export const contract = c.router({
    createPost: {
        method: 'POST',
        path: '/posts',
        responses: {
            200: PostSchema,
        },
        body: PostSchema.omit({id: true}),
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