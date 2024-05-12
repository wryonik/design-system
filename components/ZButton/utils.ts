import { colors } from "./../../constants";

export const noDropDownButtonTypes = ["text", "textError"];

export const buttonStyleVariantAndBgMap = (theme) => {
  return {
    contained: theme.palette.primary.main,
    containedSecondary: colors["grey-800"],
    containedText: theme.palette.primary.main,
    containedError: theme.palette.error.main,
    outlined: theme.palette.primary.main,
    outlinedSecondary: colors["grey-800"],
    outlinedText: theme.palette.primary.main,
    outlinedError: theme.palette.error.main,
    error: theme.palette.error.main,
  };
};

export const getRootHeight = (size) => {
  switch (size.size) {
    case "small":
      return "28px";
    case "medium":
      return "32px";
    case "large":
      return "36px";
    case "xtraLarge":
      return "40px";
    default:
      return "32px";
  }
};
