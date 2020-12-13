import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CardActions, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300
  },
  media: {
    height: 170,
    objectFit: 'contain'
  },
  content: {
    height: 20,
    padding: 5
  }
});

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const history = useHistory();
  const { name, image, price, category, id } = product;
  return (
    <>
      {!product ? (
        <CircularProgress />
      ) : (
        <Grid
          item
          xs={12}
          sm={4}
          lg={3}
          onClick={() => history.push(`/product/${id}`)}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={image}
                title="Nike Adversary"
              />
            </CardActionArea>
            <CardContent className={classes.content}>
              <Typography variant="p" display="block" component="strong">
                {name}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="strong"
              >
                $ {price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string
};
