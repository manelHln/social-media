const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;



//Register a User
router.post("/register", async (req, res)=> {
    await bcrypt.hash(req.body.password, saltRounds, async (err, result)=>{
        const user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: result
        })
        try {
            const newUser = await user.save()
            res.send(user)
        } catch(err){
            res.status(500).json(err)
        }
    })
});

//Login
router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        !user&&res.status(404).json("No user found");
        const password = await bcrypt.compare(req.body.password, user.password);
        !password&&res.status(400).json("Wrong password");
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;