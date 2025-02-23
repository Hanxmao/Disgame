import { useQuery } from "@tanstack/react-query";
import { DataFetched } from "../services/api-client";
import genreService, { Genre } from "../services/genre-service";
import genres from "../statics/genres";

const useGenres = () => {
  return useQuery<DataFetched<Genre>, Error>(["genres"], genreService.getAll, {
    keepPreviousData: true,
    staleTime: 7 * 24 * 60 * 60 * 1000, // a week
    initialData: genres,
  });
};

export default useGenres;
