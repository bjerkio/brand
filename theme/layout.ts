import { Theme } from '@theme-ui/css';

export const layout: Theme['layout'] = {
  layout: {
    centered: {
      margin: '0 auto',
      m: 0,
      p: 0,
      backgroundSize: 'cover',
    },
    readable: {
      variant: 'centered',
      maxWidth: 950,
      backgroundSize: 'cover',
      px: [6, 'unset'],
    },
    full: {
      variant: 'centered',
      maxWidth: 1500,
      p: 5,
    },
    header: {
      maxWidth: 1500,
    },
  },
};
