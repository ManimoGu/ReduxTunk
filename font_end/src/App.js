import { useEffect, useState } from 'react';
import './App.css';
import {getTasks} from "./Data/Reducer"
import {useDispatch, useSelector} from "react-redux"

function App() {

  const dispatch = useDispatch()

  useEffect(() =>{

    dispatch(getTasks())

  },[])
   
  const tasks = useSelector(state => state.Tasks.list)
 

    
  return (
    <div className="App">
     
     {
      tasks.map(item => (
        <>
        <p>{item.titre}</p>
        </>
      ))
     }

     
    </div>
  );
}

export default App;
