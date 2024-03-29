import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import HeroCard from "../common/HeroCard";
import HeroProfile from "./HeroProfile";
import BGM from "../common/BGM";
import styled from "styled-components";
import { saveHeroAllDataInRedux } from "../../store/Action";

// Styled-components
const HeroPicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: auto;
`;

const Loading = styled.div`
  font-size: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

// HeroList Component
class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("https://hahow-recruit.herokuapp.com/heroes")
      .then(response => {
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
          <BGM />
          <HeroPicsContainer>
            {this.props.heroData.map(eachHero => (
              <HeroCard eachData={eachHero} key={eachHero.id} />
            ))}
          </HeroPicsContainer>
          <Route
            path={`/heroes/:${this.props.currentHero}`}
            component={HeroProfile}
          />
        </>
      );
    }
    return (
      <>
        <Loading>Loading...</Loading>
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
    saveHeroAllDataInRedux: allHeroData => {
      dispatch(saveHeroAllDataInRedux(allHeroData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList);
