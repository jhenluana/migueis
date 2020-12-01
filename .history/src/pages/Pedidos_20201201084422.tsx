import React from 'react'
import '../styles/pages/pedidos.css';
import { FiChevronLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Button from '@material-ui/core/Button';

function Pedidos() {
    return (
      <div className="page-pedidos">
          <h2>Pedidos</h2>
 
            <Link to="/app" className="voltar">
                <FiChevronLeft size={32} color="#000000"/>
            </Link>
                <main>
                </main>

                <Button className="btn_button" color="primary" href="/app">
                    Realizar Pedido
                </Button>

  
        </div>
      );
    }

export default Pedidos
