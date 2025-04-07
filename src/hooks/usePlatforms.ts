import { useQuery } from "@tanstack/react-query";
import { DataFetched } from "../services/api-client";
import platformService, { Platform } from "../services/platform-service";
import platforms from "../statics/platforms";

const usePlatforms = () => {
  return useQuery<DataFetched<Platform>>(
    ["platforms"],
    platformService.getAll,
    {
      initialData: { count: platforms.length, results: platforms },
      staleTime: 7 * 24 * 60 * 60 * 1000, // a week
      keepPreviousData: true,
    }
  );
};

export default usePlatforms;