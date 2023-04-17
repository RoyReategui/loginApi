import { LogInfo } from "../utils/logger";
import express, {Express,Request, Response} from "express";
import helloRouter from "./HelloRoutes";

let server = express();
let rootRouter = Express.Router();


rootRouter.get('/',(req:Request, res:Response)=> {
    LogInfo('GET: https://localhost:7500/api')
    res.send('Welcome to get Route:Hello')
})

server.use('/', rootRouter) // http://localhost:7500/api
server.use('/hello', helloRouter) //http://localhost:7500/api/hello --> helloController

export default server