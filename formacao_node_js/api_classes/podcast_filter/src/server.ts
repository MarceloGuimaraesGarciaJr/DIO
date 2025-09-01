import * as http from "http";
import { app } from "./app";

const server = http.createServer(app)
server.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado on port ${process.env.PORT}`)
})