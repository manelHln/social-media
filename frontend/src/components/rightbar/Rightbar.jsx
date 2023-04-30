import { CardGiftcard } from "@mui/icons-material";
import { styled, Badge } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import "./rightbar.css";
import { Users } from "../../dummydata";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 5,
    minWidth: "13px",
    height: "13px",
    borderRadius: "50%",
    border: "1px solid white"
  },
}));

const OnlineFriend = ({user}) => {
  return( 
        <Grid container alignItems="center" mt={2}>
          <StyledBadge variant="dot" color="success">
            <img className="profile-picture" src={user.profilePicture} alt="profile" />
          </StyledBadge>
            <Typography variant="h6" ml={1} fontSize="15px">{user.username}</Typography>
        </Grid>
  )
}

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
         <Grid container spacing={1} sx={{display: "flex", direction: "row", alignItems: "center", flexWrap: "nowrap", mb: "20px"}}>
          <Grid item>
            <CardGiftcard sx={{fontSize: "2.5rem"}} />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <b>Elliot Alderson</b> and <b>3 other friends</b> have birthday today.
            </Typography>
          </Grid>
        </Grid>

        <img src="/assets/pictures/bg_6.jpg" alt="ad" className="ad1-img" />
        <h4>Online friends</h4>
        
        {Users.map(u => {
          return (
            <OnlineFriend key={u.id} user={u} />
          )
        })}</>
    )
  }


  const ProfileRightBar = () => {
    return (
      <>
      <h4 className="rightbar-title">User information</h4>
      <div className="rightbar-info">
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">City:</span>
          <span className="rightbar-info-value">New York</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">From:</span>
          <span className="rightbar-info-value">Madrid</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">Relationship:</span>
          <span className="rightbar-info-value">Single</span>
        </div>
      </div>
      <h4 className="rightbar-title">User Friends</h4>
      <div className="rightbar-followings">
        <div className="rightbar-following">
          <img src="/assets/pictures/bg_9.jpg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">John Doe</span>
        </div>
        <div className="rightbar-following">
          <img src="/assets/pictures/bg_9.jpg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">John Doe</span>
        </div>
        <div className="rightbar-following">
          <img src="/assets/pictures/bg_9.jpg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">John Doe</span>
        </div>
        <div className="rightbar-following">
          <img src="/assets/pictures/bg_9.jpg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">John Doe</span>
        </div>
        <div className="rightbar-following">
          <img src="/assets/pictures/bg_9.jpg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">John Doe</span>
        </div>
        <div className="rightbar-following">
          <img src="/assets/pictures/bg_9.jpg" alt="" className="rightbar-following-img" />
          <span className="rightbar-following-name">John Doe</span>
        </div>
      </div>
      </>
    )
  }

  return (
      <div className="rightbar">
      <div className="rightbar-container">
        {!profile?<HomeRightbar />: <ProfileRightBar />}
        </div>
      </div>
  )
}
