import express, {Express, Request, Response } from 'express'
//Security
import cors from 'cors'
import helmet from "helmet";


import rootRouter  from '../routes/index'

const server: Express = express();

// *Content Type Config
server.use(express.urlencoded({ extended: true, limit: '50mb'}))
server.use(express.json({limit: '10mb'}))

server.use( '/api', rootRouter )

// *Security Config
server.use(helmet());
server.use(cors());

server.get('/', (req: Request, res:Response)=> {
    res.redirect('/api')
})

export default server