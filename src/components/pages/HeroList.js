import React from "react";
import axios from "axios";

class HeroList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("https://hahow-recruit.herokuapp.com/heroes")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div>Teresa</div>
        <div>Teresa</div>
        <div>Teresa</div>
        <div>Teresa</div>
      </>
    );
  }
}

export default HeroList;
