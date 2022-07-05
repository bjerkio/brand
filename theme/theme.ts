import { makeTheme } from '@theme-ui/css/utils';
import { buttons } from './buttons';
import { colors } from './colors';
import { layout } from './layout';
import { links } from './links';
import { styles } from './styles';
import { text } from './text';

export const theme = makeTheme({
  space: [8, 16, 24, 32, 48, 64, 96, 128, 192, 256],
  sizes: {
    container: 1500,
    readable: 940,
  },
  colors,
  fonts: {
    body: 'Sora, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'inherit',
  },
  fontWeights: {
    body: 400,
    heading: 600,
  },
  fontSizes: [16, 18, 20, 24, 28, 32, 48],
  links,
  text,
  buttons,
  badges: {},
  styles,
  forms: {
    label: {
      gap: 2,
    },
  },
  layout,
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
