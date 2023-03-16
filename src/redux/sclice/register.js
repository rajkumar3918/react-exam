import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/constants";

const registerDetails = createSlice({
    name: "Register Data",
    initialState:{
        resData:{},
        userData:[],
        state:"Pending",
        error:null,
    },
    reducers:{
        setUserDetails:(state, action)=>{
            const userData = action.payload;
            state.userData.push(userData);
        }
    },
    extraReducers: builder => builder
    .addCase(postdata.pending,(state,  action)=>{
        state.status = "pending";
    })
    .addCase(postdata.rejected,(state,  action)=>{
        state.status = "rejected";
        state.error = action.payload;
    })
    .addCase(postdata.fulfilled,(state,  action)=>{
        state.status = "fulfilled";
        state.resData = action.payload
    })
})

export const postdata = createAsyncThunk("/userDetails", async()=>{
    const registerUrl = baseUrl+"/createUser";
    try{
        const response = await axios.post(registerUrl,)
        return response
        
    }catch(error){
        error.message;
    }
})
export const {setUserDetails} = registerDetails.actions;
export default registerDetails;