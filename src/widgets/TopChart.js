import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import "./TopChart.css";
import { Link } from 'react-router-dom';

const TopChart = () => {
  return (
    <div className='Topchart'>
        <h2>TOP CHARTS</h2>
        <div className='playlistcards'>
            <div className='playlistcard'>
                <Link to="/listpage">
                        <div className='left'>
                            <img src='image/1.png' alt='text'/>
                            <div className='details'>
                                <h3>Golden age of 80s</h3>
                                <h6> Sean Swadder</h6>
                                <h5>2:34:45</h5>
                            </div>

                        </div>     
                </Link>
                
                <div className='right'>
                     <FontAwesomeIcon className='icon' icon={faHeart}/>
                </div>
            </div>


            <div className='playlistcard'>
                <Link to="/listpage">
                         
                        <div className='left'>
                            <img src='image/2.png' alt='text'/>
                            <div className='details'>
                                <h3>Reggae 'n' Blues</h3>
                                <h6> Dj Yk Mule</h6>
                                <h5>1:02:45</h5>
                            </div>

                        </div>

                </Link>
            
                <div className='right'>
                     <FontAwesomeIcon className='icon' icon={faHeart}/>
                </div>
            </div>



            <div className='playlistcard'>

                <Link to="/listpage">
                            <div className='left'>
                                <img src='image/4.png' alt='text'/>
                                <div className='details'>
                                    <h3>Tomorrrows tunes</h3>
                                    <h6> Obi Datti</h6>
                                    <h5>2:01:25</h5>
                                </div>

                            </div>


                </Link>
               
                <div className='right'>
                     <FontAwesomeIcon className='icon' icon={faHeart}/>
                </div>
            </div>


            <div className='playlistcard'>
                <Link to="/listpage">
                        <div className='left'>
                            <img src='image/6.png' alt='text'/>
                            <div className='details'>
                                <h3>Tomorrrows tunes</h3>
                                <h6> Obi Datti</h6>
                                <h5>2:01:25</h5>
                            </div>

                        </div>

                </Link>
                
                <div className='right'>
                     <FontAwesomeIcon className='icon' icon={faHeart}/>
                </div>
            </div>


            <div className='playlistcard'>

                <Link to="/listpage">

                        <div className='left'>
                            <img src='image/9.png' alt='text'/>
                            <div className='details'>
                                <h3>Tomorrrows tunes</h3>
                                <h6> Obi Datti</h6>
                                <h5>2:01:25</h5>
                            </div>

                        </div>


                </Link>
               
                <div className='right'>
                     <FontAwesomeIcon className='icon' icon={faHeart}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TopChart;
