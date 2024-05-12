// import { createTheme } from "@mui/material";
import { createTheme } from "@mui/material";
import { colors } from "./constants";
import { alpha } from "@mui/material";

export default createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  spacing: 8,
  spacingScale: {
    xs: 4, // Extra small
    sm: 8, // Small
    md: 16, // Medium
    lg: 24, // Large
    xl: 32, // Extra large
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    "none",
    "0px 4px 16px -4px #0000003D", // prefreed by design team but not in theme
    "0px 2px 4px 0px rgba(16, 24, 40, 0.04)", // xs
    "0px 4px 6px 0px rgba(16, 24, 40, 0.09)", // small
    "0px 4px 8px 0px rgba(16, 24, 40, 0.13)", // medium
    "0px 12px 16px -4px rgba(16, 24, 40, 0.13)", // large
    "0px 20px 24px -4px rgba(16, 24, 40, 0.16)", // X large
  ],
  palette: {
    type: "light",
    primary: {
      light: "#F5F8FF", //25
      main: "#284CD4", //600
      dark: "#1835A4", //800
      contrastText: "#FFFFFF",
      "50": "#EAEFFF",
      "100": "#F0EDF6",
      "200": "#B9C8FF",
      "300": "#90A8FF",
      "500": "#3466FC",
      "400": "#6686FB",
      "700": "#1A3FC9",
      "800": "#1835A4",
      "900": "#001873",
    },
    secondary: {
      light: "#FCFCFC",
      main: "#292929",
      "50": "#FAFAFA",
      "100": "#F5F5F5",
      "200": "#EDEDED",
      "300": "#DBDBDB",
      "400": "#A3A3A3",
      "500": "#737373",
      "600": "#525252",
      "700": "#424242",
      "800": "#292929",
      "900": "#141414",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    text: {
      primary: "#292929",
      secondary: "#525252",
      caption: "#737373",
      light: "#A3A3A3",
      heading: "#424242",
    },
    divider: "#EDEDED",
    background: {
      default: "#FCFCFC",
      paper: "#FFFFFF",
    },
    warning: {
      light: "#FEF0C7",
      main: "#F79009",
      dark: "#DC6803",
      contrastText: "#FFFFFF",
      50: "#FFFAEB",
      200: "#FEDF89",
      300: "#FEC84B",
      400: "#FDB022",

      700: "#B54708",
      800: "#93370D",
      900: "#7A2E0E",
    },
    success: {
      light: "#D0FBF0",
      main: "#15B79E",
      dark: "#0E9384",
      contrastText: "#FFFFFF",
      50: "#F0FDF9",
      200: "#99F6E0",
      300: "#5FE9D0",
      400: "#2ED3B7",
      600: "#0E9384",
      700: "#107569",
      800: "#125D56",
      900: "#134E48",
    },
    error: {
      light: "#FEE4E2",
      main: "#D92D20",
      dark: "#B42318",
      contrastText: "#FFFFFF",
      50: "#FEF3F2",
      200: "#FECDCA",
      300: "#FDA29B",
      400: "#F04438",
      600: "#B42318",
      700: "#912018",
      800: "#7A271A",
      900: "#55160C",
    },
    grey: {
      // light: '#FCFCFC',
      "50": "#FAFAFA",
      "100": "#F5F5F5",
      "200": "#EDEDED",
      "300": "#DBDBDB",
      "400": "#A3A3A3",
      "500": "#737373",
      "600": "#525252",
      "700": "#424242",
      "800": "#292929",
      "900": "#141414",
    },
    blue: {
      "25": "#F5F8FF",
      "50": "#F8F9FC",
      "100": "#E5EBFF",
      "600": "#284CD4",
      "700": "#1A3FC9",
    },
    action: {
      selected: "#5D4894",
    },
  },
  overrides: {
    MuiTypography: {
      // 1rem = 14px
      // To get 28px in rem => 28/14 = 2rem
      h2: {
        fontSize: `${24 / 14}rem`,
        lineHeight: `${32 / 14}rem`,
      },
      h3: {
        fontSize: `${20 / 14}rem`,
        lineHeight: `${30 / 14}rem`,
      },
      h4: {
        fontSize: `${18 / 14}rem`,
        lineHeight: `${26 / 14}rem`,
      },
      h5: {
        fontSize: `${16 / 14}rem`,
        lineHeight: `${24 / 14}rem`,
      },
      h6: {
        fontSize: `${14 / 14}rem`,
        lineHeight: `${20 / 14}rem`,
      },
      subtitle1: {
        fontSize: `${12 / 14}rem`,
        lineHeight: `${18 / 14}rem`,
      },
      subtitle2: {
        fontSize: `${8 / 14}rem`,
        lineHeight: `${12 / 14}rem`,
      },
      body1: {
        fontSize: `${14 / 14}rem`,
        lineHeight: `${20 / 14}rem`,
      },
      body2: {
        fontSize: `${10 / 14}rem`,
        lineHeight: `${14 / 14}rem`,
      },
    },
    MuiButton: {
      root: {
        fontSize: `${14 / 14}rem`,
        lineHeight: `${20 / 14}rem`,
      },
      outlined: {
        border: `1px solid ${colors.primary}`,
        color: colors.primary,

        "&:hover": {
          background: colors["primary-50"],
        },
        "&:disabled": {
          color: colors["primary-200"],
          background: colors.white,
          border: `1px solid ${alpha(colors.primary, 0.3)}`,
        },
        "&:active": {
          background: colors["primary-50"],
          color: colors.primary,
        },
      },
      outlinedPrimary: {
        border: `1px solid ${colors.primary}`,
        "&:hover": {
          background: "#EAEFFF",
        },
        "&:disabled": {
          border: `1px solid ${alpha(colors.primary, 0.3)}`,
          color: "#B9C8FF",
          background: colors.white,
        },
        "&:active": {
          background: "#EAEFFF",
          color: colors.primary,
        },
      },
      outlinedSecondary: {
        border: `1px solid #292929`,
        color: colors["grey-800"],

        "&:hover": {
          border: `1px solid ${colors["grey-800"]}`,
          backgroundColor: colors["grey-100"],
        },
        "&:disabled": {
          backgroundColor: alpha(colors.white, 0.3),
          border: `1px solid ${alpha(colors["grey-800"], 0.3)}`,
        },
        "&:active": {
          backgroundColor: colors["grey-300"],
          color: colors["grey-800"],
        },
      },
      contained: {
        backgroundColor: colors.primary,
        color: colors.white,
        "&:hover": {
          backgroundColor: alpha(colors.primary, 0.75),
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: alpha(colors.primary, 0.32),
          color: colors.white,
        },
        "&:active": {
          backgroundColor: "#1835A4",
        },
      },

      containedPrimary: {
        backgroundColor: colors.primary,
        color: colors.white,
        "&:hover": {
          backgroundColor: alpha(colors.primary, 0.75),
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: alpha(colors.primary, 0.32),
          color: colors.white,
        },
        "&:active": {
          backgroundColor: "#1835A4",
        },
      },
      containedSecondary: {
        "&:hover": {
          backgroundColor: alpha(colors["grey-600"], 0.75),
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: colors["grey-600"],
          color: colors.white,
        },
        "&:active": {
          backgroundColor: colors["grey-800"],
        },
      },
      textPrimary: {
        color: colors.primary,
        "&:hover": {
          backgroundColor: colors["dark-blue-25"],
          color: alpha(colors.primary, 0.75),
        },
        "&:disabled": {
          color: alpha(colors.primary, 0.3),
        },
        "&:active": {
          color: colors.primary,
        },
      },
    },
    MuiButtonGroup: {
      groupedContainedPrimary: {
        "&:not(:last-child)": {
          borderRight: `1px solid ${colors.white}`,
        },
      },
      groupedContainedSecondary: {
        "&:not(:last-child)": {
          borderRight: `1px solid ${colors.white}`,
        },
      },
    },
    MuiPaper: {
      elevation8: {
        boxShadow: "0px 4px 8px 0px rgba(16, 24, 40, 0.13)",
      },
    },
    MuiTab: {
      root: {
        padding: "0.5rem 1rem",
        zIndex: 2,
        textTransform: "none",
        fontSize: "1.125rem",
        minHeight: "2.25rem",
        minWidth: "15ch",
        "@media (min-width:600px)": {
          minWidth: "15ch",
        },
      },
    },
    MuiTabs: {
      root: {
        minHeight: "2.25rem",
      },
    },
    MuiDialogContent: {
      root: {
        minWidth: "500px",
        padding: "1rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        maxHeight: "60vh",
      },
    },
    MuiDialogTitle: {
      root: {
        padding: "1.5rem",
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: "Inter, sans-serif !important",
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: ".9em",
        backgroundColor: "#fff",
        borderRadius: "8px",
        color: "#424242",
        boxShadow: "0px 4px 8px 0px rgba(16, 24, 40, 0.13)",
        padding: ".5rem",
      },
      arrow: {
        color: "#fff",
      },
    },
    MuiTable: {
      root: {
        borderCollapse: "separate",
        borderSpacing: 0,
      },
    },
  },
  props: {
    MuiFilledInput: {
      disableUnderline: true,
    },
  },
});
