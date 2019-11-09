import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
        <div>Teresa</div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HeroList} />
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
