import { create } from "zustand";

interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  sort: string;
  search: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  update: (newQuery: Partial<GameQuery>) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    genreId: null,
    platformId: null,
    sort: "",
    search: "",
  },
  update: (newQuery) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ...newQuery } })),
}));

export default useGameQueryStore;
