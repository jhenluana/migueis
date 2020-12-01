import React, {useEffect} from 'react';
import '../styles/pages/cardapio.css';
import Side from '../components/Side';
import Barra from '../components/Barra';
import api from '../services/api';


// import { Link } from 'react-router-dom'



function Cardapio() {


    return (
  <body>
  <div className="conteiner_wrapper">

  <main>

  </main>

  <header className="header">
    <Side/>  
  </header>

  </div>

  
  <footer className="footer">
    <Barra />
  </footer>

  </body>
        
      );
    }



export default Cardapio;