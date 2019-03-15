import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import analysisReducer from "./analysisReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  analysis: analysisReducer,
  search: searchReducer
});
