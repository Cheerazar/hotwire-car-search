import React, { Component } from 'react';
import glamorous from 'glamorous';

const SearchBoxContainer = glamorous.div({
  display: 'flex',
  maxWidth: 960,
  margin: 'auto',
  backgroundColor: '#FFFFFF',
  height: 172,
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 20,
});

const Where = glamorous.input({
  display: 'flex',
  maxHeight: 64,
  maxWidth: 320,
});

const Date = glamorous.input({
  display: 'flex',
  maxHeight: 64,
  maxWidth: 192,
});

const Search = glamorous.button({
  display: 'flex',
  height: 64,
  width: 64,
  backgroundColor: '#373737',
  color: '#FFFFFF',
  fontSize: 14,
});

class SearchBox extends Component {
  constructor (props) {
    super(props);

    this.state = {
      where: '',
    };
  }

  render () {
    const { where } = this.state;

    return (
      <SearchBoxContainer>
        <Where
          placeholder="Where"
          value={where}
        />
        <Date placeholder="Start Date: MM/DD/YYYY" />
        <Date placeholder="End Date: MM/DD/YYYY" />
        <Search>Search</Search>
      </SearchBoxContainer>
    );
  }
}

export default SearchBox;

// 472 236 236 64
