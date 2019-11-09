export const saveHeroAllDataInRedux = allHeroData => {
  return (dispatch, getState) => {
    console.log("成功進到 action");
    dispatch({ type: "SAVEHEROALLDATAINREDUX", allHeroData });
  };
};
