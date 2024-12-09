import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createExpressEndpoints } from '@ts-rest/express'
import { contract } from './contracts/contract'
import { postRouter } from './router/post.routes'
import swaggerUi from 'swagger-ui-express';
import { openApiDocument } from './docs/apidoc'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

createExpressEndpoints(contract, postRouter, app)

const setUpServer = () => {
    app.listen(3000, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}

setUpServer()