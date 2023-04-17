import { BasicResponse } from "../types";

export interface IHelloController {
    getMassage(name?: string): Promise<BasicResponse>
}