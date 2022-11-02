import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk("Tasks/getTasks", async () => {

    return axios.get("http://localhost:9000/Tasks")
    .then(res=> {return res.data})
    .catch(err => console.log(err.message))
    

});

const TaskSlice = createSlice({
  name: "Tasks",
  initialState: {
    list : [],
    status : ""
  },
  reducers: {},
  extraReducers: {
    [getTasks.fulfilled] : (state, action) =>{
        state.list = action.payload
        state.status = "Success"
    },
    [getTasks.rejected] : (state) =>{
       state.status = "Rejected"
    },
    [getTasks.pending] : (state) =>{
        state.status = "pending"
    }

  }
});

export default TaskSlice.reducer;
