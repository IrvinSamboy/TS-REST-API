import { z } from 'zod'

enum StatusEnum {
    status = 200
}

export const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    body: z.string()
})

export const PostResponseSchema = z.object({
    status: z.nativeEnum(StatusEnum),
    body: PostSchema
})

export const GetResponseSchema = z.object({
    status: z.literal(200),
    body: PostSchema.array()
})