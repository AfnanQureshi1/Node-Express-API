import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    // {
    //     firstName : "john",
    //     lastNAme : "Doe",
    //     Age : 25
    // },
    // {
    //     firstName : "jane",
    //     lastNAme : "Doe",
    //     Age : 26
    // }
]
//all routes in here are starting with users
router.get('/', (req,res)=> {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res)=>{
 console.log("POST ROUTE REACHED");

 const user = req.body;
 const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

 const userWithId = { ... user, id : userId};
 users.push(userWithId);

 res.send(`user with the name ${user.firstName} was added to the database`);
})

router.get('/:id' , (req, res) => {
    res.send("The get ID ROUTE");
})
export default router;