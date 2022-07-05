import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Paragraph,
  Radio,
  Select,
  Slider,
  Text,
  Textarea,
} from '@theme-ui/components';
import { ColorPalette, TypeScale } from '@theme-ui/style-guide';
import Head from 'next/head';
//import Link from 'next/link';
import React from 'react';
import type { Theme } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import { theme as baseTheme } from '../index';
import { scaleAsArray } from '../utils';

const Sheet: React.FC<{ theme: Theme; name: string }> = ({
  theme = baseTheme,
  name = 'Base',
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Container variant='layout.readable'>
        <Head>
          <title>Bjerk Theme</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Flex as="main" sx={{ gap: 4, flexDirection: 'column' }}>
          <Box as="header" sx={{ color: 'text' }}>
            <Container sx={{ pt: 4 }}>
              <Text variant="title">Bjerk {name} Theme</Text>
              <Flex sx={{ gap: 3, pt: 3 }}>
                <Link variant="primary" href="https://github.com/bjerkio/brand">
                  GitHub
                </Link>
                <Link
                  variant="primary"
                  href="https://npmjs.com/package/@bjerk/brand"
                >
                  NPM
                </Link>
                <NavLink href="/">Base Theme</NavLink>
                <NavLink href="/web">Web Theme</NavLink>
              </Flex>
            </Container>
          </Box>
          <Container sx={{ p:3, backgroundColor:'accent' }}>
            <Box sx={{pb:3}}>
            <Text variant="subsection">Text styles</Text>
            </Box>
            <Grid gap={1}>
              {Object.keys(theme.text).map(key => {
                const Component = Text;
                return (
                  <Flex
                    key={key}
                    sx={{
                      gap: 1,
                      flexDirection: 'column',
                    }}
                  >
                    <Text variant="subtitle">{key}</Text>
                    <Component variant={key}>
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet neque ultricies, mollis leo quis, luctus magna.'
                      }
                    </Component>
                    <Divider />
                  </Flex>
                );
              })}
            </Grid>
          </Container>
          <Container sx={{ backgroundColor: 'accent', p: 3 }}>
          <Box sx={{pb:3}}>
            <Text variant="subsection">Base styles</Text>
            </Box>
            <Box>
              <Paragraph variant='text.standard' sx={{pb:1}}>
                This is a whole paragraph of text, include{' '}
                <code>code like this</code>, as well as{' '}
                <a href="https://hackclub.com/">
                  <code>linked code</code>
                </a>
                {' & '}
                <a href="https://hackclub.com/">regular links</a>. The paragraph
                ended up being 1 sentence, but now I guess it’s{' '}
                <strong>two</strong>.
              </Paragraph>
              <Paragraph variant='standard'>
                <code>Here’s a code block! No highlighting to be found.</code>
              </Paragraph>
            </Box>
          </Container>
          <Container sx={{ backgroundColor: 'accent', p: 3 }}>
          <Box sx={{pb:3}}>
          <Text variant="subsection">Buttons</Text>
          </Box>
            <Flex sx={{ flexWrap: 'wrap', gap: 3 }}>
              {Object.keys(theme.buttons).map(key => (
                <Button key={key} variant={key}>
                  {key} btn
                </Button>
              ))}
            </Flex>
          </Container>
          <Container sx={{ backgroundColor: 'accent', p: 3 }}>
          <Box sx={{pb:3}}>
          <Text variant="subsection">Disabled Buttons</Text>
          </Box>
            <Flex sx={{ flexWrap: 'wrap', gap: 3 }}>
              {Object.keys(theme.buttons).map(key => (
                <Button key={key} variant={key} disabled>
                  {key} btn
                </Button>
              ))}
            </Flex>
          </Container>

          <Container sx={{ backgroundColor: 'accent', p: 3 }}>
          <Box sx={{pb:3}}>
          <Text variant="subsection">Spacing</Text>
          </Box>
            <Flex sx={{ flexWrap: 'wrap', gap: 4 }}>
              {scaleAsArray(theme.space).map((s, key) => (
                <Box key={key} sx={{ textAlign: 'center' }}>
                  {key}
                  <Box key={s} sx={{ width: s, height: s, bg: 'text' }} />
                  {s}
                </Box>
              ))}
            </Flex>
          </Container>
          <Container sx={{ backgroundColor: 'accent', p: 3 }}>
          <Box sx={{pb:3}}>
          <Text variant="subsection">Forms</Text>
          </Box>
            <Grid gap={2} columns={[null, 2]} as="form">
              <Label>
                Full name
                <Input placeholder="Zach Latta" />
              </Label>
              <Label>
                How are you primarily associated with Bjerk?
                <Select>
                  <option value="" disabled hidden>
                    Select one…
                  </option>
                  <option value="club-leader">I lead a club</option>
                  <option value="club-member">I am a club member</option>
                  <option value="slack-member">I am active on Slack</option>
                  <option value="alum">I am a Bjerk alum</option>
                  <option value="none">None of the above</option>
                </Select>
              </Label>
              <Label variant="labelHoriz">
                <Checkbox />
                Remember me
              </Label>
              <Flex sx={{ flexWrap: 'wrap' }}>
                <Label variant="labelHoriz">
                  <Radio name="letter" /> Alpha
                </Label>
                <Label variant="labelHoriz">
                  <Radio name="letter" /> Bravo
                </Label>
                <Label variant="labelHoriz">
                  <Radio name="letter" /> Charlie
                </Label>
              </Flex>
              <Label>
                Why do you want to come?
                <Textarea placeholder="Write a few sentences." />
              </Label>
              <Label>
                Slider
                <Slider color="secondary" />
              </Label>
              <Button
                as="button"
                type="submit"
                children="RSVP"
                sx={{ gridColumn: [null, 'span 2'] }}
              />
            </Grid>
          </Container>

          <Container sx={{ backgroundColor: 'accent', p: 3 }}>
          <Box sx={{pb:3}}>
          <Text variant="subsection">Badges</Text>
          </Box>
            {Object.keys(theme.badges).map(key => (
              <Badge
                key={key}
                variant={key}
                mr={3}
                color={key === 'outline' ? 'muted' : null}
              >
                {key}
              </Badge>
            ))}
          </Container>
          <Container sx={{ backgroundColor: 'white', p: 3 }}>
          <Box sx={{pb:3}}>
          <Text variant="subsection">Colors</Text>
          </Box>
            <ColorPalette
              omit={[
                'error',
                'warning',
              ]}
            />
          </Container>
          <Container sx={{ backgroundColor: 'accent', p: 3 }}>
          <Box sx={{pb:3}}>
          <Text variant="subsection">Type scale</Text>
          </Box>
            <TypeScale />
          </Container>
          <Container sx={{ backgroundColor: 'accent', p: 3 }}>
          <Box sx={{pb:3}}>
          <Text variant="subsection">Theme Object</Text>
          </Box>
            <Text as="pre" variant="styles.pre">
              {JSON.stringify(theme, null, 2)}
            </Text>
          </Container>
        </Flex>
      </Container>
    </ThemeProvider>
  );
};

export default Sheet;
