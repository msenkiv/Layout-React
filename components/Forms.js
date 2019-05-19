import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  textMultline:{
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 420,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class Forms extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: '',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="standard-required"
          label="Nome"
          className={classes.textField}
          margin="normal"
        />
          <TextField
          required
          id="standard-required"
          label="Sobrenome"
          className={classes.textField}
          margin="normal"
        />
             <TextField
          required
          id="standard-required"
          label="Email"
          className={classes.textField}
          margin="normal"
        />
             <TextField
          required
          id="standard-required"
          label="Empresa"
          className={classes.textField}
          margin="normal"
        />
            <TextField
          id="standard-multiline-flexible"
          label="Mensagem*"
          multiline 
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textMultline}
          margin="normal"
        />
      </form>
    );
  }
}

Forms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Forms);