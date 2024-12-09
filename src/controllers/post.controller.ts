import { PostSchema, PostResponseSchema, GetResponseSchema } from "../schemas/PostSchema";

export const createPost = async ({ body }: { body: typeof PostSchema._type }): Promise<typeof PostResponseSchema._type> => {
    return {
        status: 200,
        body
    }
}

export const getPosts = async (): Promise<typeof GetResponseSchema._type> => {
    const body: typeof PostSchema._type[] = [
        {
            id: '1',
            title: 'title 1',
            body: 'hi'
        },
        {
            id: '2',
            title: 'title 2',
            body: 'hi 2'
        },
        {
            id: '3',
            title: 'title 3',
            body: 'hi 3'
        },
    ]

    return {
        status: 200,
        body
    }
}