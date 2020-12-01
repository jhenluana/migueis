import React from 'react'
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
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import Barra from '../components/Barra';


const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

function createData(nome: string, qtd: number) {
  return { nome, qtd};
}

const makeRows = () => {
  const comanda = localStorage.getItem('comanda')||'';
  const tmp = JSON.parse(comanda);
  if(tmp){
    const rows = tmp.map((p:any) => createData(p.nome,p.qtd));
    return rows;
  }
}

const rows = makeRows();


function Comanda() {
  const classes = useStyles();

  return (
    <div className="page-pedidos">
      <h2>Comanda</h2>

      <Link to="/app" className="voltar">
        <FiChevronLeft size={32} color="#000000" />
      </Link>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell align="right">Quantidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows.lentgh) > 0 && rows.map((row:any) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.nome}</TableCell>
              <TableCell align="right">{row.qtd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <main>
     
      </main>

      <Button className="btn_button" color="primary" href="/app">
        Finalizar Pedido
                </Button>


      <footer className="footer">
        <Barra />
      </footer>
    </div>
  );
}

export default Comanda
