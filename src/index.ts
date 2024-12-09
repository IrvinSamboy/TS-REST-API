import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createExpressEndpoints } from '@ts-rest/express'
import { contract } from './contracts/contract'
import { postRouter } from './router/post.routes'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())

createExpressEndpoints(contract, postRouter, app)

const setUpServer = () => {
    app.listen(3000, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}

setUpServer()