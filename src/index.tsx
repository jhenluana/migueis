import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import purple from '@material-ui/core/colors/purple';
import orange from '@material-ui/core/colors/orange';

import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette:{
    primary: orange,
    secondary: orange,

  }

})
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
