import { useQuery } from "@tanstack/react-query";
import fetchQuestProgress from "../services/questService";

const useQuestProgress = (eventId?: string) => {
    return useQuery({
      queryKey: ["questProgress", eventId],
      enabled: !!eventId,
      queryFn: () => fetchQuestProgress(eventId!),
    });
  };
  
  export default useQuestProgress;