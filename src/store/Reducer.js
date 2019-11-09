const initState = {};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVEHEROALLDATAINREDUX":
      return {
        ...state,
        allHeroData: action.allHeroData
      };

    case "CURRENTCHOSENHERO":
      return {
        ...state,
        currentChosenHero: action.currentHeroID
      };

    default:
      return state;
  }
};
export default Reducer;
