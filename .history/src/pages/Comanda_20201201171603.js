import React, {Component} from 'react'
import '../styles/pages/pedidos.css';
import { FiChevronLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import Barra from '../components/Barra';


const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

// function createData(nome: string, qtd: number) {
//   return { nome, qtd };
// }


// const classes = useStyles();

function Comanda() {
  return (
    <div className="page-Comanda">
      <h2>Pedidos</h2>

      <Link to="/app" className="voltar">
        <FiChevronLeft size={32} color="#000000" />
      </Link>
      <main>
      </main>

      <Button className="btn_button" color="primary" href="/app">
        Realizar Pedido
      </Button>


      <footer className="footer">
        <Barra />
      </footer>
    </div>  
  );
}

export default Pedidos