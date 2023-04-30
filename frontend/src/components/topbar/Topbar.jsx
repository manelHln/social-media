import { Search, Person, Message, Notifications } from "@mui/icons-material"
import { Badge, styled, IconButton } from "@mui/material"

import "./topbar.css"

export default function Topbar() {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: 2,
            top: 3,
            minWidth: "12px",
            height: "12px",
            borderRadius: "50%",
            padding: "7px 4px",
        },
    }));
    
  return (
      <div className="topbar-container">
          <div className="topbar-left">
              <span className="logo">
                Bricolage
              </span>
          </div>

          <div className="topbar-center">
              <Search sx={{ fontSize: "1.4rem", color: "#000", marginLeft: "10px"}}/>
              <input placeholder="Search" className="search-input"/>
          </div>

          <div className="topbar-right">
              <div className="topbar-links">
                  <ul>
                      <li>Homepage</li>
                      <li>Timeline</li>
                  </ul>
              </div>
              <div className="topbar-icons">
                  <IconButton>
                    <StyledBadge badgeContent={1} color="error">
                        <Person className="icon" sx={{color: "white"}} />
                    </StyledBadge>
                  </IconButton>
                  
                <IconButton>
                    <StyledBadge badgeContent={1} color="error">
                        <Message className="icon" sx={{color: "white"}} />
                    </StyledBadge>
                  </IconButton>
                  
                    <IconButton>
                    <StyledBadge badgeContent={1} color="error">
                        <Notifications className="icon" sx={{color: "white"}} />
                    </StyledBadge>
                  </IconButton>
                  
              </div>
              <div className="topbar-picture">
                  <img className="profile-picture" src="/assets/pictures/bg_12.jpg" alt="profile" />
              </div>
          </div>
          
    </div>
  )
}
