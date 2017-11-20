import React from 'react';
import { A } from 'glamorous';
import PropTypes from 'prop-types';

const RentCar = ({ link }) => (
  <A
    href={link}
    target="_blank"
    style={{
      backgroundColor: '#373737',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 32,
      width: 110,
      color: '#FFFFFF',
      fontSize: 14,
      textDecoration: 'none',
      textAlign: 'center',
    }}
  >
    Rent Car
  </A>
);

RentCar.propTypes = {
  link: PropTypes.string.isRequired,
};

export default RentCar;
