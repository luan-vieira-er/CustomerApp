import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, AlertTitle } from '@mui/material';
import styled from 'styled-components';
import { theme } from '../../styles/constants';
import { IStyledAlertProps } from './types';

export const Container = styled.div``;

export const StyledAlert = styled(Alert)<IStyledAlertProps>(
  ({ height, width, textcolor, backgroundcolor }) => ({
    height: height,
    minHeight: '48px',
    width: width ?? '400px',
    minWidth: '400px',
    display: 'flex',
    alignItems: 'center',
    color: textcolor,
    background: backgroundcolor,
    borderRadius: theme.Border.Radius.Small,
    '& .MuiAlert-icon': {
      padding: '12px 0px 12px 0px',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
    },
    '& .MuiAlert-message': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Inter',
      textAlign: 'center',
      fontSize: '14.22px',
    },
  }),
);

export const StyledAlertTitle = styled(AlertTitle)(() => ({
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '16px',
}));

export const StyledIcon = styled(FontAwesomeIcon)(() => ({
  backgroundColor: 'transparent',
  fontSize: 14,
}));
