import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk("Tasks/getTasks", async () => {

    return axios.get("http://localhost:9000/Tasks")
    .then(res=> {return res.data})
    .catch(err => console.log(err.message))
    

});

export const AddTask = createAsyncThunk("Tasks/AddTask",async({task}) =>{

  return axios.post("http://localhost:9000/AddTask", task )
  .then(res => {return res.data})
  .catch(err => console.log(err.data.message))

})

export const deleteTask = createAsyncThunk("Tasks/delete", async({titre}) =>{

  return axios.delete(`http://localhost:9000/DeleteTask/${titre}`)
  .then(res => {return res.data})
  .catch(err => console.log(err.data.message))

})

const TaskSlice = createSlice({
  name: "Tasks",
  initialState: {
    list : [],
    status : "",
    Erreur : ""
  },
  reducers: {},
  extraReducers: {
    [getTasks.fulfilled] : (state, action) =>{
        state.list = action.payload
        state.status = "Success"
    },
    [getTasks.rejected] : (state,action) =>{
      state.Erreur = action.payload
       state.status = "Rejected"
    },
    [getTasks.pending] : (state) =>{
        state.status = "pending"
    },

    [AddTask.fulfilled] : (state,action) =>{
       state.list = action.payload
      state.status = "Success"
    },
    [AddTask.rejected] : (state, action) =>{
      state.Erreur = action.payload
       state.status = "Rejected"
    },
    [AddTask.pending] : (state) =>{
      state.status = "pending"
    },

    [deleteTask.fulfilled] : (state,action) =>{
      state.list = action.payload
     state.status = "Success"
   },
   [deleteTask.rejected] : (state, action) =>{
     state.Erreur = action.payload
      state.status = "Rejected"
   },
   [deleteTask.pending] : (state) =>{
     state.status = "pending"
   }


  }
});

export default TaskSlice.reducer;
