import React from 'react'
// import { Button } from '@material-ui/core';
import logoImg from '../images/logoeclipse.svg';
import '../styles/pages/init.css';

import Button from '@material-ui/core/Button';

function inicio() {
    return (
          <div className="container_cabecalho">
              <img src={logoImg} alt="Miguéis"/> 
    
              <main>
              <h5>Bem Vindo</h5>
              </main>
              <Button className="btn_cardapio" color="primary" href="/app">
                  Cardapio
                </Button>

            
        </div>
      );
    }

export default inicio

