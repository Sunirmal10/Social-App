import "./navbar.scss";
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { useMutation } from "react-query";
import { makeRequest } from "../../axios";
// import axios from "axios";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser, setCurrentUser, noImage } = useContext(AuthContext);
  const [err, setErr] = useState(null);
  

  
  const navigate = useNavigate()

  const [displayLogout, setDisplayLogout] = useState(false);

  const logoutMutation = useMutation(
    () => {
      return makeRequest.post("/auth/logout");
    },
    {
      onSuccess: () => {
        setCurrentUser(null)
       navigate('/login')
      },
    }
  );

  const handleLogout = ()=> {
  
    logoutMutation.mutate();
  };
  
  console.log(err)

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none", color: 'inherit' }}>
          <span>Social App</span>
        </Link>
       
        {
          darkMode ? (
            <WbSunnyRoundedIcon onClick={toggle} />
          ) : (<DarkModeRoundedIcon onClick={toggle} />)
        }
      
        <GridViewRoundedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="log-out-mobile"  onClick={handleLogout}>
        <PowerSettingsNewRoundedIcon/>
      </div>
      <div className="right">
        <MailRoundedIcon />
        <NotificationsActiveRoundedIcon />
        <div className="user">
       
        <Link to={`http://localhost:3000/profile/${currentUser.id}`} style={{ textDecoration: "none", color: 'inherit', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={
              currentUser.profilePic ?
              "/upload/" 
              + 
              currentUser.profilePic :  noImage}
            alt=""
          />
              </Link>
          <span  onClick={()=>setDisplayLogout(!displayLogout)} className="name">
         

          {currentUser.name}
          { displayLogout && <div className="logout"
         onClick={handleLogout}
         >
          Logout
        </div>}
      
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
