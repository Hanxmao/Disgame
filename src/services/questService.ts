import { axiosInstance } from "./api-client";

export interface QuestProgress {
    _id: string;
    userId: string;
    questId: {
      _id: string;
      title: string;
      description: string;
      goal: number;
      rewardTickets: number;
      backgroundImage: string;
    };
    progress: number;
    completed: boolean;
  }
  
  const fetchQuestProgress = (eventId: string) =>
    axiosInstance
      .get<QuestProgress[]>(`/quests/progress`, {
        params: { eventId },
      })
      .then((res) => res.data);

export default fetchQuestProgress