import ApiClient from "./api-client";

export interface LeaderboardEntry {
  userId: string;
  username: string;
  avatarUrl: string;
  tickets: number;
}

export interface LeaderboardResponse {
  data: LeaderboardEntry[];
  total: number;
  page: number;
  limit: number;
}

const leaderboardService = new ApiClient<LeaderboardResponse>("/leaderboard");

export default leaderboardService;