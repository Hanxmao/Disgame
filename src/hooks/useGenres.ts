import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genre-service";
import { axiosInstance } from "../services/api-client";
import { DataFetched } from "./useData";
import genres from "../statics/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = ()=>{
  return useQuery<DataFetched<Genre>, Error>(
    ["genres"],
   genreService.getAll,
    {
      keepPreviousData: true,
      staleTime: 7 * 24 * 60 * 60 * 1000, // a week
      initialData: genres
    }
  );
}

export default useGenres