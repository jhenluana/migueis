import React from 'react';
import '../styles/pages/cardapio.css';
import Sidebar from '../components/Sidebar';
import Barra from '../components/Barra';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// import { Link } from 'react-router-dom'



function Cardapio() {
    return (
      
        // <div id="page-cardapio">
          <div className="conteiner_cardapio">

              <main>
            
              </main>

            {/* </div> */}
            <Sidebar />
            <Barra />
        </div>
      );
    }



export default Cardapio;