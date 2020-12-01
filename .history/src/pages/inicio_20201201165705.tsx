import React from 'react'
// import { Button } from '@material-ui/core';
import logoImg from '../images/logo 1.svg';
import '../styles/pages/init.css';
// import fundo from '../images/fundo.jpg';

import Button from '@material-ui/core/Button';

function inicio() {
    return (
          <div className="container_cabecalho">
              <img src={logoImg} alt="Miguéis"/> 
    
              <main>

              </main>
              <Button className="btn_cardapio" color="primary" href="/app">
                  Cardápio
                </Button>

            
        </div>
      );
    }

export default inicio

