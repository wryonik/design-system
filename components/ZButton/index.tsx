import { Styles, makeStyles, withStyles } from "@mui/styles";
import {
  Box,
  Button,
  ButtonProps,
  CircularProgress,
  CircularProgressProps,
  Theme,
  alpha,
  useTheme,
} from "@mui/material";
import React from "react";
import { colors } from "../../constants";
import TButtonGroupDD from "./ZButtonGroupDD";
import { StyleProps } from "./type";
import { getRootHeight } from "./utils";

const useStyles = makeStyles(() => ({
  root: {
    textTransform: "none",
    height: (size) => {
      return getRootHeight(size);
    },
    padding: (props: StyleProps) => {
      switch (props.size) {
        case "small":
          return "4px 12px";
        case "medium":
          return "6px 12px";
        case "large":
          return "8px 12px";
        case "xl":
          return "10px 12px";
        default:
          return "6px 12px";
      }
    },
  },
  noBorder: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: "1px solid",
  },
  error: {},
}));

export const Spinner = (props: CircularProgressProps) => (
  <CircularProgress {...props} />
);

const styles: Styles<Theme, {}> = (theme) => ({
  root: {
    textTransform: "none",
    borderRadius: "4px",
    fontWeight: 500,
    boxShadow: "none",
    whiteSpace: "nowrap",
    minWidth: "max-content",
    fontSize: "1rem",
  },
  textError: {
    color: theme.palette.error.main,
    "&:hover": {
      backgroundColor: colors["red-25"],
      color: theme.palette.error.main,
    },
    "&:disabled": {
      color: alpha(theme.palette.error.main, 0.3),
    },
    "&:active": {
      color: theme.palette.error.main,
    },
  },
  containedError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
      boxShadow: "none",
    },
    "&:disabled": {
      backgroundColor: alpha(theme.palette.error.main, 0.3),
      color: theme.palette.secondary.contrastText,
    },
    "&:active": {
      backgroundColor: theme.palette.error.dark,
    },
  },
  outlinedError: {
    color: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.main}`,
    "&:hover": {
      border: `1px solid ${theme.palette.error.main}`,
      backgroundColor: theme.palette.error["50"],
    },
    "&:disabled": {
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${alpha(theme.palette.error.main, 0.3)}`,
      color: alpha(theme.palette.error.main, 0.3),
    },
    "&:active": {
      backgroundColor: colors["grey-300"],
    },
  },
  error: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: colors["red-25"],
      color: theme.palette.error.main,
    },
    "&:disabled": {
      color: alpha(theme.palette.error.main, 0.3),
    },
    "&:active": {
      color: theme.palette.error.main,
    },
  },
});

const getSpinnerSize = (size) => {
  switch (size) {
    case "small":
      return "1.25rem";
    case "large":
      return "1.5rem";
    default:
      return "1.375rem";
  }
};

export const getButtonClass = (props, classes) => {
  const { color, variant } = props;

  if (color !== "error") return "";

  const variantClassMapping = {
    outlined: classes.outlinedError,
    text: classes.textError,
    contained: classes.containedError,
  };

  return variantClassMapping[variant] || classes.error;
};

export type TButtonProps = {
  disabled?: boolean;
  target?: string;
  disableDropdown?: boolean;
  isLoading?: boolean;
  size?: "small" | "medium" | "large" | "xl";
  className?: string;
  children: React.ReactNode;
  dropDownButtonProps?: {
    actionItems: {
      label: string;
      disabled?: boolean;
      onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    }[];
    primaryAction: {
      label: string;
      onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    };
  };
} & ButtonProps;

const TButton = ({
  classes,
  children,
  isLoading,
  size = "medium",
  dropDownButtonProps,
  disableDropdown,
  ...props
}: TButtonProps) => {
  const theme = useTheme();
  const rootClass = useStyles({ size });
  const spinnerSize = getSpinnerSize(size);
  const btnClass = getButtonClass(props, classes);

  if (
    Array.isArray(dropDownButtonProps?.actionItems) &&
    dropDownButtonProps?.actionItems.length > 0
  ) {
    return (
      <TButtonGroupDD
        classes={classes}
        size={size}
        isLoading={isLoading}
        disableDropdown={disableDropdown}
        spinnerSize={spinnerSize}
        dropDownButtonProps={dropDownButtonProps}
        color={props.color}
        variant={props.variant}
        props={props}
      />
    );
  }

  return (
    <Button {...props} className={`${btnClass} ${rootClass.root}`}>
      <Box
        style={{
          marginRight: isLoading ? theme.spacing(1) : 0,
        }}
      >
        {children}
      </Box>

      {isLoading ? <Spinner size={spinnerSize} color="inherit" /> : null}
    </Button>
  );
};

TButton.defaultProps = {
  variant: "contained",
  isLoading: false,
  size: "large",
  color: "primary",
};

export default withStyles(styles)(TButton);
