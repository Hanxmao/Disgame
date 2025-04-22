import { useQuery } from "@tanstack/react-query";
import { fetchPrizes, PrizeEntry } from "../services/prizeService";

const usePrizePool = (eventId?: string) =>
  useQuery<PrizeEntry[]>({
    queryKey: ["prizes", eventId],
    enabled: !!eventId,
    queryFn: () => fetchPrizes(eventId!),
    staleTime: 1000 * 60 * 10,
  });

export default usePrizePool;