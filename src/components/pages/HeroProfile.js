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
    return (
      <>
        <div>STR</div>
        <div>INT</div>
        <div>AGI</div>
        <div>LUK</div>
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroProfile);
