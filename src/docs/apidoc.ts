import { generateOpenApi } from '@ts-rest/open-api';
import { contract } from '../contracts/contract';

export const openApiDocument = generateOpenApi(contract, {
    info: {
        title: 'Posts API',
        version: '1.0.0.0'
    }
})