import { Theme } from '@theme-ui/css';

const baseStyle = {
  fontFamily: 'body',
  color: 'dark100',
  p: 3,
  borderRadius: '30px',
  width: 'fit-content',
};

export const buttons: Theme['buttons'] = {
  primary: {
    ...baseStyle,
    backgroundColor: 'transparent',
    boxShadow:
      '2px 4px 11px rgba(0, 0, 0, 0.1), inset 3px 4px 9px rgba(255, 255, 255, 0.15)',
  },
};
