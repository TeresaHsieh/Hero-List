import React from "react";
import { CssBaseline, Container, CardMedia } from "@material-ui/core";
// import backgroundImage from "../../img/background.jpg";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <CssBaseline />
        <Container fixed>
          {/* <CardMedia image="../../img/background.jpg" title="Hero BackGround" /> */}
          <button>Choose A Hero!</button>
        </Container>
      </>
    );
  }
}

export default Home;
