import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toogleCart } from '../../redux/actions/index';

import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Dancing Script',
    fontSize: 35,
    fontWeigth: 500
  },
  bar: {
    background: grey[900]
  },
  inside: {
    width: '1300px',
    margin: '0 auto',
    color: green['A200']
  },
  menuButton: {
    marginRight: '10px'
  }
});

const Header = () => {
  const dispatch = useDispatch();
  const { isOpen, counter } = useSelector(state => state.shoppingCart);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.bar}>
        <Toolbar className={classes.inside}>
          <h5 className={classes.title}>React Shoes Store</h5>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="cart"
            onClick={() => dispatch(toogleCart({ isOpen }))}
          >
            <Badge badgeContent={counter}>
              <ShoppingCartSharpIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
