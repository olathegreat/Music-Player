import React from 'react';
import Database from '../widgets/Database';
import Jumbotron from '../widgets/Jumbotron';
import PlayStrip from '../widgets/PlayStrip';
import SideNav from '../widgets/SideNav';
import TopChart from '../widgets/TopChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMusic, faHeart,faListDots} from '@fortawesome/free-solid-svg-icons';
import UpperNav from '../widgets/UpperNav';
import "./SinglePlay.css";

const SinglePlay = () => {
    const cardDisplay = Database.map(item=>(
        <div className='cardmusic' key={item.id}>
            <div className='card-display-left'>
                <img src={item.img}/>
                <div className='mobile-nodisplay'>
                    
                  <FontAwesomeIcon icon={faHeart}/>

                  

                </div>
                 <div className='mobile-flex'>
                    < h4>{item.title}</h4>
                    <div>{item.musician}</div>
                  </div>
            </div>
            <div className='title'>{item.title}</div>
            <div className='musician'>{item.musician}</div>
            <div className="single">single</div>
            <div className="duration">{item.duration}</div>
            <div className='doticon'>
                <div>

                     <FontAwesomeIcon icon={faListDots}/>
                </div>
                <div className="mobile-flex">{item.duration}</div>
            </div>
        </div>
    ));



  return (
    <div className='singleplay'>
        <div className='singleplay-top'>
            <UpperNav />
        </div>
        <div className='singleplay-middle'>
            <div className='singleplay-middle-left'><SideNav type="home"/></div>
            <div className='singleplay-middle-right'>
                <div className='songDetails'>
                    <img src={Database[1].img}/>
                    <div className='songdescription'>
                       
                        <div>
                               <h3>{Database[1].title}</h3>
                               <div className='words'>
                                   The song is an award winning song ,evergreen and nothing
                                   but the best
                               </div>
                               <div> 64 songs -16hrs+</div>
                           
                        </div>
                        <div className='widgets'>
                            <div className='widget'><span className='icon'><FontAwesomeIcon icon={faPlay} color="orange"/></span> Play All</div>
                           
                            <div className='widget'><span className='icon'><FontAwesomeIcon icon={faMusic} color="orange"/></span> Add to Collection</div>
                            <div className='widget'><span className='icon'><FontAwesomeIcon icon={faHeart} color="red"/></span> </div>
                        </div>
                    </div>
                </div>





                <div className='songlistsdisplay'>
                       {cardDisplay}
                </div>
            </div>
        </div>
       <div className='bottomstripplay'>
           
           <PlayStrip/>
           
             
       </div>
    </div>
  );
}

export default SinglePlay;
