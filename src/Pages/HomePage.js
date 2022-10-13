import React from 'react';

import Database from '../widgets/Database';
import Jumbotron from '../widgets/Jumbotron';
import PlayStrip from '../widgets/PlayStrip';
import SideNav from '../widgets/SideNav';
import TopChart from '../widgets/TopChart';
import UpperNav from '../widgets/UpperNav';
import "./HomePage.css";

const HomePage = () => {

    const list = Database.map(item=>(

        <div className=" releasecard" key={item.id}>
            <img src={item.img}/>
            <div className='title'>{item.title}</div>

        </div>
    ));
  return (
    <div className='Homepage'>
        <div className='top'>
            <UpperNav />
        </div>
        <div className='middle'>
            <div className='mobilenone'>
                   <SideNav type="home" className="firstmiddle"/>
            </div>
          
            <div className='secondmiddle'>
               <Jumbotron />
            </div>
            <div className="thirdmiddle">
                <TopChart />

            </div>
           
        </div>
        <div className='bottom'>
            <h2>NEW RELEASE</h2>
            <div className='releasecardflex'>
                {list}

            </div>
        </div>
        <div className='bottom'>
            <h2>POPULAR SONGS</h2>
            <div className='releasecardflex'>
                {list}
            </div>
        </div>
        <div className='player'>
                <PlayStrip/>

        </div>
      
    </div>
  );
}

export default HomePage;
