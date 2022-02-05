import "./App.css";
import Cards from "../components/Cards";
import Input from "../components/Input";
import React, { Component } from "react";
import ErrorBoundry from "../components/ErrorBoundry";

import { connect } from "react-redux";

import { requestCats, setSearchField } from "../actions";

const mapStateToProps = (state) => {
  // states go here
  return {
    searchField: state.searchCats.searchField,
    cats: state.requestCats.cats,
    isPending: state.requestCats.cats,
    error: state.requestCats.cats,
  };
};
const mapDispatchToProps = (dispatch) => {
  // actions go here
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCats: () => dispatch(requestCats())
  }
};

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     cats: [],
  //     searchField:''
  //   };
  // }

  componentDidMount() {
    this.props.onRequestCats();
  }

  render() {
    // const { cats } = this.props;
    const { cats ,searchField, onSearchChange, isPending } = this.props;
    const filteredCats = cats.filter((cats) => {
      return cats.name
        .trim()
        .toLowerCase()
        .includes(searchField.toLowerCase());
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
  }
}
// connecting states and actions to app via props using connect method and 
// the actions and state gets passed as parameters in mapStateToProps and map 
// mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
