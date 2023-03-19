import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export interface workSpaceState {
  data: {
    type?: string;
    content?: string;
    id: number;
  }[];
}

type dataType = { type?: string; content?: string; id: number };

const initialState: workSpaceState = {
  data: [],
};
const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<dataType>) => {
      let higherId = 0;
      state.data.forEach((item) => {
        if (item.id >= higherId) higherId = item.id;
      });
      state.data = [...state.data, { ...action.payload, id: higherId + 1 }];
    },
    setContent: (state, action: PayloadAction<{ content: string; id: number }>) => {
      state.data = state.data.map((item: dataType, index) =>
        item.id === action.payload.id ? { ...item, content: action.payload.content } : item,
      );
    },
    deleteElement: (state, action: PayloadAction<{ id: number }>) => {
      state.data = state.data.filter((item: dataType, index) => item.id !== action.payload.id && item);
    },
    copyElement: (state, action: PayloadAction<{ id: number }>) => {
      let copiedElement = state.data.filter((item: dataType, index) => item.id === action.payload.id && item);
      let higherId = 0;
      state.data.forEach((item) => {
        if (item.id >= higherId) higherId = item.id;
      });
      state.data.push({ ...copiedElement[0], id: higherId + 1 });
    },
    changePosition: (state, action: PayloadAction<{ direction: string; id: number; index: number }>) => {
      switch (action.payload.direction) {
        case "up":
          changePosition(state.data, action.payload.index || 0, "up");
          break;
        case "down":
          changePosition(state.data, action.payload.index || 0, "down");
          break;
        default:
          break;
      }

      function changePosition(arr: any, index: number, direction: string) {
        if (direction === "up") {
          if (index === 0) {
            return arr;
          }
          [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
        } else if (direction === "down") {
          if (index === arr.length - 1) {
            return arr;
          }
          [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        }
        return arr;
      }
    },
  },
  extraReducers: {},
});

export const { setData, setContent, deleteElement, copyElement, changePosition } = workspaceSlice.actions;

export default workspaceSlice.reducer;
