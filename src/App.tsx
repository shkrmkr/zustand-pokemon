import React from "react";
import { FilterInput } from "./components/FilterInput";
import { PokemonTable } from "./components/PokemonTable";
import { useStore } from "./store";
import { Pokemon } from "./types";

const POKEMON_URL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

fetch(POKEMON_URL)
  .then((res) => res.json())
  .then((pokemons: Pokemon[]) =>
    useStore.setState((state) => ({
      pokemons,
    }))
  );

export const App = () => {
  return (
    <div className="App">
      <FilterInput />
      <h1>List of Pokemons</h1>
      <PokemonTable />
    </div>
  );
};

export default App;
