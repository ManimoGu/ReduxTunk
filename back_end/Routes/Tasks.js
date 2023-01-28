const {Router} = require("express")

const router = Router()

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


router.get("/Tasks", (req,res)=>{

    res.send(tasks)

})

router.post("/AddTask", (req,res) =>{

    const title = req.body.titre
    const user = req.body.user
    
    tasks.push({titre : title, user : user})
      res.send(tasks)
})


router.delete("/DeleteTask/:titre", (req,res) =>{

    const title = req.params.titre

    tasks = tasks.filter(item => item.titre !== title)

    res.send(tasks)

})

module.exports = router