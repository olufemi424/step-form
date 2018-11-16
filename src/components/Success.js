import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    //process form here => {}
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submittion</h1>
          <p>You will get an email for futher instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
