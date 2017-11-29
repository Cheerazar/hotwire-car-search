import React, { Component } from 'react';
import { Div } from 'glamorous';
import axios from 'axios';

import './App.css';

import SearchResults from './SearchResults';
import SearchBox from './SearchBox';
import Loading from './Loading';

import processCarTypes from './utils/processCarTypes';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      results: [],
      isLoading: false,
      noResults: false,
      carTypes: {},
    };
  }

  handleSearch = ({ where, startDate, endDate }) => {
    this.setState({
      isLoading: true,
      results: [],
      noResults: false,
      carTypes: {},
    });
    axios
      .get(`https://vast-chamber-42459.herokuapp.com/api/search?where=${
        where
      }&startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`)
      .then((res) => {
        if (res.data.statusCode === '0' && res.data.statusDesc === 'success') {
          this.setState({
            results: res.data.results,
            isLoading: false,
            carTypes: processCarTypes(res.data.carTypes),
          });
        } else if (
          res.data.statusCode === '100' &&
          res.data.statusDesc === 'no results were found'
        ) {
          this.setState({
            noResults: true,
            isLoading: false,
            carTypes: {},
          });
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log('Error in handleSearch', err);
      });
  };

  render () {
    const {
      carTypes, results, isLoading, noResults,
    } = this.state;

    return (
      <Div className="App-container">
        <header className="App-header">
          <h1 className="App-title">Hotwire Rental Car Search</h1>
        </header>
        <SearchBox handleSearch={this.handleSearch} />
        <SearchResults
          results={results}
          carTypes={carTypes}
        />
        {isLoading && <Loading />}
        {noResults && <div style={{ fontSize: 32, fontWeight: 600 }}>No results were found</div>}
      </Div>
    );
  }
}

export default App;
