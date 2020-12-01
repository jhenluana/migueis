import React, { Component } from 'react'
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
import api from '../services/api';


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
  state = {
    pedidos: []
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rows:[]
  //   }
  // }


  async componentDidMount() {
    await api.get('/comanda/listar').then( response =>{
      const tmp = response.data;
      const tmp1 = tmp.filter(p => (p.mesa===10 && p.pedidos.length > 0));
      const tmp2 = tmp1.map(p => {return p.pedidos});
      const tmp3 = tmp2.flat();
      const com = []
      tmp3.forEach(p => {
        if(com.find(elem => elem !== p)){
          com.push(p)

        }
      })
      console.log(com);

     
    //  console.log(sums);
      
      // console.log(tmp3)
    this.setState({ pedidos: tmp3})
    console.log(this.state.pedidos)
  }
    )
  }

  //JSON.parse(localStorage.getItem('comanda') || '');
  render() {

    const {pedidos} = this.state;
    // const pedido = pedidos.map(p => {return p.pedidos});
    if (pedidos.length === 0) {
      return (<div className="page-pedidos">
        Sem pedidos
        <footer className="footer">
          <Barra />
        </footer>
      </div>)
    }
    else
      return (
        <div className="page-pedidos">
          {/* <h2>Comanda</h2>

      <Link to="/app" className="voltar">
        <FiChevronLeft size={32} color="#000000" />
      </Link> */}
          <TableContainer style={{paddingBottom:'50px'}}>

            {/* {pedido.map(p => ( */}
              <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Produto</TableCell>
                  {/* <TableCell align="right">Quantidade</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {pedidos.map((row) => (
                  <TableRow key={row.produto}>
                    <TableCell component="th" scope="row">{row.produto}</TableCell>
                    {/* <TableCell align="right">{row.qtd}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* ))} */}
          </TableContainer>
          <main>

          </main>

          {/* <Button className="btn_button" color="primary" onClick={() => this.handlePedido()}>
            Enviar Pedido
                </Button> */}


          <footer className="footer">
            <Barra />
          </footer>
        </div>
      );
  }
}

// export default Comanda
