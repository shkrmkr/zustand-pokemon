import React from "react";
import { useStore } from "../store";

export const FilterInput: React.FC = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);

  return <input value={filter} onChange={(e) => setFilter(e.target.value)} />;
};
