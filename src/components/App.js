import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import HeroList from "./pages/HeroList";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <CssBaseline />
        <Container fixed>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HeroList} />
              {/* Home */}
              <Route path="/heroes" component={HeroList} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Container>
      </>
    );
  }
}

export default App;
