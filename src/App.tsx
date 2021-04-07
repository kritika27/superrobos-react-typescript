import React, { useState } from "react";
import CardList from "./components/CardList/CardList";
import { Search } from "./components/Search/Search";
import "./App.css";
import { superobos } from "./robos";

interface robots {
  id: number;
  name: string;
  place: string;
}
const App = () => {
  const [robos] = useState<robots[]>(superobos);
  const [searchField, setSearchField] = useState<string>("");

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robos.filter((robos) => {
    return robos.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="App">
      <h1>Super Robos</h1>
      <Search onSearchChange={onSearchChange} />
      <CardList robos={filteredRobots} />
    </div>
  );
};
export default App;
