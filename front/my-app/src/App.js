import React from "react";
import SignIn from "../src/components/SignIn";
import SignUp from "../src/components/SignUp";
import Profile from "../src/components/Profile";

import "./App.css";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12} alignContent="center">
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} sm={6} style={{ "text-align": "center" }}>
                  <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Router>
                    <Switch>
                      <Route exact path="/">
                        <SignIn />
                      </Route>
                      <Route path="/signin">
                        <SignIn />
                      </Route>
                      <Route path="/signup">
                        <SignUp />
                      </Route>
                      <Route path="/profile">
                        <Profile />
                      </Route>
                    </Switch>
                  </Router>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
