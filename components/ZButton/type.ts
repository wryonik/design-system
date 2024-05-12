import { ButtonProps } from '@mui/material';

type ButtonSize = 'small' | 'medium' | 'large' | 'xl';
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | 'default'
  | 'inherit';

export type StyleProps = {
  size?: ButtonSize;
};

export type TButtonProps = {
  disabled?: boolean;
  target?: string;
  isLoading?: boolean;
  size?: ButtonSize;
  className?: string;
  dropDownItems?: {
    label: string;
    value: string;
    callback?: (value) => void;
  }[];
  color?: ButtonColor;
} & ButtonProps;
