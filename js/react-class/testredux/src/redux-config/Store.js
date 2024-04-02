import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import PersonSlice from "./PersonSlice";
import CounterSlice from "./CounterSlice";
import CategorySlice from "./CategorySlice";

const store = configureStore({
    reducer:{
        Data: DataSlice,
        Person: PersonSlice,
        Counters: CounterSlice,
        Category:CategorySlice
    }
});

export default store;