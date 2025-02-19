import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Snackbar } from '@mui/material';
import { getThemeColorFromAlertType, SUCCESS } from './constants';
import { Container, StyledAlert, StyledAlertTitle, StyledIcon } from './styles';
import { IAlertProps, IThemeColors } from './types';
import DOMPurify from 'dompurify';

export const CustomAlert: React.FC<IAlertProps> = ({
  open,
  showCloseButton = true,
  text,
  type,
  title,
  setOpen,
  width,
  autoClose = false,
  autoCloseTimeout = 3000,
  closeOnClickOutside = false,
  vertical = 'top',
  horizontal = 'center',
}) => {
  const [themeColors, setThemeColors] = React.useState<IThemeColors>(SUCCESS);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    event?.preventDefault;
    if (!closeOnClickOutside && reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  React.useEffect(() => {
    if (open) {
      setThemeColors(getThemeColorFromAlertType(type));
    }
  }, [open, type]);

  return (
    <Container>
      <Snackbar
        open={open}
        autoHideDuration={autoClose ? autoCloseTimeout : null}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <StyledAlert
          icon={
            <StyledIcon icon={themeColors.Icon} color={themeColors.IconColor} />
          }
          severity={type}
          height={title ? '70px' : '70px'}
          width={width}
          textcolor={themeColors.Color}
          backgroundcolor={themeColors.Background}
          action={
            showCloseButton ? (
              <IconButton
                data-testid='close-button'
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setOpen(false);
                }}
              >
                <StyledIcon icon={faXmark} color={themeColors.IconColor} />
              </IconButton>
            ) : null
          }
        >
          <div>
            {title && <StyledAlertTitle>{title}</StyledAlertTitle>}
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(text),
              }}
            />
          </div>
        </StyledAlert>
      </Snackbar>
    </Container>
  );
};
