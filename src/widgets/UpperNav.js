import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEquals} from '@fortawesome/free-solid-svg-icons';


import "./UpperNav.css";
import MobileSideNav from './MobileSideNav';

const UpperNav = () => {
   const[sidenav,setSidenav] = useState(false);
   const[searchnav, setSearchnav] = useState(false);

   const togglesearch = () =>{
    setSearchnav(!searchnav);
   }

   const click = () =>{
    setSidenav(true);
   }
   const checker = (inner) =>{
      setSidenav(inner);
   }
  return (
    <div className='upperNav'>
        <div className='uppernav-left'>
          <div className='mobile' onClick={click}>
              <FontAwesomeIcon icon={faEquals}/>
          </div>
          <Link to="/">   <img  alt='image' src='image/logo.png'/> </Link>
        

        </div>
       
        <div className='search'>

            <FontAwesomeIcon onClick={togglesearch} icon={faSearch}/>
            <input type="text" placeholder='search your music' />
      
        </div>
        <div className='overleft' style={{display:sidenav ? "block" : "none"}}>
          <MobileSideNav checker= {checker}/>
        </div>
      
    </div>
  );
}

export default UpperNav;
