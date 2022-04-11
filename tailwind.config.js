module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          lightest: '#F2F6FB',
          light: '#92C1FF',
          DEFAULT: '#5F91CC',
          dark: '#28649B',
          darkest: '#263A52',
        },
        green: {
          lightest: '#EFFAF3',
          light: '#90EDB7',
          DEFAULT: '#5BCA8A',
          dark: '#459969',
          darkest: '#245137',
        },
        yellow: {
          lightest: '#FEF8EE',
          light: '#FFEA88',
          DEFAULT: '#F0B858',
          dark: '#BA8829',
          darkest: '#604A23',
        },
        red: {
          lightest: '#FBEBED',
          light: '#FF6E78',
          DEFAULT: '#D6394C',
          dark: '#9E0024',
          darkest: '#56171E',
        },
        purple: {
          lightest: '#C6CAFF',
          light: '#C6CAFF',
          DEFAULT: '#9499D4',
          dark: '#646BA2',
          darkest: '#474C78',
        },
        gray: {
          lightest: '#EEEEEE',
          light: '#C1C1C161',
          DEFAULT: '#C1C1C1',
          dark: '#969696',
          darkest: '#2D2D2C',
        },
      },
    },
  },
  plugins: [],
};
