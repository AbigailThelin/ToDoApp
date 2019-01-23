import { createStore } from "redux";

import reducer from './viewstates';

export const store = createStore(
  reducer,
);