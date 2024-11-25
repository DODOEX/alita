import { alpha } from '@dodoex/components';

export const palette = {
  mode: 'dark',
  primary: {
    main: '#EA4D4D',
    contrastText: '#FFF',
  },
  secondary: {
    main: '#EA4D4D',
    contrastText: '#FFF',
  },
  error: {
    main: '#EC5A7D',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#EB8D27',
    contrastText: '#1A1A1B',
  },
  success: {
    main: '#47D1A7',
    contrastText: '#1A1A1B',
  },
  purple: {
    main: '#BC9CFF',
    contrastText: '#1A1A1B',
  },
  background: {
    default: '#140C05',
    paper: '#23252B',
    // tooltip
    paperContrast: '#1E170E',
    // paperDarkContrast: alpha('#FFF', 0.1),
    // backdrop: alpha('#000', 0.9),
    input: '#35363C',
    tag: alpha('#FFF', 0.04),
  },
  text: {
    primary: '#FFF',
    secondary: alpha('#FFF', 0.5),
    disabled: alpha('#FFF', 0.3),
    placeholder: alpha('#FFF', 0.3),
    link: '#FFE804',
  },
  border: {
    main: 'rgba(118, 83, 33, 0.50)',
    light: alpha('#FFF', 0.3),
    disabled: alpha('#FFF', 0.1),
  },
  hover: {
    default: alpha('#FFF', 0.1),
  },
};
