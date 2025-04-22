import { useQuery } from "@tanstack/react-query";
import { fetchLeaderboard, LeaderboardResponse } from "../services/leaderboardService";

const useLeaderboard = (
  eventId?: string,
  page: number = 1,
  limit: number = 10
) => {
  return useQuery<LeaderboardResponse>({
    queryKey: ["leaderboard", eventId, page, limit],
    enabled: !!eventId,
    queryFn: () => fetchLeaderboard(eventId!, page, limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useLeaderboard;