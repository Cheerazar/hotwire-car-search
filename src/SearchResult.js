import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import RentCar from './RentCar';

const SearchResultContainer = glamorous.div({
  display: 'flex',
  maxWidth: 730,
  backgroundColor: '#FFFFFF',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: '#FFFFFF',
  margin: 'auto',
  marginBottom: 10,
  ':hover': {
    borderColor: '#373737',
    borderWidth: 2,
    borderStyle: 'solid',
  },
});

const CarDetailsContainer = glamorous.div({
  display: 'flex',
  flex: 3,
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRight: '1px solid',
  borderRightColor: '#D7D7D5',
});

const TotalAndRent = glamorous.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
});

const Information = glamorous.p({
  fontSize: 13,
  marginLeft: 20,
  marginBottom: 0,
  marginTop: 0,
});

const SearchResult = ({ result, carType }) => {
  const {
    DeepLink, TotalPrice, LocationDescription, VendorLocationId,
  } = result;
  const { TypicalSeating, CarTypeName, PossibleModels } = carType;

  return (
    <SearchResultContainer>
      <CarDetailsContainer>
        <Information
          css={{
            fontSize: 24,
            fontWeight: 500,
            marginTop: 10,
          }}
        >
          {CarTypeName}
        </Information>
        <Information
          css={{
            color: '#D7D7D5',
            marginBottom: 10,
          }}
        >
          {PossibleModels}
        </Information>
        <Information
          css={{
            marginBottom: 12,
          }}
        >
          {TypicalSeating}
        </Information>
        <Information css={{ marginBottom: 10 }}>
          Pickup location: {VendorLocationId.slice(0, 3)} - {LocationDescription}
        </Information>
      </CarDetailsContainer>
      <TotalAndRent>
        <Information css={{ marginLeft: 0, fontSize: 18 }}>{`$${TotalPrice}`}</Information>
        <Information css={{ marginLeft: 0, marginTop: -12 }}>Total</Information>
        <RentCar link={DeepLink} />
      </TotalAndRent>
    </SearchResultContainer>
  );
};

SearchResult.propTypes = {
  carType: PropTypes.shape({
    TypicalSeating: PropTypes.string.isRequired,
    CarTypeName: PropTypes.string.isRequired,
    PossibleFeatures: PropTypes.string.isRequired,
    PossibleModels: PropTypes.string.isRequired,
  }).isRequired,
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
    PickupAirport: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    RentalDays: PropTypes.string.isRequired,
    VendorLocationId: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchResult;
