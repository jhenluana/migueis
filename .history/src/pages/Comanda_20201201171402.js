import React, {Component} from 'react'
import '../styles/pages/pedidos.css';
import { FiChevronLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
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

export default class Comanda extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rows:[]
  //   }
  // }

  
  // componentDidMount() {
  //   const tmp = JSON.parse(localStorage.getItem('comanda'));

  //   console.log(tmp)
  //   this.setState({rows:tmp})
  //   console.log(this.state.rows)
  // }
  // const [comanda, setComanda] = useState();
  // const [rows,setRows] = useState(JSON.parse(localStorage.getItem('comanda')))
  // useEffect(()=>{
  //   setRows(JSON.parse(localStorage.getItem('comanda')));
  //   console.log(rows);
  // },[])
  

  //JSON.parse(localStorage.getItem('comanda') || '');
  render(){
    const tmp = JSON.parse(localStorage.getItem('comanda')).filter(p => (p.qtd> 0));
    console.log(tmp)
    // const com = tmp
    // console.log(com)
    const rows = tmp;
  return (
    <div className="page-pedidos">
      <h2>Comanda</h2>

      <Link to="/app" className="voltar">
        <FiChevronLeft size={32} color="#000000" />
      </Link>
      {/* <TableContainer > */}
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell align="right">Quantidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {tmp.map((row) =>(
            <TableRow key={row.nome}>
              <TableCell component="th" scope="row">{row.nome}</TableCell>
              <TableCell align="right">{row.qtd}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      {/* </TableContainer> */}
      <main>

      </main>

      <Button className="btn_button" color="primary" href="/app">
        Finalizar Pedido
                </Button>


      <footer className="footer">
        <Barra />
      </footer>
    </div>
  );}
}

// export default Comanda
