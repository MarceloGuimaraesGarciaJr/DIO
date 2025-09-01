import { repoPodcast } from "../repositories/podcast-repository"

export const serviceFilterEpisodes = async (podcastName:string | null) => { 
    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repoPodcast(queryString) 
    return data
    

}