import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  List,
  Paper,
  Popper,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { ArrowDropDown } from "@mui/icons-material";
import React from "react";
import { colors } from "../../constants";
import ZTypography from "../ZTypography";
import { Spinner, getButtonClass } from ".";
import { StyleProps } from "./type";
import { getRootHeight } from "./utils";

type TButtonGroupDDProps = {
  classes: any;
  size: "small" | "medium" | "large";
  isLoading?: boolean;
  variant: "text" | "outlined" | "contained";
  color: "primary" | "secondary" | "error";
  spinnerSize?: string;
  children?: React.ReactNode;
  dropDownButtonProps: {
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
  props?: any;
};

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
  boxHover: {
    "&:hover": {
      backgroundColor: colors["grey-200"],
    },
  },
}));

const TButtonGroupDD = ({
  classes,
  size,
  isLoading,
  disableDropdown,
  variant,
  spinnerSize,
  dropDownButtonProps,
  color,
  props,
}: TButtonGroupDDProps) => {
  const theme = useTheme();
  const rootClasses = useStyles({ size });
  const btnClass = getButtonClass(props, classes);

  const { actionItems, primaryAction } = dropDownButtonProps;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        id="split-button"
        variant={variant}
        color={color}
        size={size}
        ref={anchorRef}
        aria-label="TButtonGroup with dropdown menu"
        {...props}
      >
        <Button
          onClick={primaryAction?.onClick}
          className={`${btnClass} ${rootClasses.root}`}
          {...props}
        >
          <Box
            style={{
              marginRight: isLoading ? theme.spacing(1) : 0,
            }}
          >
            {primaryAction?.label}
          </Box>

          {isLoading ? <Spinner size={spinnerSize} color="inherit" /> : null}
        </Button>
        <Button
          className={`${btnClass} ${rootClasses.root}`}
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          disabled={disableDropdown}
          {...props}
        >
          <ArrowDropDown />
        </Button>
      </ButtonGroup>

      <Popper
        style={{
          zIndex: 1,
          width: anchorRef.current?.clientWidth,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper
              style={{
                border: `1px solid ${colors["grey-200"]}`,
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  id="split-button-menu"
                  style={{
                    padding: 0,
                  }}
                >
                  {actionItems?.map((action, i) => {
                    return (
                      <Box
                        className={rootClasses.boxHover}
                        onClick={(e) => {
                          if (action.disabled) return;
                          action.onClick?.(e);
                          handleClose(e);
                        }}
                        style={{
                          paddingTop: theme.spacing(1),
                          paddingBottom: theme.spacing(1),
                          paddingLeft: theme.spacing(2),
                          paddingRight: theme.spacing(2),
                          cursor: action?.disabled ? "not-allowed" : "pointer",
                        }}
                        data-testid={`${action.label}-${i}`}
                        key={`${action.label}-${i}`}
                      >
                        <ZTypography variant="body1">
                          {action.label}
                        </ZTypography>
                      </Box>
                    );
                  })}
                </List>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default TButtonGroupDD;
