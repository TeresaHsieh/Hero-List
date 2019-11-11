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

    case "MINUS_ONE":
      console.log("看這裡", state, action.currentPowerToUpdate);

      state.currentHeroPower[action.currentPowerToUpdate.toLowerCase()] =
        state.currentHeroPower[action.currentPowerToUpdate.toLowerCase()] - 1;

      console.log("改完後的 state", state);
      return {
        ...state
      };

    case "PLUS_ONE":
      console.log("看這裡", state, action.currentPowerToUpdate);

      state.currentHeroPower[action.currentPowerToUpdate.toLowerCase()] =
        state.currentHeroPower[action.currentPowerToUpdate.toLowerCase()] + 1;

      console.log("改完後的 state", state);
      return {
        ...state
      };

    default:
      return state;
  }
};
export default Reducer;
