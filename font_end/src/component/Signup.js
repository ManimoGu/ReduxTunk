import axios from 'axios'
import e from 'cors'
import React,{useState} from 'react'
import user from '../modals/user'

const Signup = () => {

    const [newuser, setNewuser] = useState(new user())

    const handelChange=(e) =>{
      setNewuser({...newuser, [e.target.name] :e.target.value})
    }

    const ADDUSER = () =>{

        axios.post("http://localhost:9000/AddUser", newuser)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.catch))

    }
    

  return (
    <div className='Signup'>
        <h1>Sign up</h1>
        <input type="text" name ="Nom" placeholder='Nom' onChange={handelChange}/>
        <input type="text" name = "Prenom" placeholder='Prenom' onChange={handelChange}/>
        <input type="email" name="email"  placeholder='Email' onChange={handelChange}/>
        <input type="text" name ="Username" placeholder='Username' onChange={handelChange}/>
        <input type="password" name = "Password"  placeholder='Password' onChange={handelChange}/>
        <button onClick={()=> ADDUSER()}>Submit</button>
    </div>
  )
}

export default Signup