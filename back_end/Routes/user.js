const {Router} = require("express")

const router = Router()


let users = [{
    Username : "user1",
    Password : "password1"
},
{
    Username : "user2",
    Password : "3456"
}
]
router.post("/AddUser", (req,res) =>{

    const user = req.body

    const verif = users.filter(item => item.Username === user.Username)
    if(verif.length !== 0){
        res.send("Ce nom d'utilisateur existe deja")
    }
    else{
        users.push(user)
        res.send(users)
    }

})

module.exports = router