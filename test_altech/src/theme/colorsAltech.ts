const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  green3: '#11B116',
  blue1: '#2F89FC',
  blue2: '#EDF8FF',
  blue3: '#4187D1',
  dark1: '#112340',
  dark2: '#000000',
  dark3: '#495A75',
  dark4: '#8092AF',
  grey1: '#7D8797',
  gray2: '#72768B',
  grey2: '#E9E9E9',
  grey3: '#EEEEEE',
  grey4: '#EDEEF0',
  gray5: '#C4C4C4',
  grey6: '#B1B7C2',
  gray7: '#343A40',
  gray8: '#F4F5F7',
  white: '#ffffff',
  blue: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  black3: 'rgba(52, 58, 64, 0.4)',

  success: '#11B116',
  background: '#EFEFED',

  borderError: 'red',
  error: '#FA5959',
};

export const colorsNamaPerusahaan = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,

  white: mainColors.white,
  black: mainColors.dark2,
  blue: mainColors.blue,

  disable: mainColors.grey4,
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  error: mainColors.error,

  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    white: mainColors.white,
    menuInactive: mainColors.dark3,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark4,
  },

  button: {
    primary: {
      background: mainColors.green1,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.white,
      text: mainColors.dark2,
    },
    disable: {
      background: mainColors.grey4,
      text: mainColors.gray5,
    },
  },

  border: {
    primary: mainColors.grey3,
    secondary: mainColors.blue,
    borderError: mainColors.borderError,
  },
};
