import fs from 'fs'
import path from 'path'
import {podcast} from "../models/podcasts"


const pathData = path.join(__dirname,"../repositories/podcasts.json")
export const repoPodcast = async (): Promise<podcast[]> =>{
    
    const data = fs.readFileSync(pathData,"utf-8")
    const jsonFile = JSON.parse(data)
    
    return jsonFile
}