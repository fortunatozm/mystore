const INITIAL_STATE = { verifica: false };

const verificaValue = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'VERIFICA':
      return { ...state, verifica: action.payload };
    default:
      return state;
  }
};

export default verificaValue;