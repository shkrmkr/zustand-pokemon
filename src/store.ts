import create from "zustand";
import { devtools } from "zustand/middleware";
import { Pokemon } from "./types";

type State = {
  filter: string;
  pokemons: Pokemon[];
  setFilter: (filter: string) => void;
  setPokemons: (pokemons: Pokemon[]) => void;
};

export const useStore = create<State>(
  devtools((set) => ({
    filter: "",
    pokemons: [],
    setFilter: (filter) => set((state) => ({ filter })),
    setPokemons: (pokemons) => set((state) => ({ pokemons })),
  }))
);
