import * as http from "http";
import {getEpisodesList, getFilterEpisodes} from "./controllers/podcast-controller"
import { Routes } from "./routes";

export const app = async (req:http.IncomingMessage,res:http.ServerResponse) => {

    const [baseUrl,queryString] = req.url?.split("?") ?? ["",""]

    if(req.method === "GET" && baseUrl === Routes.LIST){
     await getEpisodesList (req,res)
    }

    
    if(req.method === "GET" && baseUrl === Routes.FILTER){
     await getFilterEpisodes(req,res)
    }
}