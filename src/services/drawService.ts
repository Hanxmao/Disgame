import { axiosInstance } from "./api-client";


export interface WinnerEntry {
  ticket_id: string;
  user: { id: string; name: string; avatar: string };
  prize: { rank: number; product_id: string; quantity: number };
  product: { id: string; title: string; imageUrl: string };
  drawId: string;
  drawOrder: number;
}

export const fetchDrawWinners = async (eventId: string) => {
  const res = await axiosInstance.get<{ draws: { drawId: string; drawOrder: number; winners: WinnerEntry[] }[] }>(
    `/draws/${eventId}/grouped`
  );
  return res.data;
};
