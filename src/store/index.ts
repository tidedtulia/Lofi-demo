import caseReducer from "@/slice/case.slice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const store = configureStore({
  reducer: {
    case: caseReducer,
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
