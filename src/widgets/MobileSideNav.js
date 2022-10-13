import React ,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClose,faList, faRadio, faVideo, faUser, faLink} from '@fortawesome/free-solid-svg-icons';
import "./MobileSideNav.css";

const MobileSideNav = ({checker}) => {

    const [cancel, setCancel] = useState(true);

    const clicked = () =>{
        setCancel(false);
        checker(cancel);
    }
  return (

 
        <div className='mobilesidenav'>
                    <div className='cancel' onClick={clicked}><FontAwesomeIcon icon={faClose}/></div>
                    <div className='flex'><FontAwesomeIcon icon={faHouse} color="orange"/><span className='sidetag active'>Home</span></div>
                    <div className='flex'><FontAwesomeIcon icon={faList}/><span className='sidetag'>My Collections</span></div>
                    <div className='flex'><FontAwesomeIcon icon={faRadio}/><span className='sidetag'>Radio</span></div>
                    <div className='flex'><FontAwesomeIcon icon={faVideo}/><span className='sidetag'>Music Video</span></div>
                    <div className='flex'><FontAwesomeIcon icon={faUser}/><span className='sidetag'>Profile</span></div>
                    <div className='flex'><FontAwesomeIcon icon={faLink} /><span className='sidetag'>Log Out</span></div>
                
         </div>

    
    
  );
}

export default MobileSideNav;
