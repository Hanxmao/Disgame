import { axiosInstance } from "./api-client";


export interface PrizeEntry {
  rank: number;
  quantity: number;
  product: {
    id: string;
    title: string;
    imageUrl: string;
  };
}

export const fetchPrizes = (eventId: string) =>
  axiosInstance.get<PrizeEntry[]>(`/prizes/event/${eventId}`).then(res => res.data);