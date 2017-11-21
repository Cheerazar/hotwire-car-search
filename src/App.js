import React, { Component } from 'react';
import { Div } from 'glamorous';
import axios from 'axios';

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

  handleSearch = ({ where, startDate, endDate }) => {
    this.setState({ isLoading: true });
    axios
      .get(`https://vast-chamber-42459.herokuapp.com/api/search?where=${
        where
      }&startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`)
      .then((response) => {
        this.setState({
          results: response.data.results,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log('Error in handleSearch', err);
      });
  };

  render () {
    const { results, isLoading } = this.state;

    return (
      <Div className="App-container">
        <header className="App-header">
          <h1 className="App-title">Hotwire Rental Car Search</h1>
        </header>
        <SearchBox handleSearch={this.handleSearch} />
        <SearchResults results={results} />
        {isLoading && <Loading />}
      </Div>
    );
  }
}

export default App;
