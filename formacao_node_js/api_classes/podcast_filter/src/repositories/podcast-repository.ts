import fs from 'fs'
import path from 'path'
import {podcastModel} from "../models/podcasts"


const pathData = path.join(__dirname,"../repositories/podcasts.json")

export const repoPodcast = async (podcastName?:string): Promise<podcastModel[]> =>{
    
    const data = fs.readFileSync(pathData,"utf-8")
    let jsonFile = JSON.parse(data)

    if(podcastName){
        jsonFile = jsonFile.filter((podcast:podcastModel)=> podcast.podcastName === podcastName)
    }
    
    return jsonFile
}