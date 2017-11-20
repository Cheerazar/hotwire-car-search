import React, { Component } from 'react';
import { Div } from 'glamorous';

import './App.css';

import SearchResults from './SearchResults';

// example success response for development.
// duplicating this in state to mimic what it will be like
// with final app
import exampleResults from './data/results-success-example.json';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      results: exampleResults,
    };
  }

  render () {
    const { results } = this.state;

    return (
      <Div className="App-container">
        <header className="App-header">
          <h1 className="App-title">Hotwire Rental Car Search</h1>
        </header>
        <SearchResults results={results} />
      </Div>
    );
  }
}

export default App;
