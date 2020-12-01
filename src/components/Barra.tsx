import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';
import PayIcon from '@material-ui/icons/Payment';
import '../styles/pages/sidebar.css';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    width: 420,
    height: 50,
    position: 'fixed',
    bottom: 0,
    background: grey[100],
  },
  coloricon:{
  color: theme.palette.warning.dark,

  },

})
);

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
// ISSO É O MENU INFERIOR
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
      <BottomNavigationAction label="Inicio" href="/app" icon={<HomeIcon />} className={classes.coloricon}/>
      <BottomNavigationAction label="Pedidos" href="/listar/pedidos" icon={<ShoppingIcon />} className={classes.coloricon}/>
      <BottomNavigationAction label="Finalizar" href="/checkout" icon={<PayIcon />} className={classes.coloricon} />
    </BottomNavigation>
  );
}