import React from 'react';
import "./_sidebar.scss";
import {
  MdHome,
  MdSubscriptions,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdSentimentSatisfied,
  MdExitToApp
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { log_out } from '../../redux/action/auth.action';


const SideBar = ({ sideBar, handleTogglesidebar }) => {

  const dispatch = useDispatch();

  const handleLogOut = () =>{
      dispatch(log_out())
  }
  
  return (
    <nav className={sideBar ? "sidebar open" : "sidebar"} onClick={()=> handleTogglesidebar(false)}>
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>LikedVideo</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdSentimentSatisfied size={23} />
        <span>I don't Know</span>
      </li>
      <hr />
      <li onClick={handleLogOut}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};


export default SideBar
