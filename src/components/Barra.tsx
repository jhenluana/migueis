import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PayIcon from '@material-ui/icons/Payment';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    width: 400,
    height: 30,
   
  },
   colortext:{
      color: theme.palette.warning.dark,
    }
})
);

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.colortext}>
      <BottomNavigationAction label="Inicio" className={classes.colortext} value="Inicio" icon={<HomeIcon />}  />
      <BottomNavigationAction label="Favoritos" value="Favoritos" icon={<FavoriteIcon />}className={classes.colortext} />
      <BottomNavigationAction label="Pedidos" value="Pedidos" icon={<ShoppingIcon />} className={classes.colortext}/>
      <BottomNavigationAction label="Finalizar" value="Finalizar" icon={<PayIcon />} className={classes.colortext}/>
    </BottomNavigation>
  );
}