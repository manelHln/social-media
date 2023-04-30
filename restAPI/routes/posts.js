const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post
router.post("/", async (req, res)=>{
    const newPost = await new Post({
        userId: req.body.userId,
        description: req.body.description,
        image: req.body.image
    })
    try{
        await newPost.save();
        res.send(newPost)
    }catch(err){
        res.status(500).send(err)
    }
})


//update a post
router.put("/:id", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json("post updated!")
        }else{
            res.send("You can't update another user's post")
        }
    }catch(err){
        res.status(500).json(err)
    }
})


//delete a post
router.delete("/:id", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("post deleted!")
        }else{
            res.send("You can't delete another user's post")
        }
    }catch(err){
        res.status(500).json(err)
    }
})


//like a post
router.put("/:id/likes", async (req, res)=>{
    const post = await Post.findById(req.params.id);
    try{
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}})
            res.send("The post has been liked!")
        }else{
            await post.updateOne({$pull: {likes: req.body.userId}})
            res.send("The post has been disliked!")
        }
    }catch(err){
        res.status(500).json(err)
    }
})



//get a post
router.get("/:id", async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).send(post)
    } catch (err) {
        res.status(500).json("error")
    }
})



//get timeline posts
router.get("/timeline/all", async (req,res)=>{
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPost = await Promise.all(
            currentUser.following.map((friendsId)=>{
                return Post.find({userId: friendsId})
            })
        )
        res.json(userPosts.concat(...friendPost))
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router