const init = {
  count: 0,
};

export const Math = (state = init, action) => {
  switch (action.type) {
    case "Add":
      return {
        count: state.count + action.payload,
      };
    case "dec":
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
const inital = {
  balance: 0,
};
