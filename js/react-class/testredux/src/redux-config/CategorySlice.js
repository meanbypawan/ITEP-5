import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk("CategorySlice/fetchCategory",async ()=>{
  try{ 
    let response = await axios.get("https://dummyjson.com/products/categories");
    return response.data
;  }
  catch(err){
    console.log(err);
  } 
});
const slice = createSlice({
    name: "CategorySlice",
    initialState:{
        categoryList: [],
        error: false,
        isLoading: false
    },
    reducers:{
        deleteCategory: (state,action)=>{
         if(window.confirm("Are you sure ? ")){   
           let index = action.payload;
           state.categoryList.splice(index,1);
           //state.categoryList = [...state.categoryList];
         }
        },
        addCategory: (state,action)=>{
            state.categoryList.push(action.payload);
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchCategory.fulfilled,(state,action)=>{
            state.categoryList = action.payload;
            state.isLoading = false;
        }).addCase(fetchCategory.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops ! something went wrong..."
        })
    }
});

export const {deleteCategory, addCategory} = slice.actions;
export default slice.reducer;