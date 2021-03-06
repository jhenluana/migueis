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
    minWidth: 650,
  },
});

function createData(nome: string, qtd: number) {
  return { nome, qtd};
}
const makeRows = () => {
  const tmp = JSON.parse(localStorage.getItem('comanda'));
  if(tmp){
    const rows = tmp.map(p => createData(p.nome,p.qtd));
  }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function Comanda() {
  const classes = useStyles();

  return (
    <div className="page-pedidos">
      <h2>Comanda</h2>

      <Link to="/app" className="voltar">
        <FiChevronLeft size={32} color="#000000" />
      </Link>
      <main>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
