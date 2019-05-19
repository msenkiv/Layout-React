import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dividers from './Dividers'

const styles = {
  card: {
    maxWidth: 200,
    margin:10,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  cardTitle:{
    backgroundColor: '#999',
    height: 50,
    with:'100%',
    textAlign:'center',
    border: '1px solid',
    boxShadow: '5px 10px 8px #888888'
  },
  cardImg:{
    backgroundColor: '#000',
    height: 80,
    with:'100%',

  }
};


function Cards(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
       <div className={classes.cardTitle}>SERVICE</div>
       <div className={classes.cardImg}></div>
        <CardContent>
        <Dividers/>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="outlined" size="medium" color="primary">
          Ver Mais
        </Button>
      </CardActions>
    </Card>
  );
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);