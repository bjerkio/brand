import { Theme } from '@theme-ui/css';

const baseStyle = {
  display: 'flex',
  gap: 2,
  alignItems: 'center',
};

export const buttons: Theme['buttons'] = {
  primary: baseStyle,
  secondary: {
    ...baseStyle,
    color: 'white',
    bg: 'secondary',
  },
};
