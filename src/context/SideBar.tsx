import React, { createContext, useContext } from 'react';
import { useMobile } from './Mobile';

interface SideBarContextData {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactElement;
}

const SideBarContext = createContext<SideBarContextData>(
  {} as SideBarContextData,
);

const SideBarProvider: React.FC<Props> = ({ children }) => {
  const { mobile } = useMobile();
  const [open, setOpen] = React.useState<boolean>(!mobile);

  React.useEffect(() => {
    setOpen(!mobile);
  }, [mobile]);

  return (
    <SideBarContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

function useSideBar(): SideBarContextData {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error('useSideBar must be used within an SideBarContext');
  }
  return context;
}

export { SideBarProvider, useSideBar };
