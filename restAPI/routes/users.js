const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//update user
router.put("/:id", async (req, res)=>{
    if(req.body.id === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                req.body.password = await bcrypt.hash(req.body.password, saltRounds)
            }catch(err){
                return res.json(err)
            }
        }
        try{
            await User.findByIdAndUpdate(req.params.id, {$set: req.body})
            res.send("user updated")
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        res.send("You can only update your user")
    }
})

//delete user
router.delete("/:id", async (req, res)=>{
    if(req.body.id === req.params.id || req.body.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id)
            res.send("user deleted")
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        res.send("You can only delete your user")
    }
})

//get user
router.get("/:id", async (req, res)=>{
    try{
            const user = await User.findById(req.params.id);
            const {password, ...others} = user._doc
            res.send(others)
    }catch(err){
        res.status(500).json(err)
    }
})
//follow user
router.put("/:id/follow", async (req, res)=>{
    if(req.body.id !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.id);
            if(!user.followers.includes(currentUser.id)){
                await user.updateOne({$push:{followers: req.body.id}});
                await currentUser.updateOne({$push:{following: req.params.id}});
                res.send("user followed");
            }else{
                res.send("You are already following this user!");
            }
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You can't follow yourself!");
    }
})

//unfollow user
router.put("/:id/unfollow", async (req, res)=>{
    if(req.body.id !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.id);
            if(user.followers.includes(currentUser.id)){
                await user.updateOne({$pull:{followers: req.body.id}});
                await currentUser.updateOne({$pull:{following: req.params.id}});
                res.send("user unfollowed");
            }else{
                res.send("You are not following this user!");
            }
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You can't unfollow yourself!");
    }
})

module.exports = router;