import { makeTheme } from '@theme-ui/css/utils';
import spacing from '../tokens/spacing';
import radii from '../tokens/radii';
import { text } from './text';
import { buttons } from './buttons';
import { styles } from './styles';

const baseFontSize = 16;

export const theme = makeTheme({
  space: [
    0,
    ...Object.values(spacing).map(
      space => Number(space.replace('rem', '')) * baseFontSize,
    ),
  ],
  sizes: {
    container: 1205,
    readable: 770,
  },
  colors: {

  },
  fonts: {
    
  }
  fontWeights,
  fontSizes: [
    0,
    ...Object.values(fontSizes).map(
      fontSize => Number(fontSize.replace('rem', '')) * baseFontSize,
    ),
  ],
  text,
  buttons,
  radii,
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
