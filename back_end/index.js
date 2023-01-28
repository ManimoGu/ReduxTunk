const express = require("express")
const cors = require("cors")
const TasksRouter = require("./Routes/Tasks")
const UserRouter = require("./Routes/user")

const app = express()

app.use(cors())

app.use(express.json())

const port = 9000

app.listen(port, ()=> console.log("app is running on port 9000"))

 let tasks = [
    {
        titre : "Coding",
        status : false
    },
    {
        titre : "Reading",
        status : false
    }
 ]


 app.get("/List", (req,res)=>{

    res.send(tasks)

 })

