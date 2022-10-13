import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className='jumbotron'>
      <div className='left'>
        <div className='top caption'>
            Curated Playlist
        </div>
        <div className='jumbotron-middle'>
            <h1>R & B Hits</h1>
            <div className=' header-caption caption'>
                All mine, Lie Again, Petty call me everyday,<br/>
                Out of time, No love, Bad habit<br/>
                and so much more
            </div>
          
        </div>
        <div className='jumbotron-bottom'>
                <div className='heads'>
                    <img alt='image' src='image/firsthead.jpg'/>
                    <img alt='image'  src='image/secondhead.jpg'/>
                    <img  alt='image' src='image/thirdhead.jpg'/>
                </div>
                <div className='caption'>
                   <FontAwesomeIcon className='icon' icon={faHeart}/>
                   <div className='likes'>35k likes</div>
                </div>
               
               
        </div>

      </div>
      <div className='right'>
        <img alt='image' src='image/singer1.png'/>

      </div>
    </div>
  );
}

export default Jumbotron;
