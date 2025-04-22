import { useQuery } from "@tanstack/react-query";
import { LeaderboardResponse, fetchLeaderboard } from "../services/leaderboardService";


const useTop3 = (eventId?: string) => {
  return useQuery<LeaderboardResponse>({
    queryKey: ["top3", eventId],
    enabled: !!eventId,
    queryFn: () => fetchLeaderboard(eventId!, 1, 3),
    staleTime: 1000 * 60 * 10,
  });
};

export default useTop3;