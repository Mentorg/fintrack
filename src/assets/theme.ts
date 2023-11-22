import { createContext, useState, useMemo, useCallback } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode: "dark" | "light") => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#362842",
          500: "#201134",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#dcd5e6",
          200: "#b9aacd",
          300: "#9780b3",
          400: "#74559a",
          500: "#512b81",
          600: "#412267",
          700: "#311a4d",
          800: "#201134",
          900: "#10091a"
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#d0d1d5",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#141b2d",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

export const themeSettings = (mode: "dark" | "light") => {
  const colors = tokens(mode);

  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 933,
        lg: 1200,
        xl: 1536,
      }
    },
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 40,
        "@media (max-width:1399.98px)": {
          fontSize: 40,
        },
        "@media (max-width:1199.98px)": {
          fontSize: 40,
        },
        "@media (max-width:991.98px)": {
          fontSize: 40,
        },
        "@media (max-width:767.98px)": {
          fontSize: 36,
        },
        "@media (max-width:575.98px)": {
          fontSize: 32,
        },
      },
      h2: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 24,
        "@media (max-width:1399.98px)": {
          fontSize: 24,
        },
        "@media (max-width:1199.98px)": {
          fontSize: 24,
        },
        "@media (max-width:991.98px)": {
          fontSize: 24,
        },
        "@media (max-width:767.98px)": {
          fontSize: 20,
        },
        "@media (max-width:575.98px)": {
          fontSize: 16,
        },
      },
      h4: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 20,
        "@media (max-width:1399.98px)": {
          fontSize: 20,
        },
        "@media (max-width:1199.98px)": {
          fontSize: 20,
        },
        "@media (max-width:991.98px)": {
          fontSize: 20,
        },
        "@media (max-width:767.98px)": {
          fontSize: 16,
        },
        "@media (max-width:575.98px)": {
          fontSize: 14,
        },
      },
      h5: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 16,
        "@media (max-width:1399.98px)": {
          fontSize: 16,
        },
        "@media (max-width:1199.98px)": {
          fontSize: 16,
        },
        "@media (max-width:991.98px)": {
          fontSize: 16,
        },
        "@media (max-width:767.98px)": {
          fontSize: 14,
        },
        "@media (max-width:575.98px)": {
          fontSize: 12,
        },
      },
      h6: {
        fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
        fontSize: 14,
        "@media (max-width:1399.98px)": {
          fontSize: 14,
        },
        "@media (max-width:1199.98px)": {
          fontSize: 14,
        },
        "@media (max-width:991.98px)": {
          fontSize: 14,
        },
        "@media (max-width:767.98px)": {
          fontSize: 12,
        },
        "@media (max-width:575.98px)": {
          fontSize: 12,
        },
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (initialMode: string) => {
  const [mode, setMode] = useState<"dark" | "light">(
    initialMode as "dark" | "light"
  );
  const toggleColorMode = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, toggleColorMode };
};
