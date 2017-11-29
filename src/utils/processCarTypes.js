import pick from 'lodash/pick';

const processCarTypes = carTypes =>
  carTypes.reduce((types, car) => {
    // eslint-disable-next-line no-param-reassign
    types[car.CarTypeCode] = pick(car, [
      'TypicalSeating',
      'CarTypeName',
      'PossibleFeatures',
      'PossibleModels',
    ]);
    return types;
  }, {});

export default processCarTypes;
