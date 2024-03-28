import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "PersonSlice",
    initialState:{
        name: "ABC",
        age: 25,
        contact: 9009111222
    }
});

export default slice.reducer;