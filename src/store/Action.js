export const saveHeroAllDataInRedux = allHeroData => {
  return (dispatch, getState) => {
    console.log("成功進到 action1");
    dispatch({ type: "SAVE_HERO_ALL_DATA_IN_REDUX", allHeroData });
  };
};

export const currentChosenHero = currentHeroID => {
  return (dispatch, getState) => {
    console.log("成功進到 action2", currentHeroID);
    dispatch({ type: "CURRENT_CHOSEN_HERO", currentHeroID });
  };
};

export const saveChosenHeroPowerToRedux = currentHeroPower => {
  return (dispatch, getState) => {
    console.log("成功進到 action3", currentHeroPower);
    dispatch({ type: "SAVE_CHOSEN_HERO_POWER_TO_REDUX", currentHeroPower });
  };
};

export const minusOne = currentPowerToUpdate => {
  return (dispatch, getState) => {
    console.log("成功進到 action4", currentPowerToUpdate);
    dispatch({ type: "MINUS_ONE", currentPowerToUpdate });
  };
};

export const plusOne = currentPowerToUpdate => {
  return (dispatch, getState) => {
    console.log("成功進到 action5", currentPowerToUpdate);
    dispatch({ type: "PLUS_ONE", currentPowerToUpdate });
  };
};
