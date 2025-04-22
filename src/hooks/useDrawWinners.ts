import { useQuery } from "@tanstack/react-query";
import { fetchDrawWinners } from "../services/drawService";

export const useDrawWinners = (eventId?: string) => {
    return useQuery({
      queryKey: ["draws", eventId],
      enabled: !!eventId,
      queryFn: () => fetchDrawWinners(eventId!),
      staleTime: 1000 * 60 * 5,
    });
  };