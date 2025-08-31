import * as http from "http";
import {getEpisodesList} from "./controllers/podcast-controller"
const server = http.createServer(async (req:http.IncomingMessage,res:http.ServerResponse) => {

    if(req.method === "GET"){
     await getEpisodesList (req,res)
    }
})
server.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado on port ${process.env.PORT}`)
})