import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import caseReducer from "@/slice/case.slice";
import soundReducer from "@/slice/sound.slice";
export const store = configureStore({
  reducer: {
    case: caseReducer,
    sound: soundReducer,
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
