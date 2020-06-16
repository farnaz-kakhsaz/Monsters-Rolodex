import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data, isLoading: false }))
      .catch((error) => {
        console.log("Can’t access " + url + " response. Blocked by browser?");
        throw new Error(error);
      });
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ searchField: value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((item) =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          searchField={searchField}
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        {this.state.isLoading ? (
          <div className="loading" />
        ) : (
          <CardList monsters={filteredMonsters} />
        )}
      </div>
    );
  }
}

export default App;
