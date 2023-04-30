import { useState } from "react";
import { MoreVert, Recommend, Stars } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { Users } from "../../dummydata";


const Post = ({ post }) => {
    
    const [like, setLikeState] = useState(post.like);
    const [isliked, setIsLikedState] = useState(false);
    function handleLikes() {
        setLikeState(isliked ? like + 1 : like - 1);
        setIsLikedState(!isliked);
    }
   

    return (
        <div className="post">
            <Paper sx={{padding: "10px", mb: "20px"}}>
                <Grid container sx={{justifyContent: "space-between", alignItems: "center", margin: "0px"}}>
                    <Grid item sx={{display: "flex", alignItems: "center", gap: "10px"}}>
                        <img src={Users.filter((user) => user.id == post.userid)[0].profilePicture} alt="profile" className="profile-picture" />
                        <span>{Users.filter((user) => user.id == post.userid)[0].username}</span>
                        <span style={{fontSize: "12px"}}>{post.date}</span>
                    </Grid>
                    <Grid item sx={{display: "flex", alignItems: "center"}}>
                        <MoreVert cursor="pointer"/>
                    </Grid>
                </Grid>
                <Typography variant="body1" my={2}>{post?.desc}</Typography>
                <img src={post.photo} alt="post" className="post-picture" />
                <Grid container sx={{ display: "flex", direction: "row", justifyContent: "space-between", alignItems: "center", my: "10px" }}>
                    <Grid item>
                        <Grid container sx={{display: "flex", alignItems: "center", gap: "5px"}}>
                            <Grid item><Recommend onClick={handleLikes} /></Grid>
                            <Grid item><Stars onClick={handleLikes} /></Grid>
                            <Grid item><Typography variant="body2">{like} people liked this</Typography></Grid>
                            </Grid>
                        </Grid>
                    <Grid item>
                        <Typography variant="body2">{post.comment} Comment</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
// var docWidth = document.documentElement.offsetWidth;
// [].forEach.call(
//     document.querySelectorAll('*'),
//     function (el) {
//         if (el.offsetWidth > docWidth) {
//             console.log(el);
//         }
//     }
// );

export default Post