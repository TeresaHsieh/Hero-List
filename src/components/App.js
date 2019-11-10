import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import HeroList from "./pages/HeroList";
import NotFound from "./pages/NotFound";
import { ResetStyle, GlobalStyle } from "../globalStyle";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <ResetStyle />
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* Home */}
            <Route path="/heroes" component={HeroList} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
