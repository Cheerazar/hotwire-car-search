import React, { Component } from 'react';
import { Div } from 'glamorous';

import './App.css';

import SearchResults from './SearchResults';
import SearchBox from './SearchBox';
import Loading from './Loading';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      results: [],
      isLoading: false,
    };
  }

  render () {
    const { results, isLoading } = this.state;

    return (
      <Div className="App-container">
        <header className="App-header">
          <h1 className="App-title">Hotwire Rental Car Search</h1>
        </header>
        <SearchBox />
        <SearchResults results={results} />
        {isLoading && <Loading />}
      </Div>
    );
  }
}

export default App;
