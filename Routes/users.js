import express from "express";

const router = express.Router();

const users = [
    {
        firstName : "john",
        lastNAme : "Doe",
        Age : 25
    },
    {
        firstName : "jane",
        lastNAme : "Doe",
        Age : 26
    }
]
//all routes in here are starting with users
router.get('/', (req,res)=> {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res)=>{
 console.log("POST ROUTE REACHED");

 const user = req.body;
 users.push(user);

 res.send(`user with the name ${user.firstName} was added to the database`);
})

export default router;