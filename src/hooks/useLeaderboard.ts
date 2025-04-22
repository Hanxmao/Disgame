import { useQuery } from "@tanstack/react-query";
import leaderboardService, { LeaderboardResponse } from "../services/leaderboardService";

const useLeaderboard = (eventId?: string, page = 1, limit = 10) => {
    return useQuery({
      queryKey: ["leaderboard", eventId, page, limit],
      enabled: !!eventId,
      queryFn: () =>
        leaderboardService.getAll({
          url: `/${eventId}`,
          params: { page, limit },
        }),
    });
  };

export default useLeaderboard;