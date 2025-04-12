import { useQuery } from "@tanstack/react-query";
import { DataFetched } from "../entites";
import genreService from "../services/genre-service";
import { Genre } from "../entites";
import genres from "../statics/genres";

const useGenres = () => {
  return useQuery<DataFetched<Genre>, Error>(["genres"], genreService.getAll, {
    keepPreviousData: true,
    staleTime: 7 * 24 * 60 * 60 * 1000, // a week
    initialData: genres,
  });
};

export default useGenres;
