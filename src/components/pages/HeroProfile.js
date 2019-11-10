import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { saveHeroAllDataInRedux } from "../../store/Action";

class HeroProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    if (this.props.currentHeroPower) {
      return (
        <>
          <div>STR {this.props.currentHeroPower.str}</div>
          <div>INT {this.props.currentHeroPower.int}</div>
          <div>AGI {this.props.currentHeroPower.agi}</div>
          <div>LUK {this.props.currentHeroPower.luk}</div>
        </>
      );
    }
    return (
      <>
        <div> STR </div>
        <div> INT </div>
        <div> AGI </div>
        <div> LUK </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    heroData: state.allHeroData,
    currentHero: state.currentChosenHero,
    currentHeroPower: state.currentHeroPower
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroProfile);
