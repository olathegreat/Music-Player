import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faList, faRadio, faVideo, faUser, faSquareArrowUpRight} from '@fortawesome/free-solid-svg-icons';
import "./SideNav.css";

const SideNav = ({type}) => {
  return (
    <div className='sidenav'>
        <div className='side-upper' >

          <Link to="/">
            <FontAwesomeIcon icon={faHouse} className="icon" color={type==="home" && "orange"}/>
        
          </Link>
          
           <Link to="/card">
                  
              <FontAwesomeIcon icon={faList} className="icon"  color={type==="list" && "orange"}/>

           </Link>
          
            <FontAwesomeIcon icon={faRadio} className="icon"/>
            <FontAwesomeIcon icon={faVideo} className="icon"/>

        </div>
        <div className='side-lower'>
            <FontAwesomeIcon icon={faUser} className="icon"/>
            <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon"/>

        </div>
      
    </div>
  );
}

export default SideNav;
