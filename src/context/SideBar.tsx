import React, { createContext, useContext } from 'react';
import styled from 'styled-components';
import { useMobile } from './Mobile';
import { Box, Drawer, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Button, Divider } from './../components';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // const DrawerList = (
  //   <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               <FontAwesomeIcon icon={faChevronUp}/>
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               <FontAwesomeIcon icon={faChevronUp}/>
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

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
