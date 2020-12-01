import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import pcubana from '../images/PINTAD-A-CUBANA-100x100.jpg';
import pbaiana from '../images/PINTADO_BAIANA-100x100.jpg';
import pfrito from '../images/PINTADO_FRITO_2-100x100.jpg';
import pcui from '../images/PINTADO_CUIABANA-100x100.jpg';
import pcham from '../images/PINTADO_CHAMPAGNE-100x100.jpg';
import dmigueis from '../images/PINTADO_DOM_MIGUEIS-100x100.jpg';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.action.hover,

    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    colortext:{
      color: theme.palette.secondary.dark,
    }
  }),
);


export default function FolderList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
          <img src={pfrito} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pintado frito" secondary="Filé de Pintado, Arroz branco, Fritas e Vinagrete" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img src={pcubana}  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pintado a Cubana" secondary="Filé de Pintado a milanesa gratinado, banana da terra, arroz a grega e fritas" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
            <img src={pbaiana}  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pintado a Baiana" secondary="Filé de Pintado ensopado com Azeite de Dendê, Leite de Coco, Pimenta, Arroz Branco e Pirão" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
          <img src={pcui} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pintado a Cuiabana" secondary="Filé de Pintado ensopado com banana, Mandioca, Arroz Branco e Pirão" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
          <img src={pcham} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Pintado Champagne" secondary="Filé de Pintado flambado no Champagne, Creme de leite, Arroz branco e Batata Sauté" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.large}>
          <img src={dmigueis} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Dom Miguéis" secondary="Filé de Pintado a milanesa recheado com Camarão, Arroz branco e Fritas" />
      </ListItem>
    </List>
    
  );
}