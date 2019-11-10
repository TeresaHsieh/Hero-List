import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import HeroCard from "../common/HeroCard";
import HeroProfile from "./HeroProfile";
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
    if (this.props.heroData) {
      return (
        <>
          <div>
            {this.props.heroData.map(eachHero => (
              <HeroCard eachData={eachHero} key={eachHero.id} />
            ))}
          </div>

          <Route
            path={`/heroes/:${this.props.currentHero}`}
            component={HeroProfile}
          />
        </>
      );
    }
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log("看看 state", state);
  return {
    heroData: state.allHeroData,
    currentHero: state.currentChosenHero
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
