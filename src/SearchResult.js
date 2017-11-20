import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import types from './data/car-types.json';

const SearchResultContainer = glamorous.div({
  display: 'flex',
  maxWidth: 730,
  backgroundColor: '#FFFFFF',
  margin: 'auto',
  marginBottom: 10,
});

const CarDetailsContainer = glamorous.div({
  display: 'flex',
  flex: 3,
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRight: '2px solid',
  borderRightColor: '#D7D7D5',
});

const TotalAndRent = glamorous.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
});

const SearchResult = ({ result }) => {
  const {
    CarTypeCode, DeepLink, TotalPrice, LocationDescription, VendorLocationId,
  } = result;
  const { TypicalSeating, CarTypeName, PossibleModels } = types[CarTypeCode];

  return (
    <SearchResultContainer>
      <CarDetailsContainer>
        <p>{CarTypeName}</p>
        <p>{PossibleModels}</p>
        <p>{TypicalSeating}</p>
        <p>
          Pickup location: {VendorLocationId.slice(0, 3)} - {LocationDescription}
        </p>
      </CarDetailsContainer>
      <TotalAndRent>
        <p>{TotalPrice}</p>
        <a href={DeepLink}>Rent Car</a>
      </TotalAndRent>
    </SearchResultContainer>
  );
};

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
