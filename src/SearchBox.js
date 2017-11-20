import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

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
      startDate: '',
      endDate: '',
    };
  }

  handleChangeWhere = ({ target: { value } }) => {
    this.setState({ where: value });
  };

  handleChangeStartDate = ({ target: { value } }) => {
    this.setState({ startDate: value });
  };

  handleChangeEndDate = ({ target: { value } }) => {
    this.setState({ endDate: value });
  };

  render () {
    const { where, startDate, endDate } = this.state;

    return (
      <SearchBoxContainer>
        <Where
          placeholder="Where"
          value={where}
          onChange={this.handleChangeWhere}
        />
        <Date
          placeholder="Start Date: MM/DD/YYYY"
          value={startDate}
          onChange={this.handleChangeStartDate}
        />
        <Date
          placeholder="End Date: MM/DD/YYYY"
          value={endDate}
          onChange={this.handleChangeEndDate}
        />
        <Search>Search</Search>
      </SearchBoxContainer>
    );
  }
}

export default SearchBox;
