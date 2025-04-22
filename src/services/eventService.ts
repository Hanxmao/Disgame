import ApiClient from "./api-client";

export interface Event {
  _id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

const eventService = new ApiClient<Event>("/events/active");

export default eventService;