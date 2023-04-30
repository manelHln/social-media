import { Bookmark, Chat, Event, HelpOutline, People, PlayCircle, RssFeed, School, WorkOutline } from "@mui/icons-material";
import { Divider } from "@mui/material";
import "./sidebar.css";
import { Users } from "../../dummydata";


const CloseFriend = ({user}) => {
    return (
        <li>
            <img className="profile-picture" src={user.profilePicture} alt="" />
            <span>{user.username}</span>
        </li>
    )
};

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <ul>
                    <li>
                        <RssFeed className="sidebar-icon"/>
                        <span>Feed</span>
                    </li>
                    <li>
                        <Chat className="sidebar-icon"/>
                        <span>Chats</span>
                    </li>
                    <li>
                        <PlayCircle className="sidebar-icon"/>
                        <span>Videos</span>
                    </li>
                    <li>
                        <People className="sidebar-icon"/>
                        <span>Groups</span>
                    </li>
                    <li>
                        <Bookmark className="sidebar-icon"/>
                        <span>Bookmarks</span>
                    </li>
                    <li>
                        <HelpOutline className="sidebar-icon"/>
                        <span>Questions</span>
                    </li>
                    <li>
                        <WorkOutline className="sidebar-icon"/>
                        <span>Jobs</span>
                    </li>
                    <li>
                        <Event className="sidebar-icon"/>
                        <span>Events</span>
                    </li>
                    <li>
                        <School className="sidebar-icon"/>
                        <span>Courses</span>
                    </li>
                </ul>
                <button className="sidebar-button">Show more</button>
                <Divider sx={{my: "20px"}} />
                <ul className="sidebar-friend-list">
                    {Users.map(u => {
                        return (
                            <CloseFriend key={u.id} user={u} />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};