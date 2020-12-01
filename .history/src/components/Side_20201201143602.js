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

  const listarTodosProdutosPraComanda = (prods) => {
    const produtos = prods.map(p => {return {item:p._id, nome:p.produto, qtd:0}}) 
    console.log(produtos);
    setComanda(produtos);
  }
  //isso aqui é executado logo que a página é carregada e pega os dados da api
  useEffect(() => {
    const getFromAPI = () => {
      api.get('/produto/listar').then(response => {
        //aqui seta o cardapio com o que vem da API
        setCardapio(response.data.dados);
        listarTodosProdutosPraComanda(response.data.dados)
      }
      )
    }
    getFromAPI()
  }, []);
  //vou fazer uma gambiarra aqui só pra apresentar
  // depois vcs vao ter que corrigir hein...
  const incluiComanda = (id,qtd) => {
    const novaComanda = comanda.map(p => {
      if(p.item === id){
        return {...p, qtd:qtd}
      }
      return {...p, qtd:p.qtd}

    })
    // console.log(novaComanda);
    setComanda(novaComanda);
  }
  const getQtd = (id) => {
    const quantidade = comanda.map(p => {
      if(p.item === id){
        return p.qtd
      }

    })
    return quantidade
  }

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
        <Produtos getQuantidade={getQtd} addComanda={incluiComanda} data={filterCardapio("peixes")} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Produtos getQuantidade={getQtd} addComanda={incluiComanda} data={filterCardapio("massas")} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Produtos getQuantidade={getQtd} addComanda={incluiComanda} data={filterCardapio("petiscos")} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Produtos getQuantidade={getQtd} addComanda={incluiComanda} data={filterCardapio("carnes")} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Produtos getQuantidade={getQtd} addComanda={incluiComanda} data={filterCardapio("frango")} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Produtos getQuantidade={getQtd} addComanda={incluiComanda} data={filterCardapio("jacare")} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Produtos getQuantidade={getQtd} addComanda={incluiComanda} data={filterCardapio("saladas")} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Produtos getQuantidade={getQtd} addComanda={incluiComanda} data={filterCardapio("sobremesa")} />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Produtos getQuantidade={getQtd} addComanda={incluiComanda} data={filterCardapio("drinks")} />
      </TabPanel>
    </div>
  );
}
