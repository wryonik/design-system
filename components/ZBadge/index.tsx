import { Badge, BadgeProps } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';

export interface ZBadgeProps extends Omit<BadgeProps, 'classes'> {
  size?: 'small' | 'medium' | 'large'; // Define the size prop
}

// Helper function to map size prop to font size value
const getSizeValue = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 8;
    case 'medium':
      return 12;
    case 'large':
      return 14;
    default:
      return 8; // Default font size for small
  }
};

// Helper function to map size prop to dimension value
const getSizeDimension = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 18;
    case 'medium':
      return 26;
    case 'large':
      return 30;
    default:
      return 18; // Default dimension for small
  }
};

const StyledBadge = withStyles(theme => ({
  badge: {
    fontSize: (props: any) => getSizeValue(props.size),
    width: (props: any) => getSizeDimension(props.size),
    height: (props: any) => getSizeDimension(props.size),
    padding: '0 4px',
    borderRadius: '50%',
    backgroundColor: (props: any) => props?.backgroundColor,
    color: (props: any) => props?.color,
  },
}))(Badge);

const ZBadge: React.FC<ZBadgeProps> = ({
  size = 'small', // Default size is small
  ...props
}) => {
  return <StyledBadge size={size} {...props} />;
};

export default ZBadge;
