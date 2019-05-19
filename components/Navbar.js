import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const styles = {
  root: {
    flexGrow: 1,
  },
 
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

function NavHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed"  style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Octopus Resultados Digitais
          </Typography>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
NavHeader.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NavHeader);