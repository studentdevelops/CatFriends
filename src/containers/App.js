import "./App.css";
import Cards from "../components/Cards";
import Input from "../components/Input";
import React, { useState, useEffect } from "react";
import ErrorBoundry from "../components/ErrorBoundry";

const App = () => {

  const [cats, setCats] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((catList) => setCats(catList));
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value)
  };

  const filteredCats = cats.filter((cats) => {
    return cats.name
      .trim()
      .toLowerCase()
      .includes(searchField.trim().toLowerCase());
  });
  const catList = filteredCats.map((cat, i) => {
    return (
      <Cards
        key={cat.id}
        id={cat.id}
        img={cat.id}
        name={cat.name}
        email={cat.email}
      />
    );
  });

  return (
    <ErrorBoundry>
      <div className="App">
        <div className="header">
          <h3>Adopt A Cat</h3>
          <Input onSearchChange={onSearchChange} />
        </div>
        <div className="Cards">{catList}</div>
      </div>
    </ErrorBoundry>
  );
};

export default App;
