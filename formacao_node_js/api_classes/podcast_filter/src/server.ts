import * as http from "http";
import {getEpisodesList, getFilterEpisodes} from "./controllers/podcast-controller"

const server = http.createServer(async (req:http.IncomingMessage,res:http.ServerResponse) => {

    if(req.method === "GET" && req.url === "/api/list"){
     await getEpisodesList (req,res)
    }

    
    if(req.method === "GET" && req.url === "/api/episodes"){
     await getFilterEpisodes(req,res)
    }
})
server.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado on port ${process.env.PORT}`)
})