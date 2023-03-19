import { configureStore } from "@reduxjs/toolkit";
import editorSlice from "./editorSlice";
import workspaceSlice from "./workspaceSlice";

export type stateType = {
  editor: {
    data: {
      type: string;
    }[];
  };
};

const store = configureStore({
  reducer: {
    editor: editorSlice,
    workspace: workspaceSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
