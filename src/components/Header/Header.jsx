import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import { grey, green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
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

const Header = ({ handleShoppingCart }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.bar}>
        <Toolbar className={classes.inside}>
          <Typography
            variant="h5"
            className={classes.title}
            onClick={() => history.push('/')}
          >
            React Shoes Store
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleShoppingCart}
          >
            <ShoppingCartSharpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

Header.propTypes = {
  handleShoppingCart: PropTypes.func
};
