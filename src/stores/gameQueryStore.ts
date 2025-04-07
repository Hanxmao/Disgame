import { create } from "zustand";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  sort: string;
  search: string;
}

interface GameQueryStore {
    gameQuery: GameQuery
    update: (newQuery: Partial<GameQuery>) => void
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery:{} as GameQuery,
    update: (newQuery)=> set((store)=>({gameQuery: {...store.gameQuery, ...newQuery}}))
}))

export default useGameQueryStore