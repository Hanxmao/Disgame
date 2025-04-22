import { useQuery } from "@tanstack/react-query";
import { fetchActiveEvent } from "../services/eventService";

const useActiveEvent = () => {
  return useQuery({
    queryKey: ["activeEvent"],
    queryFn: fetchActiveEvent,
    staleTime: 1000 * 60 * 10,
  });
};

export default useActiveEvent