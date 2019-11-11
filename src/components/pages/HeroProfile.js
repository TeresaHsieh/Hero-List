import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { minusOne } from "../../store/Action";
import { plusOne } from "../../store/Action";
import CalculateButton from "../common/CalculateButton";
import styled from "styled-components";
import LightBoxPoints from "../common/LightBoxPoints";
import LightBoxSave from "../common/LightBoxSave";
import LightBoxNegative from "../common/LightBoxNegative";
import LightBoxNoExtraPoints from "../common/LightBoxNoExtraPoints";

// Styled-components
const PowerInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  margin: 30px 0px;
  justify-content: space-around;
  width: 60%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const HeroProfileContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  @media (max-width: 700px) {
    width: 40%;
  }
`;

const RemainPointAndSave = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  color: white;
  font-size: 20px;
  letter-spacing: 2px;
  @media (max-width: 700px) {
    width: 30%;
  }
  @media (max-width: 460px) {
    width: 40%;
  }
`;

const SaveButton = styled.button`
  background-color: rgb(218, 56, 50);
  color: white;
  font-size: 20px;
  letter-spacing: 2px;
  border-radius: 10px;
  padding: 10px 30px;
  cursor: pointer;
  margin-top: 20px;
`;

const MainProfile = styled.button`
  width: 90%;
  margin: 100px auto 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  letter-spacing: 2px;
  @media (max-width: 850px) {
    margin-bottom: 30px;
  }
`;

// HeroProfile Component
class HeroProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainPoint: 0,
      showLightBoxPoints: false,
      showLightBoxSave: false,
      showLightBoxNegativ: false,
      showLightBoxNoExtraPoints: false
    };
  }

  componentDidUpdate() {}

  MinusOne = currentPowerToUpdate => {
    if (this.props.currentHeroPower[currentPowerToUpdate.toLowerCase()] > 0) {
      this.props.minusOne(currentPowerToUpdate);
      this.setState(prevState => ({
        remainPoint: prevState.remainPoint + 1
      }));
    } else {
      this.setState({
        showLightBoxNegativ: !this.state.showLightBoxNegativ
      });

      setTimeout(
        function() {
          this.setState({
            showLightBoxNegativ: !this.state.showLightBoxNegativ
          });
        }.bind(this),
        1000
      );
    }
  };

  PlusOne = currentPowerToUpdate => {
    if (this.state.remainPoint > 0) {
      this.props.plusOne(currentPowerToUpdate);
      this.setState(prevState => ({
        remainPoint: prevState.remainPoint - 1
      }));
    } else {
      this.setState({
        showLightBoxNoExtraPoints: !this.state.showLightBoxNoExtraPoints
      });

      setTimeout(
        function() {
          this.setState({
            showLightBoxNoExtraPoints: !this.state.showLightBoxNoExtraPoints
          });
        }.bind(this),
        2000
      );
    }
  };

  saveNewPoints = () => {
    if (this.state.remainPoint == 0) {
      let HeroId = Number(this.props.currentHero);

      axios
        .patch(
          `https://hahow-recruit.herokuapp.com/heroes/${HeroId}/profile`,
          this.props.currentHeroPower
        )
        .then(response => {
          this.setState({
            showLightBoxSave: !this.state.showLightBoxSave
          });

          setTimeout(
            function() {
              this.setState({ showLightBoxSave: !this.state.showLightBoxSave });
            }.bind(this),
            2000
          );
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.setState({
        showLightBoxPoints: !this.state.showLightBoxPoints
      });
    }
  };

  CloseLightBoxPoints = () => {
    this.setState({
      showLightBoxPoints: !this.state.showLightBoxPoints
    });
  };

  render() {
    const powerArray = ["STR", "INT", "AGI", "LUK"];

    if (this.props.currentHeroPower) {
      return (
        <>
          {this.state.showLightBoxPoints == true ? (
            <LightBoxPoints closeLightBoxPoints={this.CloseLightBoxPoints} />
          ) : null}
          {this.state.showLightBoxSave == true ? <LightBoxSave /> : null}
          {this.state.showLightBoxNegativ == true ? <LightBoxNegative /> : null}
          {this.state.showLightBoxNoExtraPoints == true ? (
            <LightBoxNoExtraPoints />
          ) : null}
          <MainProfile>
            <HeroProfileContainer>
              {powerArray.map(eachPower => (
                <PowerInfo key={eachPower}>
                  <div>{eachPower}</div>
                  <CalculateButton
                    calculateOne={() => this.MinusOne(eachPower)}
                    calculateType={"minus"}
                  />
                  <div>
                    {this.props.currentHeroPower[eachPower.toLowerCase()]}
                  </div>
                  <CalculateButton
                    calculateOne={() => this.PlusOne(eachPower)}
                    calculateType={"plus"}
                  />
                </PowerInfo>
              ))}
            </HeroProfileContainer>
            <RemainPointAndSave>
              <div>剩餘點數 : {this.state.remainPoint}</div>
              <SaveButton onClick={this.saveNewPoints}>儲存</SaveButton>
            </RemainPointAndSave>
          </MainProfile>
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
  return {
    minusOne: currentPowerToUpdate => {
      dispatch(minusOne(currentPowerToUpdate));
    },
    plusOne: currentPowerToUpdate => {
      dispatch(plusOne(currentPowerToUpdate));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroProfile);
