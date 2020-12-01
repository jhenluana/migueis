import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import {peixes, massas} from './data.js';
import grey from '@material-ui/core/colors/grey';
import Produtos from '../components/Produtos';
// import { peixes, massas } from '../components/Produtos/data';
import api from '../services/api';


function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: grey[200],
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  //criei uma variavel de estado como cardapio e iniciei como vazia
  const [cardapio, setCardapio] = useState([]);

  const [comanda, setComanda] = useState([]);

  //isso aqui é executado logo que a página é carregada e pega os dados da api
  useEffect(() => {
    const getFromAPI = () => {
      api.get('/produto/listar').then(response => {
        //aqui seta o cardapio com o que vem da API
        setCardapio(response.data.dados);
      }
      )
    }
    getFromAPI()
  }, []);

  // const incluiComanda = ()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //criei essa funcçao só pra facilitar a vida pra filtrar o que é cada produto
  const filterCardapio = (tipo) => {
    const res = cardapio.filter(c => (c.tipo === tipo));
    return res;
  }

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
          <Tab label="Carnes" {...a11yProps(3)} />
          <Tab label="Frango" {...a11yProps(4)} />
          <Tab label="Jacaré" {...a11yProps(5)} />
          <Tab label="Saladas" {...a11yProps(6)} />
          <Tab label="Sobremesas" {...a11yProps(7)} />
          <Tab label="Drinks" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/** aqui eu listo só os "peixes" */}
        <Produtos data={filterCardapio("peixes")} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Produtos data={filterCardapio("massas")} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Produtos data={filterCardapio("petiscos")} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Produtos data={filterCardapio("carnes")} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Produtos data={filterCardapio("frango")} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Produtos data={filterCardapio("jacare")} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Produtos data={filterCardapio("saladas")} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Produtos data={filterCardapio("sobremesa")} />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Produtos data={filterCardapio("drinks")} />
      </TabPanel>
    </div>
  );
}
