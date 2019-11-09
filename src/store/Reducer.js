const initState = {};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVEHEROALLDATAINREDUX":
      return {
        ...state,
        allHeroData: action.allHeroData
      };

    default:
      return state;
  }
};
export default Reducer;
