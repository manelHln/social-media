import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css"

export default function Profile() {
    return(
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img src="/assets/pictures/bg_2.jpg" className="profile-cover-img" alt="cover" />
                            <img src="/assets/pictures/bg_3.jpg" className="profile-user-img" alt="cover" />
                        </div>
                        <div className="profile-info">
                            <h4 className="profile-info-name">Brico Leur</h4>
                            <span className="user-desc">Hi There! </span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}