import { useQuery } from "@tanstack/react-query";
import eventService, { Event } from "../services/eventService";

const useActiveEvent = () => {
  return useQuery<Event>({
    queryKey: ["activeEvent"],
    queryFn: () => eventService.getById(""), // GET /events/active
    staleTime: 1000 * 60 * 10,
  });
};

export default useActiveEvent;