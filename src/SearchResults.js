import React from 'react';
import PropTypes from 'prop-types';

import SearchResult from './SearchResult';

const SearchResults = ({ results, carTypes }) =>
  results.map(result => (
    <SearchResult
      result={result}
      carType={carTypes[result.CarTypeCode]}
      key={result.ResultId}
    />
  ));

SearchResults.propTypes = {
  carTypes: PropTypes.objectOf(PropTypes.shape({
    TypicalSeating: PropTypes.string.isRequired,
    CarTypeName: PropTypes.string.isRequired,
    PossibleFeatures: PropTypes.string.isRequired,
    PossibleModels: PropTypes.string.isRequired,
  })),
  results: PropTypes.arrayOf(PropTypes.shape({
    CurrencyCode: PropTypes.string.isRequired,
    DeepLink: PropTypes.string.isRequired,
    ResultId: PropTypes.string.isRequired,
    HWRefNumber: PropTypes.string.isRequired,
    SubTotal: PropTypes.string.isRequired,
    TaxesAndFees: PropTypes.string.isRequired,
    TotalPrice: PropTypes.string.isRequired,
    CarTypeCode: PropTypes.string.isRequired,
    DailyRate: PropTypes.string.isRequired,
    DropoffDay: PropTypes.string.isRequired,
    DropoffTime: PropTypes.string.isRequired,
    PickupDay: PropTypes.string.isRequired,
    PickupTime: PropTypes.string.isRequired,
    LocationDescription: PropTypes.string.isRequired,
    MileageDescription: PropTypes.string.isRequired,
    PickupAirport: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    RentalDays: PropTypes.string.isRequired,
    VendorLocationId: PropTypes.string.isRequired,
  })),
};

export default SearchResults;
