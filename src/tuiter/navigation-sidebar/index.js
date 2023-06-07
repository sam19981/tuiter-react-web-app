// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// const NavigationSidebar = () => {
//  const { pathname } = useLocation();
//  const [ignore, tuiter, active] = pathname.split("/");

//  return (
//    <div className="list-group">
//      {links.map((link) => 
//          <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
//            {link}
//          </Link>
//      )}
//    </div>
//  );
// };
// export default NavigationSidebar;

import React from "react";

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

} from "@fortawesome/free-solid-svg-icons";

// import "./index.css";




const NavigationSidebar = () => {

  const { pathname } = useLocation();

  const [ignore, tuiter, active] = pathname.split("/");

  const links = [

    { name: "home", icon: faHouse },

    { name: "explore", icon: faHashtag },

    { name: "notifications", icon: faBell },

    { name: "messages", icon: faEnvelope },

    { name: "bookmarks", icon: faBookmark },

    { name: "lists", icon: faList },

    { name: "profile", icon: faUser },

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

      </div>

    </div>

  );

};

export default NavigationSidebar;


