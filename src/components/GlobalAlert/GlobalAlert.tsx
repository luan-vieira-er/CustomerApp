import * as React from 'react';
import { Alert } from '../../components/Alert';

import { useGlobalAlertData } from '../../context/GlobalAlertData';

export const GlobalAlert: React.FC = () => {
  const { message, messagetype, open, setOpen } = useGlobalAlertData();

  return (
    <Alert
      open={open}
      setOpen={setOpen}
      type={messagetype}
      {...message}
      autoClose
    />
  );
};
