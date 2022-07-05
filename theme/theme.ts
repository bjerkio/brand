import { makeTheme } from '@theme-ui/css/utils';
import { text } from './text';
import { buttons } from './buttons';
import { styles } from './styles';

const baseFontSize = 16;

export const theme = makeTheme({
  space: [8, 16, 24, 32, 48, 64, 96, 128, 192, 256],
  sizes: {
    container: 1205,
    readable: 770,
  },
  colors: {
    blue20: '#C9D1FF',
    blue40: '#8FA1FF',
    blue60: '#7087FF',
    blue80: '#4B5CF0',
    blue100: '#2A3BCC',
    dark20: '#B7BCC6',
    dark40: '#878F9F',
    dark60: '#576379',
    dark80: '#273653',
    dark100: '#0F2040',
    green20: '#EDF9F1',
    green40: '#D2FBE0',
    green60: '#BCF9C6',
    green80: '#A6F7AE',
    green100: '#90F494',
    warning: '#FFD464',
    error: '#DC3B58',
    access: '#4AD97B',
  },
  fonts: {
    body: 'Sora',
    heading: 'Sora',
    monospace: 'Sora',
  },
  fontWeights: {
    'body': 400,
    'bold': 600,
  },
  fontSizes: [16, 18, 20, 24, 28, 32, 48],
  text,
  buttons,
  badges: {},
  styles,
  forms: {
    label: {
      gap: 2,
    },
  },
  cards: {
    primary: {
      display: 'flex',
      flexDirection: 'column',
      p: 4,
      gap: 4,
      bg: 'white',
    },
  },
});
