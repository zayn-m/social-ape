import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import Scream from "../components/Scream";

export class home extends Component {
  state = {
    screams: null
  };

  componentDidMount() {
    axios
      .get("/screams")
      .then(response => {
        this.setState({ screams: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { screams } = this.state;
    let recentScreamsMarkup = screams ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <p>Loading...</p>
    );

    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>

        <Grid item sm={4} xs={12}>
          <p>Profile</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
