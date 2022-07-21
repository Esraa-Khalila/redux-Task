const inital={
    result:0
}
 const BankReducer = (state = inital, action) => {
    switch (action.type) {
        case 'DEPOSIT':
        return {
          ...state,
          result: state.result + action.payload,
        };

        case 'WITHDRAW':
              return {
                ...state,
                result: state.result - action.payload,
              };

   

        default:
            return state;
    }
}

export {
     BankReducer
};