


const withdraw = (amount) => {
  return {
    type: "WITHDRAW",
    payload: amount,
  };
};
const deposit = (amount) => {
  return {
    type: "DEPOSIT",
    payload: amount,
  };
};

export { withdraw, deposit };