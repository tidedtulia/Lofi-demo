import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Case } from "@/types/case";

const initialState: Case = {
  type: "loficafe",
  location: "outside",
  day: "day",
  weather: "stop-rain",
};
const caseSlice = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    changeType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
      state.location = "outside";

      state.weather = "stop-rain";
    },
    changeLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    changeDay: (state, action: PayloadAction<string>) => {
      state.day = action.payload;
    },
    changeWeather: (state, action: PayloadAction<string>) => {
      state.weather = action.payload;
    },
  },
});
const { actions, reducer } = caseSlice;
export const { changeType, changeLocation, changeDay, changeWeather } = actions;
export default reducer;
