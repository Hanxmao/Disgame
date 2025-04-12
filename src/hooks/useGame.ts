import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Game } from "../entites";

const apiClient = new ApiClient<Game>("/games");
const useGame = (id: number | string) =>
  useQuery<Game, Error>(["games", id], () => apiClient.getById(id));

export default useGame;
