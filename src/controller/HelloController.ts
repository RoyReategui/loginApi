import { LogSucces } from "../utils/logger";
import { IHelloController } from "./interfaces";
import { BasicResponse } from "./types";

export class HelloController implements IHelloController{
    public async getMassage(name?: string | undefined): Promise<BasicResponse> {
        LogSucces('[api/hello] Get Resquest')
        return {
            message: `Hello ${name}`
        }
    }

}