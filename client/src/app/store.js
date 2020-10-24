import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import boardReducer from "../features/board/boardSlice";
import authReducer from "../features/authentication/auth";

export default configureStore({
  reducer: {
    counter: counterReducer,
    board: boardReducer,
    authState: authReducer
  },
});
