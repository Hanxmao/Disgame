import { useQuery } from "@tanstack/react-query";
import leaderboardService from "../services/leaderboardService";

const useTop3 = (eventId: string) => {
  return useQuery({
    queryKey: ["top3", eventId],
    queryFn: () => leaderboardService.getAll({ url: `/${eventId}`, params: { page: 1, limit: 3 } }),
    staleTime: 1000 * 60 * 10,
  });
};

export default useTop3;