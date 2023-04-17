import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import server from './src/server'
import { LogError } from './src/utils/logger';

dotenv.config()
const port = process.env.PORT || 8000;

server.listen(port,()=> {
    console.log(`server running at http://localhost:${port}`);
})
// * Control SERVER ERROR
server.on('error', (error) =>{
    LogError(`[SERVER ERROR]: ${error}`)
})
