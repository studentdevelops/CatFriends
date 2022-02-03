import "./App.css";
import Cards from "../components/Cards";
import Input from "../components/Input";
import React, { Component } from "react";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((catList) => this.setState({ cats: catList }));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
  const {cats, searchField} = this.state;
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
            <Input onSearchChange={this.onSearchChange} />
          </div>
          <div className="Cards">{catList}</div>
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
