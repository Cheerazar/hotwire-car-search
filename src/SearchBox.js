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
  fontSize: 20,
  paddingLeft: 12,
});

const Date = glamorous.input({
  display: 'flex',
  maxHeight: 64,
  maxWidth: 192,
  fontSize: 20,
  paddingLeft: 12,
});

const Search = glamorous.button({
  display: 'flex',
  height: 64,
  width: 64,
  backgroundColor: '#373737',
  color: '#FFFFFF',
  fontSize: 14,
  ':hover': {
    cursor: 'pointer',
  },
});

class SearchBox extends Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
  };

  constructor (props) {
    super(props);

    this.state = {
      where: '',
      startDate: '',
      endDate: '',
    };
  }

  handleClick = () => {
    const { where, startDate, endDate } = this.state;
    this.props.handleSearch({ where, startDate, endDate });
  };

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
          placeholder="Start: MM/DD/YYYY"
          value={startDate}
          onChange={this.handleChangeStartDate}
        />
        <Date
          placeholder="End: MM/DD/YYYY"
          value={endDate}
          onChange={this.handleChangeEndDate}
        />
        <Search onClick={this.handleClick}>Search</Search>
      </SearchBoxContainer>
    );
  }
}

export default SearchBox;
