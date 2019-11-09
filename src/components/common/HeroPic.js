import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import { currentChosenHero } from "../../store/Action";

class HeroPic extends React.Component {
  constructor(props) {
    super(props);
  }

  chooseThisHero = () => {
    this.props.currentChosenHero(this.props.eachData.id);
  };

  render() {
    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          onClick={this.chooseThisHero}
        >
          <img src={this.props.eachData.image} className="HeroPhoto" />
          {this.props.eachData.name}
        </Box>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    heroData: state.allHeroData,
    currentHero: state.currentChosenHero
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentChosenHero: currentHeroID => {
      dispatch(currentChosenHero(currentHeroID));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroPic);
