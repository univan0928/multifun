import React from 'react';

import useAuth from '../../hooks/useAuth';
import { Box, Button, Link, Card, CardContent, Container, Grid, IconButton, Menu, MenuItem, TextField, Typography, styled } from '@mui/material';
import Icon from '../../components/Icon';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


const DashboardPage = () => {

  const auth = useAuth();

  const CashbackButton = styled(Button)({
    backgroundColor: 'rgba(39, 174, 96, 0.15)',
    borderRadius: '100px',
    color: '#27AE60',
    fontWeight: 700,
    lineHeight: '28px',
    textTransform: 'none',
    padding: '10px 75px'
  });

  const ResigterButton = styled(Button)({
    backgroundColor: '#FFFFFF',
    color: '#6861AB',
    borderRadius: '8px',
    width: '100%',
    fontWeight: 600,
    alignItems: 'center',
    padding: '18px 0px',
    marginTop: '20px',
  });

  const ReferFriendButton = styled(Button)({
    borderRadius: '100px',
    backgroundColor: 'rgba(108, 61, 158, 0.15)',
    color: '#6C3D9E',
    fontWeight: 600,
    fontSize: '16px',
    padding: '13px 38px '
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const productList = [
    {
      imgUrl: '/images/banners/main.svg',
      email: 'samibdr@gmail.com',
      last: 124.5,
      total: 1324.5,
      play: 'Go to Casino'
    },
    {
      imgUrl: '/images/banners/main.svg',
      email: 'samibdr@gmail.com',
      last: 124.5,
      total: 1324.5,
      play: 'Go to Casino'
    },
    {
      imgUrl: '/images/banners/main.svg',
      email: 'samibdr@gmail.com',
      last: 124.5,
      total: 1324.5,
      play: 'Go to Casino'
    },

  ];

  const activityList = [
    {
      date: '23 March 2023',
      content: '+€20 Cashback from Mr.Green'
    },
    {
      date: '23 March 2023',
      content: '+€20 Cashback from Mr.Green'
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>

        <Box sx={{ p: 2, backgroundColor: 'rgba(250,250,250)' }}>
          <Box sx={{ backgroundColor: '#FFFFFF', textAlign: 'center', borderRadius: '8px', boxShadow: '6px 6px 50px rgba(0, 0, 0, 0.05)', padding: '16px 51px' }}>
            <CashbackButton>
              Cashback
            </CashbackButton>
            <p style={{ fontWeight: 600, fontSize: 12, color: '#181818', marginTop: '8px' }}>This month</p>
            <p style={{ fontWeight: 600, fontSize: 40, color: '#181818', marginTop: '8px' }}>€120.00</p>
          </Box>
          <Box sx={{ backgroundColor: '#5B2F8A', borderRadius: '16px', marginTop: '24px', padding: '13px 16px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontWeight: 700, color: 'white', fontSize: '33px', lineHeight: '46px', letterSpacing: '0.5px', margin: '0px' }}>CASUMO</p>
              <Box>
                <Button
                  startIcon={
                    <Icon name='refresh-button' />
                  }
                  sx={{ padding: 0, width: '24px', maxWidth: '24px', minWidth: '24px', paddingRight: '8px' }}
                >
                </Button>
                <Button
                  startIcon={
                    <Icon name='more-vertical' />
                  }
                  sx={{ padding: 0, width: '24px', maxWidth: '24px', minWidth: '24px' }}
                >
                </Button>
              </Box>
            </Box>
            <p style={{ fontWeight: 600, color: 'white', fontSize: '20px', letterSpacing: '0.5px', marginTop: '6px' }}>€200 Bonus + 100 Freespins <br /> 10% Bonus</p>
            <p style={{ fontWeight: 400, color: 'white', fontSize: '12px', letterSpacing: '0.5px', lineHeight: '16.8px', marginTop: '7px' }}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <img src='/images/mr-green.png' style={{ marginTop: '24px', width: '100%' }} />
            <ResigterButton
              startIcon={
                <Icon name='register-account' />
              }
            >Register Acciount</ResigterButton>
            <Box sx={{ marginTop: '24px' }}>
              <p style={{ color: 'white', fontSize: '12px', fontWeight: 500 }}>Payment Methods</p>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
              </Box>
            </Box>
            <Box sx={{ marginTop: '16px' }}>
              <p style={{ color: 'white', fontSize: '12px' }}>Game Providers</p>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
                <img src="/images/payment-button.png" alt="payment-button" />
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              // startIcon={
              //   <Icon name="invoice-payment" />
              // }
              // endIcon={
              //   <Icon name='down-vector' />
              // }
              style={{
                color: 'black',
                width: '100%',
                backgroundColor: 'rgba(233, 18, 135, 0.05)',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 600,
                padding: '12px 16px',
                marginTop: '23px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
                textTransform: 'none'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ marginRight: '7px' }}>
                  <Icon name='invoice-payment' />
                </Box>
                Casino Accounts
              </Box>
              <Box>
                <Icon name='down-vector' />
              </Box>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>

          <Box>
            {productList.map((item, idx) => (
              <Card sx={{ marginTop: '16px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                <CardContent>
                  <Grid container alignItems="top">
                    <Grid item xs={6} md={4} textAlign="left" >
                      <p style={{ margin: 0, fontSize: '12px', fontWeight: '400', letterSpacing: '-0.3px', textTransform: 'none', marginBottom: '7px' }}>Casino</p>
                      <img alt="green iguana" src={item.imgUrl} style={{ width: "130px", height: '85px' }} />
                    </Grid>
                    <Grid item xs={6} md={4} textAlign="right" >
                      <IconButton aria-label="settings" style={{ padding: 0 }}>
                        <MoreVertOutlinedIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: '8px' }}>
                      <Typography variant="overline" color="black" fontWeight="bold">
                        <p style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '-0.3px', textTransform: 'none' }}>Email</p>
                        {item.email}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="left" style={{ marginTop: '8px' }}>
                      <Typography variant="overline" color="black" fontWeight="bold">
                        <p style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '-0.3px', textTransform: 'none' }}>Last Cashback</p>
                        €{item.last}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="left" style={{ marginTop: '8px' }}>
                      <Typography variant="overline" color="black" fontWeight="bold">
                        <p style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '-0.3px', textTransform: 'none' }}>Total Cashback</p>
                        €{item.total}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="left" style={{ marginTop: '8px' }}>
                      <Typography variant="overline" color="black" fontWeight="bold">
                        <p style={{ fontSize: '12px', fontWeight: '400', letterSpacing: '-0.3px', textTransform: 'none' }}>Play Now</p>
                        <Button sx={{ padding: '2px 12px', color: "#229427", fontWeight: "700", backgroundColor: "rgba(34, 148, 39, 0.2)", borderRadius: "100px", textTransform: 'none' }} >{item.play}</Button>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box sx={{ marginTop: '24px', marginBottom: '26px' }}>
            <p style={{ fontWeight: 400, color: 'rgba(0, 0, 0, 0.53)', fontSize: '14px', letterSpacing: '-0.3px', marginBottom: '12px' }}>Refer & Earn More</p>
            <Card>
              <CardContent sx={{ backgroundColor: 'white', borderRadius: '4px', p: 2, textAlign: 'center' }}>
                <ReferFriendButton>Refer friends and earn</ReferFriendButton>
                <p style={{ color: '#6C3D9E', fontWeight: 700, fontSize: '32px', margin: 0, padding: 0 }}>50%</p>
                <p style={{ color: '#181818', fontSize: '12px', fontWeight: 700 }}>of their cashback for 3 months</p>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <p style={{ fontWeight: 400, color: 'rgba(0, 0, 0, 0.53)', fontSize: '14px', letterSpacing: '-0.3px' }}>Recent Activity</p>
              <Link href="#" style={{ color: 'rgba(108, 61, 158, 0.6)', fontWeight: 500, fontSize: '12px', textDecoration: 'none' }}>View All</Link>
            </Box>
            <Card sx={{ marginBottom: '20px' }} >
              <CardContent sx={{ backgroundColor: 'white', borderRadius: '4px', paddingBottom: '0px !important' }}>

                {activityList.map((item, idx) => (
                  <div style={{ marginBottom: '24px' }}>
                    <p style={{ fontWeight: 500, fontSize: '12px', letterSpacing: '-0.3px', color: 'rgba(108,61,158,0.6)', marginBottom: '8px' }}>{item.date}</p>
                    <p style={{ fontWeight: 700, letterSpacing: '-0.3px', color: 'rgba(0,0,0,0.53)', fontSize: '14px' }}>{item.content}</p>
                  </div>
                ))}

              </CardContent>
            </Card>
          </Box>
        </Box>


      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: '#F8F8FA' }}>
      </Grid>
      <Grid>

      </Grid>
    </Grid >
  );
};

export default DashboardPage;