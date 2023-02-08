import { createStore } from "redux";
import { counterRedux } from "./reducer/counter.reducer";

export const configureState = () => {
    const store = createStore(counterRedux);

    return store;
}