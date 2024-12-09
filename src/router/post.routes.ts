import { initServer } from "@ts-rest/express";
import { createPost, getPosts } from "../controllers/post.controller";
import { contract } from "../contracts/contract";

const s = initServer()

export const postRouter = s.router(contract, {
    createPost: createPost,
    
    getPosts: getPosts
})
