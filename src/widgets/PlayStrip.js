import React, {useState,useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Database from './Database';
import { faShuffle, faBackwardStep, faForwardStep, faPlay, faArrowsRotate, faVolumeUp, faPause} from '@fortawesome/free-solid-svg-icons';
import "./PlayStrip.css";

const PlayStrip = () => {
    const[num, setNum]= useState(0);
    const [isPlaying , setIsPlaying] = useState(false);
    const[volValue, setVolValue] = useState(44);
    const[durationVal, setDurationVal] = useState(0)

    const refContainer = useRef();
    
    const audioElement = useRef(null);
    audioElement.volume =  (volValue/100).toFixed(1).toString();
    
    let audio = new Audio(Database[num].src);

    useEffect(() => {
       if(isPlaying){
        audioElement.current.play();
       }else{
        audioElement.current.pause();
       }

    });

    const volFunction = (e) =>{
        setVolValue(e.target.value);
        console.log(volValue);
        console.log(audioElement.volume);
        

        
    }

    
   
    const play = () =>{
        setIsPlaying(!isPlaying);
    }
    const nextClick = () =>{
        if(num<Database.length-1){
            setNum(num+1);
        }
        else{
            setNum(0);
        }
    }
    const prevClick = () =>{
        if(num>0){
            setNum(num-1);
        }
        else{
            setNum(Database.length - 1);
        }
    }
    
  return (
    <div className='playstrip'>
        <div className='top'>

            <div className='left'>
                <div className='imgsquare'><img src={Database[num].img} alt='mscimg'/></div>
                <div className='details'>
                    <h3>{Database[num].title}</h3>
                    <h6>{Database[num].musician}</h6>
                </div>
            </div>

            <div className='playstrip-middle'>
                <audio
                   volume = { (volValue/100).toFixed(1). toString}
                   src={Database[num].src}
                   ref={audioElement}
                                      
                />
         
                <div className='no-mobile'><FontAwesomeIcon icon={faShuffle}/></div>
                <div className='no-mobile' onClick={prevClick}><FontAwesomeIcon icon={faBackwardStep}/></div>
                <div className='playdiv' onClick={play}><FontAwesomeIcon icon={!isPlaying ? faPlay : faPause }/></div>
                <div className='mobile-yes' onClick={nextClick}><FontAwesomeIcon icon={faForwardStep}/></div>
                <div className='no-mobile'><FontAwesomeIcon icon={faArrowsRotate}/></div>
              


            </div>
            <div className='right'>
                <FontAwesomeIcon icon={faVolumeUp}/>
                {/* <div className='volumestrip'>
                    <div className='innerorange'>

                    </div>
                </div> */}
                <input type="range" min="1" max="100" 
                
                onChange={volFunction} value={volValue} className="volume-slider"/>

            </div>

        </div>


        <div className='playstrip-bottom'>
            {/* <div className='playStrip'>
                <div className='playOrange'>
                    
                </div>
                <div className='playSeekCircle'>
                    <div className='circle'>

                    </div>
                </div>

            </div> */}
            <input type="range"  min="1" max="100" className="seek-slider"/>

        </div>
      
    </div>
  );
}

export default PlayStrip;
