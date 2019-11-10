import React from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { currentChosenHero } from "../../store/Action";
import { saveChosenHeroPowerToRedux } from "../../store/Action";

class HeroCard extends React.Component {
  constructor(props) {
    super(props);
  }

  chooseThisHero = () => {
    this.props.currentChosenHero(this.props.eachData.id);
    axios
      .get(
        `http://hahow-recruit.herokuapp.com/heroes/${this.props.eachData.id}/profile`
      )
      .then(response => {
        console.log(response);
        this.props.saveChosenHeroPowerToRedux(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Link to={`/heroes/${this.props.eachData.id}`}>
          <div
            display="flex"
            flexDirection="column"
            alignItems="center"
            onClick={this.chooseThisHero}
          >
            <img src={this.props.eachData.image} className="HeroPhoto" />
            {this.props.eachData.name}
          </div>
        </Link>
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
    },
    saveChosenHeroPowerToRedux: currentHeroPower => {
      dispatch(saveChosenHeroPowerToRedux(currentHeroPower));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroCard);
