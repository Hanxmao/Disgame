import { useQuery } from "@tanstack/react-query";
import leaderboardService, { LeaderboardResponse } from "../services/leaderboardService";

const useLeaderboard = (eventId: string, page = 1, limit = 10) => {
  return useQuery<LeaderboardResponse>({
    queryKey: ["leaderboard", eventId, page, limit],
    queryFn: () => leaderboardService.getAll({ url: `/${eventId}`, params: { page, limit } }),
    staleTime: 1000 * 60 * 5,
  });
};

export default useLeaderboard;