import React from 'react';
import PlayStrip from '../widgets/PlayStrip';
import SideNav from '../widgets/SideNav';
import UpperNav from '../widgets/UpperNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMusic, faHeart,faListDots} from '@fortawesome/free-solid-svg-icons';

import "./ListMusic.css";

const ListMusic = () => {
  return (
    <div className='listmusic'>
        <div className='listmusic-top'>
            <UpperNav/>
        </div>
        <div className='listmusic-middle'>
            <div className='no-mobile-display'>
                    <SideNav type="list"/>
            </div>
            
            <div className='listmusic-middle-right'>
                <div className='listmusic-widgets'>
                    <div className='listmusic-widget'>My Collection</div>
                    <div className='listmusic-widget'>Likes</div>
                </div>


                <div className='cards'>
                    <div className='firstcard'>
                            <div>
                                <img src="image/4.png"/>
                            </div>
                            <div className='firstcard-text'>
                                <div>
                                        <h3>Limits</h3>
                                        <h6>John Walks</h6>
                                </div>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </div>
                              
                             
                            </div>

                    </div>

                    <div className='firstcard'>
                            <div>
                                <img src="image/7.png"/>
                            </div>
                            <div className='firstcard-text'>
                                <div>
                                        <h3>Limits</h3>
                                        <h6>John Walks</h6>
                                </div>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </div>
                              
                             
                            </div>
                    </div>


                    <div className='firstcard'>
                            <div>
                                <img src="image/9.png"/>
                            </div>
                            <div className='firstcard-text'>
                                <div>
                                        <h3>Limits</h3>
                                        <h6>John Walks</h6>
                                </div>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </div>
                              
                             
                            </div>
                    </div>

                    <div className='firstcard'>
                            <div>
                                <img src="image/5.png"/>
                            </div>
                            <div className='firstcard-text'>
                                <div>
                                        <h3>Limits</h3>
                                        <h6>John Walks</h6>
                                </div>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </div>
                              
                             
                            </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='bottomstripe'>
            <PlayStrip/>
        </div>
      
    </div>
  );
}

export default ListMusic;
