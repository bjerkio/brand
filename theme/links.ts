import { Theme } from '@theme-ui/css';

const baseLink = {
  color: 'blue100',
  fontWeight: 'body',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  fontSize: 1,
};

export const links: Theme['links'] = {
  primary: {
    ...baseLink,
  },
  secondary: {
    fontSize: [0, 4],
    color: 'blue100',
    wordWrap: 'break-word',
  },
  nav: {
    ...baseLink,
    fontWeight: 'body',
    color: 'dark100',
    ':hover': {
      color: 'blue100',
      textDecoration: 'underline',
    },
  },
  emphasis: {
    ...baseLink,
    fontSize: [0, 3],
  },
  socials: {
    textDecoration: 'none',
  },
  mobileNav: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 5,
  },
  footerLink: {
    color: 'blue40',
    fontSize: [0, 2],
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
};
