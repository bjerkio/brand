import { Theme } from '@theme-ui/css';

export const styles: Theme['styles'] = {
  root: {
    backgroundColor: 'background',
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
  },
  p: {
    color: 'text',
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body',
  },
  a: {
    color: 'primary',
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    code: {
      color: 'inherit',
    },
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 'inherit',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
  },
  img: {
    maxWidth: '100%',
  },
};
