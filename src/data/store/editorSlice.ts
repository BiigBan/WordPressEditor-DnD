import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export interface editorState {
  data: {
    type: string;
  }[];
}

const initialState: editorState = {
  data: [{ type: "headline" }, { type: "image" }, { type: "paragraph" }, { type: "button" }],
};
const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default editorSlice.reducer;
