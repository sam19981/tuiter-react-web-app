
import React from "react";
import { useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {

  faHouse,

  faHashtag,

  faBell,

  faEnvelope,

  faBookmark,

  faList,

  faEllipsis,

  faUser,
  faSignInAlt,
  faUserPlus

} from "@fortawesome/free-solid-svg-icons";

// import "./index.css";




const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { pathname } = useLocation();

  const [ignore, tuiter, active] = pathname.split("/");

  const links = [

    { name: "home", icon: faHouse },

    { name: "explore", icon: faHashtag },

    { name: "notifications", icon: faBell },

    { name: "messages", icon: faEnvelope },

    { name: "bookmarks", icon: faBookmark },

    { name: "lists", icon: faList },

    { name: "more", icon: faEllipsis },

  ];

  return (

    <div class="container">

      <div className="d-none d-xl-block list-group">

        {links.map((link) => (

          <Link

            to={`/tuiter/${link.name}`}

            className={`list-group-item text-capitalize ${

              active === link.name ? "active" : ""

            }`}

          >

            <FontAwesomeIcon icon={link.icon} /> &nbsp;

            {link.name}

          </Link>

        ))}

    {!currentUser && <Link className= {`list-group-item text-capitalize ${active === "login" ? "active" : ""}`} to="/tuiter/login"> 
    <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '6px' }}  /> 
      Login  
       </Link>}

     {!currentUser && <Link className= {`list-group-item text-capitalize ${active === "register" ? "active" : ""}`} to="/tuiter/register">
      <FontAwesomeIcon icon={faUserPlus}  style={{ marginRight: '6px' }} /> 
      Register
      </Link>}

     { currentUser && <Link className= {`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`} to="/tuiter/profile">
      <FontAwesomeIcon icon={faUser} style={{ marginRight: '6px' }} />
       Profile 
       </Link>}




      </div>




      <div className="d-block d-xl-none list-group">

        {links.map((link) => (

          <Link

            to={`/tuiter/${link.name}`}

            className={`list-group-item text-capitalize ${

              active === link.name ? "active" : ""

            }`}

          >

            <FontAwesomeIcon icon={link.icon} />

            {/* {link.name} */}

          </Link>

        ))}

{!currentUser && <Link className= {`list-group-item text-capitalize ${active === "login" ? "active" : ""}`} to="/tuiter/login"> 
    <FontAwesomeIcon icon={faSignInAlt} /> 
       </Link>}

     {!currentUser && <Link className= {`list-group-item text-capitalize ${active === "register" ? "active" : ""}`} to="/tuiter/register">
      <FontAwesomeIcon icon={faUserPlus} />
      </Link>}

     { currentUser && <Link className= {`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`} to="/tuiter/profile">
      <FontAwesomeIcon icon={faUser} />
       </Link>}


      </div>

    </div>

  );

};

export default NavigationSidebar;


