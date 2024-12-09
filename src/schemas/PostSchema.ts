import { number, z } from 'zod'

export const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    body: z.string()
})

export const PostResponseSchema = z.object({
    status: z.number(),
    body: PostSchema
})

export const GetResponseSchema = z.object({
    status: z.number(),
    body: PostSchema.array()
})