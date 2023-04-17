import { HelloController } from '../controller/HelloController';
import { LogInfo } from '../utils/logger';
import express, {Request, Response} from 'express'

// Router from express
let helloRouter = express.Router();

helloRouter.route('/')
    .get( async (req:Request, res:Response)=> {
        let name: any = req?.query.name ;
        LogInfo(`Query params ${name}`)
        const controller: HelloController = new HelloController();
        const response = await controller.getMassage(name)
        return res.send(response)
    })

export default helloRouter