// Dependências
import { combineReducers } from "redux";

// Reducers
import userReducer from "./user/userReducer";

export default combineReducers({
  user: userReducer
});
