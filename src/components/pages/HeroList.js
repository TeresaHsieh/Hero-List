import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import HeroPic from "../common/HeroPic";
import { saveHeroAllDataInRedux } from "../../store/Action";

class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("https://hahow-recruit.herokuapp.com/heroes")
      .then(response => {
        console.log(response);
        this.props.saveHeroAllDataInRedux(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <HeroPic />
        <HeroPic />
        <HeroPic />
        <HeroPic />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    heroData: state.allHeroData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveHeroAllDataInRedux: allHeroData => {
      dispatch(saveHeroAllDataInRedux(allHeroData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList);
