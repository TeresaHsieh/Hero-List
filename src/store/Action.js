export const saveHeroAllDataInRedux = allHeroData => {
  return (dispatch, getState) => {
    console.log("成功進到 action1");
    dispatch({ type: "SAVEHEROALLDATAINREDUX", allHeroData });
  };
};

export const currentChosenHero = currentHeroID => {
  return (dispatch, getState) => {
    console.log("成功進到 action2", currentHeroID);
    dispatch({ type: "CURRENTCHOSENHERO", currentHeroID });
  };
};
