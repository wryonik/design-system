import {
  Typography,
  TypographyProps,
  useTheme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const getFontWeight = (weight: 'light' | 'regular' | 'medium' | 'semiBold') => {
  switch (weight) {
    case 'light':
      return 300;
    case 'medium':
      return 500;
    case 'semiBold':
      return 600;
    default:
      return 400; // regular is 400
  }
};

const useStyles = makeStyles(theme => ({
  ...theme.overrides.MuiTypography,
}));

const ZTypography: React.FC<
  TypographyProps & {
    variant?:
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'
      | 'subtitle1'
      | 'subtitle2'
      | 'body1'
      | 'body2'
      | 'overline';
    weight?: 'light' | 'regular' | 'medium' | 'semiBold';
    color?: string;
  }
> = ({ variant = 'body1', weight = 'regular', style, ...props }) => {
  const classes = useStyles();
  const fontWeightValue = getFontWeight(weight);
  const theme = useTheme();

  return (
    <Typography
      className={`${classes[variant] || classes.body1} `}
      style={{
        color: props?.color ?? theme.palette.grey[800],
        fontWeight: fontWeightValue,
        ...(style ?? {}),
        // Add other styles based on variant if needed
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export default ZTypography;
