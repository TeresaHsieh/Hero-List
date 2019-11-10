const initState = {};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_HERO_ALL_DATA_IN_REDUX":
      return {
        ...state,
        allHeroData: action.allHeroData
      };

    case "CURRENT_CHOSEN_HERO":
      return {
        ...state,
        currentChosenHero: action.currentHeroID
      };

    case "SAVE_CHOSEN_HERO_POWER_TO_REDUX":
      return {
        ...state,
        currentHeroPower: action.currentHeroPower
      };

    default:
      return state;
  }
};
export default Reducer;
