import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    fonts: {
      heading: `'Lato', sans-serif`,
      body: `'Lato', sans-serif`,
    },
    colors: {
      primary: baseTheme.colors.blue,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);

export default theme;
