import { Grid, Button, Paper, Divider } from "@mui/material";
import { PermMedia, LocationOn, EmojiEmotions, Label } from "@mui/icons-material";
import "./feed.css";
import Post from "../post/Post";
import { Posts } from "../../dummydata";

export default function Feed() {
  return (
    <div className="feed"> 
      <div className="feed-content-container">
        {/********  I tried to use Material Ui but the Paper Component was causing an overflow *******/}


        <Paper>
          <Grid container direction="row" alignItems="center" px={2} pt={2} mb={2}>
              <Grid item mr={1}>
              <img src="/assets/pictures/bg_12.jpg" className="profile-picture-large" alt="" />
              </Grid>
              <Grid item sx={{width: "80%"}}>
                <input type="text" placeholder="What's on your mind John?" className="feed-input" />
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <div className="feed-header-container">
            <div className="feed-header-one">
              <div className="feed-header-one-content">
                <PermMedia sx={{mr: "2px"}}/>
                <span>Photos or videos</span>
              </div>
              <div className="feed-header-one-content">
                <Label sx={{mr: "2px"}}/>
                <span>Tag</span>
              </div>
              <div className="feed-header-one-content">
                <LocationOn sx={{mr: "2px"}}/>
                <span>Location</span>
              </div>
              <div className="feed-header-one-content">
                <EmojiEmotions sx={{mr: "2px"}}/>
                <span>Feelings</span>
              </div>
            </div>
            <div className="feed-header-two">
              <div>
                <Button variant="contained" size="small" color="primary">Share</Button>
              </div>
            </div>
          </div>
        </Paper>

        {Posts.map((post) => {
          return (
            <Post key={post.id} post={post} />
          )
        })}

      </div>
    </div>
  )
}
