import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutlinedInput } from '@mui/material';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import styled from 'styled-components';

import { SearchInputFieldProps } from './types';

export const StyledInput = styled(OutlinedInput)<SearchInputFieldProps>(
  (props) => ({
    backgroundColor: props.background ?? 'transparent',
    width: props.width ?? '100%',
    height: props.height ?? '100%',
    [`&.${outlinedInputClasses.root}`]: {
      color: props.textcolor ?? '#A1A1AA',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontSize: 14,
      fontWeight: 400,
    },
    [`&.${outlinedInputClasses.focused}`]: {
      color: props.textcolor ?? '#3F3F46',
    },
    [`.${outlinedInputClasses.notchedOutline}`]: {
      border: 'none',
    },
  }),
);

export const StyledIconButton = styled(IconButton)(() => ({
  [`&.${iconButtonClasses.root}`]: {
    marginRight: 5,
    ':hover': {
      backgroundColor: 'transparent',
    },
    ':focus': {
      backgroundColor: 'transparent',
    },
  },
}));

export const StyledIcon = styled(FontAwesomeIcon)(() => ({
  backgroundColor: 'transparent',
  fontSize: 16,
  color: '#A1A1AA',
}));
