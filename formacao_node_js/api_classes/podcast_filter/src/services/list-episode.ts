import { repoPodcast } from "../repositories/podcast-repository"

export const listEpisodes = async () => { 
    const data = await repoPodcast()
    return data
}


