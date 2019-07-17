const INITIAL_STATE = {
  currentUser: null
};

// O que fiz nessa função foi basicamente setar o parâmetro state como sendo o valor da variavel INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
