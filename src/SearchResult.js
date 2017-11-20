import React from 'react';
import PropTypes from 'prop-types';

const SearchResult = ({ result }) => <div>{`${result.CarTypeCode} ${result.TotalPrice}`}</div>;

SearchResult.propTypes = {
  result: PropTypes.shape({
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
    PickupAirport: PropTypes.string.isRequired,
    RentalDays: PropTypes.string.isRequired,
    VendorLocationId: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchResult;
