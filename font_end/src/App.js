import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"

function App() {
  
  const [list,setList] = useState([])


  useEffect(()=>{

    axios.get("http://localhost:9000/List")
    .then(res => setList(res.data))
    .catch(err => console.log(err.data.message))

  },[])

   
    
  

  return (
    <div>
      {
        list.map(item=>(
          <>
          <h1>{item.titre}</h1>
          </>
        ))
      
      }
    </div>
   
  );
}

export default App;
