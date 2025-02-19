import React, { createContext, useContext } from 'react';

interface NotificationContextData {
  hasNotification: boolean;
  setHasNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactElement;
}

const NotificationContext = createContext<NotificationContextData>(
  {} as NotificationContextData,
);

const NotificationProvider: React.FC<Props> = ({ children }) => {
  const [hasNotification, setHasNotification] = React.useState<boolean>(false);
  return (
    <NotificationContext.Provider
      value={{
        hasNotification,
        setHasNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

function useNotification(): NotificationContextData {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within an NotificationContext',
    );
  }
  return context;
}

export { NotificationProvider, useNotification };
