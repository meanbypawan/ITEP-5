import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import PersonSlice from "./PersonSlice";
import CounterSlice from "./CounterSlice";

const store = configureStore({
    reducer:{
        Data: DataSlice,
        Person: PersonSlice,
        Counters: CounterSlice
    }
});

export default store;