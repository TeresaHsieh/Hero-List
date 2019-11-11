import React from "react";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { currentChosenHero } from "../../store/Action";
import { saveChosenHeroPowerToRedux } from "../../store/Action";
import styled from "styled-components";

// Styled-components
const HeroPicAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  @media (max-width: 850px) {
    margin-bottom: 20px;
  }
`;

const HeroCards = styled.img`
  margin-bottom: 30px;
`;

const NavLinkStyle = styled(NavLink)`
  &.active {
    border: 2px solid transparent;
    background-image: linear-gradient(to right, #8f6b29, #fde08d),
      linear-gradient(to bottom, #fde08d, #df9f28),
      linear-gradient(to left, #8f6b29, #fde08d),
      linear-gradient(to top, #fde08d, #df9f28);
    background-origin: border-box;
    background-size: 100% 2px, 2px 100%, 100% 2px, 2px 100%;
    background-position: top left, top right, bottom right, bottom left;
    background-repeat: no-repeat;
    padding: 10px;
    border-radius: 5px;
  }
`;

// HeroCard Component
class HeroCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  chooseThisHero = () => {
    this.props.currentChosenHero(this.props.eachData.id);
    axios
      .get(
        `http://hahow-recruit.herokuapp.com/heroes/${this.props.eachData.id}/profile`
      )
      .then(response => {
        this.props.saveChosenHeroPowerToRedux(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <NavLinkStyle to={`/heroes/${this.props.eachData.id}`}>
          <HeroPicAndName onClick={this.chooseThisHero}>
            <HeroCards src={this.props.eachData.image} />
            <div>{this.props.eachData.name}</div>
          </HeroPicAndName>
        </NavLinkStyle>
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
