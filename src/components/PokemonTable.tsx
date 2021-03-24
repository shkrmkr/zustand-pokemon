import React from "react";
import { useStore } from "../store";

export const PokemonTable: React.FC = () => {
  const { pokemons, filter } = useStore(({ pokemons, filter }) => ({
    pokemons,
    filter,
  }));

  return (
    <table>
      <thead>
        <tr>
          <td>NAME</td>
          <td>TYPE(S)</td>
        </tr>
      </thead>
      <tbody>
        {pokemons
          .filter(({ name: { english } }) =>
            english.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name: { english }, type }) => (
            <tr key={id}>
              <td>{english}</td>
              <td>{type.join(", ")}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
