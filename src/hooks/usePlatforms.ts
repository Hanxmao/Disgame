import { useQuery } from "@tanstack/react-query"
import platforms from "../statics/platforms"
import { DataFetched } from "./useData"
import platformService from "../services/platform-service"

export interface Platform {
    id: number,
    name: string,
    slug: string,
}

// const usePlatforms = ()=>({data: platforms, isLoading:false, error:null})


const usePlatforms = ()=>{
    return useQuery<DataFetched<Platform>>(['platforms'], platformService.getAll, {
        initialData: {count: platforms.length, results:platforms},
        staleTime: 7 * 24 * 60 * 60 * 1000, // a week
        keepPreviousData: true
    })
}

export default usePlatforms