import { IErrors } from 'types';
import {
  DivRenderError,
  DivRenderSuccess,
  ErrorDisplay,
  SuccessDisplay,
} from './styles';
import DOMPurify from 'dompurify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation as alertIcon,
  faCircleCheck as successIcon,
} from '@fortawesome/free-solid-svg-icons';

export const renderErrors = (errors: IErrors[] | null) => {
  if (errors && errors.length > 0) {
    return errors.map(
      (error: { Key: string; Message: string }, index: number) => (
        <ErrorDisplay key={error.Key + index}>
          <FontAwesomeIcon icon={alertIcon} fontWeight={400} fontSize={14} />
          <DivRenderError
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(error.Message),
            }}
          />
        </ErrorDisplay>
      ),
    );
  }

  return null;
};

export const renderSuccess = (message: string | null) => {
  if (message && message.length > 0) {
    return (
      <SuccessDisplay>
        <FontAwesomeIcon icon={successIcon} />
        <DivRenderSuccess>{message}</DivRenderSuccess>
      </SuccessDisplay>
    );
  }

  return null;
};
