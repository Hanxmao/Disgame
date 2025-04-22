import { axiosInstance } from "./api-client";


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


export const fetchLeaderboard = (eventId: string, page = 1, limit = 10) => {
  return axiosInstance
    .get<LeaderboardResponse>(`/leaderboard/${eventId}`, {
      params: { page, limit },
    })
    .then((res) => res.data);
};