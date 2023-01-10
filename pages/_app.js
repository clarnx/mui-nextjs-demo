import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Script from "next/script";
import useThemeStore from "../store/themeStore";
import { useEffect } from "react";
// import "../styles/globals.css";
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2962ff",
    },
    secondary: {
      main: "#212121",
    },
    error: {
      main: "#f50057",
      dark: "#a2747d",
    },
    warning: {
      main: "#ffc400",
    },
    info: {
      main: "#42a5f5",
    },
    success: {
      main: "#00e676",
    },
  },
  typography: {
    fontFamily:
      'PlusJakartaSans-ExtraBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 6,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + $track": {
            opacity: 1,
            border: "none",
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: "1px solid #bdbdbd",
        backgroundColor: "#fafafa",
        opacity: 1,
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2962ff",
    },
    secondary: {
      main: "#212121",
    },
    error: {
      main: "#f50057",
      dark: "#a2747d",
    },
    warning: {
      main: "#ffc400",
    },
    info: {
      main: "#42a5f5",
    },
    success: {
      main: "#00e676",
    },
  },
  typography: {
    fontFamily:
      'PlusJakartaSans-ExtraBold, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 6,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + $track": {
            opacity: 1,
            border: "none",
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: "1px solid #bdbdbd",
        backgroundColor: "#fafafa",
        opacity: 1,
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  const initThemeInStore = useThemeStore((state) => state.initThemeInStore);
  const currentTheme = useThemeStore((state) => state.currentTheme);

  useEffect(() => {
    initThemeInStore();
  }, [initThemeInStore]);

  return (
    <>
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Script src="/js/initTheme.js" strategy="beforeInteractive" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
