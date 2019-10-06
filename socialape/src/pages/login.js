import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../assets/images/logo.png";
import axios from "axios";

// MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    textAlign: "center"
  },
  image: {
    margin: "20px auto 20px auto"
  },
  pageTitle: {
    margin: "20px auto 20px auto"
  },
  textField: {
    margin: "20px auto 20px auto"
  },
  button: {
    marginTop: 20
  },
  customError: {
    color: "red",
    fontSize: ".8rem"
  }
};

export class login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: {}
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/login", userData)
      .then(res => {
        console.log(res.data);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          errors: error.response.data,
          loading: false
        });
      });
  };

  render() {
    const { email, password, loading, errors } = this.state;
    const { classes } = this.props;

    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt="" className={classes.image} />
          <Typography variant="h3" className={classes.pageTitle}>
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              fullWidth
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={email}
              onChange={this.handleChange}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              fullWidth
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={password}
              onChange={this.handleChange}
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Login
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(login);
