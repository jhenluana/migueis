import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Produtolistar from '../components/Produtolistar';
import '../styles/pages/cardapio.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}



function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Peixes" {...a11yProps(0)} />
          <Tab label="Massas" {...a11yProps(1)} />
          <Tab label="Petiscos" {...a11yProps(2)} />
          <Tab label="Carmes" {...a11yProps(3)} />
          <Tab label="Frangos" {...a11yProps(4)} />
          <Tab label="Jacaré" {...a11yProps(5)} />
          <Tab label="Saladas" {...a11yProps(6)} />
          <Tab label="Drinks" {...a11yProps(7)} />
          <Tab label="Sobremesas" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      {/* <Produtolistar /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Massas
      </TabPanel>
      <TabPanel value={value} index={2}>
        Petiscos
      </TabPanel>
      <TabPanel value={value} index={3}>
        Carnes
      </TabPanel>
      <TabPanel value={value} index={4}>
        Frangos
      </TabPanel>
      <TabPanel value={value} index={5}>
        Jacaré
      </TabPanel>
      <TabPanel value={value} index={6}>
        Saladas
      </TabPanel>
      <TabPanel value={value} index={7}>
        Drinks
      </TabPanel>
      <TabPanel value={value} index={8}>
        Sobremesas
      </TabPanel>
    </div>
  )
}