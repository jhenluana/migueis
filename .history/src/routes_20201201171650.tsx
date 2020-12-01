import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import  Cardapio from './pages/Cardapio';
import inicio from './pages/inicio';
import Comanda from './pages/Comanda.js';
// import  Peixes from './pages/Peixes';
// import Produtolistar from  './components/Produtolistar';
import Pedidos from './pages/Pedidos.js';
//"view/Cardapio/index.tsx"
// import App from "./App.js"
// import LandingPage from "./view/LandingPage";
// import Cardapio from "./view/Cardapio";
// import CozinhaListar from "./view/CozinhaListar";
// import CozinhaConcluir from "./view/CozinhaConcluir";
// import BarListar from "./view/BarListar";
// import BarConcluir from "./view/BarConcluir";
// import CaixaListar from "./view/CaixaListar";
// import CaixaConcluir from "./view/CaixaConcluir";

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                 <Route path="/" exact component={inicio}/>
                 <Route path="/app" exact component={Cardapio} />
                 <Route path="/listar/pedidos" exact component={Pedidos} />
                 <Route path="/listar/Cardapio" exact component={Cardapio} />
                 <Route path="/checkout" exact component={Comanda} />
                 {/* <Route path="/cardapio/:id_mes" exact component={Cardapio} /> */} 
                 {/* <Route path="/cozinha/listar" exact component={CozinhaListar} /> */}
                 {/* <Route path="/cozinha/concluir" exact component={CozinhaConcluir} /> */}
                 {/* <Route path="/bar/listar" exact component={BarListar} /> */}
                 {/* <Route path="/bar/concluir" exact component={BarConcluir} /> */}
                 {/* <Route path="/caixa/listar" exact component={CaixaListar} /> */}
                 {/* <Route path="/caixa/concluir" exact component={CaixaConcluir} /> */}
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;

