import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function Button(props) {
  const { classes } = props;
  return (
    <div>
      <Fab variant="extended" aria-label="Delete" className={classes.fab}>
        Ver Mais
      </Fab>
   
    </div>
  );
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Button);