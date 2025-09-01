import {IncomingMessage, Server, ServerResponse} from "http"
import {listEpisodes} from "../services/list-episode"


export const  getEpisodesList = async (req:IncomingMessage, res: ServerResponse) => {

    const content = await listEpisodes()
    res.writeHead(200,{ 'Content-Type': 'application/json'})
    res.end(JSON.stringify({content}))

}
