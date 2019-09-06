import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { studentsReducer } from "./studentsReducer";

export const rootReducer = combineReducers({
  students: studentsReducer,
  user: userReducer
});
