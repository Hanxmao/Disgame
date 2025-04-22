import { axiosInstance } from "./api-client";

export interface Event {
  _id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  bgImage: string;
}

export const fetchActiveEvent = () => axiosInstance.get<Event>("/events/active/").then(res => res.data);