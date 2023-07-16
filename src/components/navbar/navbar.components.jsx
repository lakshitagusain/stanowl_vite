import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import { TabContext, TabList } from "@mui/lab";
import TabPanel from '@mui/lab/TabPanel';
import { Link , Outlet} from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';

import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import CreateLink from '../nav-tab-routes/create-link/create-link.components';
import Stats from '../nav-tab-routes/stats/stats.components';
import Dashboard from '../nav-tab-routes/dashboard/dashboard.components';
import PaymentDetails from '../nav-tab-routes/payment-details/payment-details.components';
import ProfileSettings from '../nav-tab-routes/profile-settings/profile-settings.components';
import Background from '../background/background.components';
import image from "../../assets/logo_final.png";
import './navbar.styles.scss';

const drawerWidth = 220;

export default function Navbar(props) {
  const navigate = useNavigate();
  const [tabId, setTabId] = React.useState("1");
  const handleChange = (event, id) => setTabId(id);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const heading = ["Create Link","Dashboard","Statistics","Payment Details","Profile Settings"];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
    <img src={image} alt='S'></img>
        <Divider variant="middle" className='divider'/>
        <Toolbar />      
        <Box sx={{ overflow: 'auto'}} className="left-nav-bar">
          <TabList
          className='tab-box'
          orientation="vertical"
          value={tabId}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          >
            <Tab 
              className='tab-style'
              icon={<LinkRoundedIcon style={{ color: 'white' }}/>}
              iconPosition="start"
              label={<span style={{ color: 'white' }}>Create Link</span>}
              color='primary'
              value='1'
              />

            <Tab 
              className='tab-style'
              icon={<DashboardRoundedIcon style={{ color: 'white' }}/>}
              iconPosition="start"
              label={<span style={{ color: 'white' }}>Dashboard</span>}
              color='primary'
              value='2'
              />

            <Tab 
              className='tab-style'
              icon={<BarChartRoundedIcon style={{ color: 'white' }}/>}
              iconPosition="start"
              label={<span style={{ color: 'white' }}>Statistics</span>}
              color='primary'
              value='3'
              />

            <Tab 
              className='tab-style'
              icon={<AccountBalanceRoundedIcon style={{ color: 'white' }}/>}
              iconPosition="start"
              label={<span style={{ color: 'white' }}> Payment Details </span>}
              color='primary'
              value='4'
              />
            
            <Tab 
              className='tab-style'
              icon={<ManageAccountsRoundedIcon style={{ color: 'white' }}/>}
              iconPosition="start"
              label={<span style={{ color: 'white' }}> Profile Settings </span>}
              color='primary'
              value='5'
              />

          </TabList>
          <div className='button-box'>
            <Button className='logout-button' onClick={()=>navigate("/login")} variant="outlined" startIcon={<ExitToAppRoundedIcon/>}>
                LOGOUT
            </Button>
          </div>

          <Outlet/>
        </Box>
      </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <AppBar
        className='appbar-style'
        position="fixed"
        sx={{
          width: { xs: `calc(96.5%)`, md:  150},
        }}
      >
        <Toolbar className='topbar-style'>
          <Typography 
          className='topbar-text' 
          sx={{display: { md: 'none' } }}
          style={{ flex: 1 }}
          > {heading[tabId-1]} </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{display: { md: 'none' } }}
          ><MenuIcon />
          </IconButton>

          <PersonRoundedIcon className='topbar-icon'/>
        </Toolbar>
      </AppBar>
      <TabContext value={tabId}>
      {/* disableGutters="true" */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          className="left-nav"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          className="left-nav"
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
      <TabPanel overflowY='scroll' value='1'>
        <CreateLink/>
      </TabPanel>
      <TabPanel overflowY='scroll' value='2'>
        <Dashboard/>
      </TabPanel>
      <TabPanel overflowY='scroll' value='3'>
        <Stats/>
      </TabPanel>
      <TabPanel overflowY='scroll' value='4'>
        <PaymentDetails/>
      </TabPanel>
      <TabPanel overflowY='scroll' value='5'>
        <ProfileSettings/>
      </TabPanel>

      </TabContext>
      </Box>
    </div>
  );
}