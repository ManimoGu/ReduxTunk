const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const port = 9000

app.listen(port, ()=> console.log("app is running on port 9000"))

let users = [{
    login : "user1",
    password : "password1"
},
{
    login : "user2",
    password : "3456"
}
]

let tasks = [
    {
        titre : "Coding",
        user : "user1"
    },
    {
        titre : "Reading",
        user : "user2"
    },
    {
        titre : "Going out",
        user : "user1"
    },
    {
        titre : "Eating",
        user : "user2"
    }
]


app.get("/Tasks", (req,res)=>{

    res.send(tasks)

})

app.get("/AddTask/name/:name/user/:user", (req,res) =>{

    const title = req.params.name
    const user = req.params.user
    
    tasks.push({titre : title, user : user})
      res.send(tasks)
})


