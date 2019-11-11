export const saveHeroAllDataInRedux = allHeroData => {
  return (dispatch, getState) => {
    dispatch({ type: "SAVE_HERO_ALL_DATA_IN_REDUX", allHeroData });
  };
};

export const currentChosenHero = currentHeroID => {
  return (dispatch, getState) => {
    dispatch({ type: "CURRENT_CHOSEN_HERO", currentHeroID });
  };
};

export const saveChosenHeroPowerToRedux = currentHeroPower => {
  return (dispatch, getState) => {
    dispatch({ type: "SAVE_CHOSEN_HERO_POWER_TO_REDUX", currentHeroPower });
  };
};

export const minusOne = currentPowerToUpdate => {
  return (dispatch, getState) => {
    dispatch({ type: "MINUS_ONE", currentPowerToUpdate });
  };
};

export const plusOne = currentPowerToUpdate => {
  return (dispatch, getState) => {
    dispatch({ type: "PLUS_ONE", currentPowerToUpdate });
  };
};
