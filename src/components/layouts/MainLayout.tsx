import { Box, Button, Stack, useMediaQuery } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';
import LayersIcon from '@mui/icons-material/Layers';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import Icon from '../Icon';

const NavButton = styled(Button)({
  width: '100%',
  backgroundColor: '#ffffff00',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: 42,
  padding: 12,
  paddingLeft: 16,
  fontSize: 14,
  color: '#ffffff',
  textTransform: 'none',
  '&.active': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  gap: 12,
  fontFamily: '\'Poppins\', sans-serif',
  fontWeight: 600,
});

const MainLayout = () => {
  const theme = useTheme();
  const isLargerThanSmall = useMediaQuery(theme.breakpoints.up('sm'));

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };




  return (


    // <Box sx={{ display: 'flex', flexDirection: 'row' }}>
    //   {isLargerThanSmall && (
    //     <Box sx={{ width: 270, backgroundColor: '#3A206D', pl: 3 }}>
    //       <h1 style={{ color: 'white' }}>Multifun</h1>
    //       <NavButton
    //         startIcon={
    //           <Icon name='layers' />
    //         }
    //         className='active'
    //       >
    //         Dashboard
    //       </NavButton>
    //     </Box>
    //   )}
    //   <Box style={{ flex: 1 }}>
    //     <Outlet />
    //   </Box>
    // </Box >
    <Box>
      <Box sx={{ p: 2, backgroundColor: 'rgba(250,250,250)', borderBottom: '1px solid rgba(24, 24, 24, 0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
          <Box>
            <Button
              onClick={handleDrawerOpen}
              startIcon={
                <Icon name='menu' color='black' />
              }
              sx={{ padding: 0, width: '24px', maxWidth: '24px', minWidth: '24px', marginRight: '24px' }}
            />
            <Button startIcon={
              <Icon name='alarm' color='white' />
            }
              sx={{ padding: 0, width: '24px', maxWidth: '24px', minWidth: '24px' }}
            />
          </Box>
          <Box>
            <p style={{ display: 'inline', fontSize: 12, lineHeight: '16.8px', fontWeight: 700, marginRight: '25px' }}>Sami Baddar</p>
            <Button
              startIcon={
                <Icon name='avatar' size={40} />
              }
              sx={{ padding: 0, width: '40px', maxWidth: '40px', minWidth: '40px' }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            startIcon={
              <Icon name='arrow-left' />
            }
            sx={{ padding: 0, width: '24px', maxWidth: '24px', minWidth: '24px' }}
          />
          <Button
            startIcon={
              <Icon name='search' />
            }
            sx={{ padding: 0, width: '24px', maxWidth: '24px', minWidth: '24px' }}
          />
        </Box>
      </Box>

      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
