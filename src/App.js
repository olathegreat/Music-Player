import React from 'react';
import { Routes,Route} from 'react-router';
import "./App.css";
import HomePage from './Pages/HomePage';
import ListMusic from './Pages/ListMusic';
import SinglePlay from './Pages/SinglePlay';
import MobileSideNav from './widgets/MobileSideNav';
import PlayStrip from './widgets/PlayStrip';
import SideNav from './widgets/SideNav';
import TopChart from './widgets/TopChart';
import UpperNav from './widgets/UpperNav';

const App = () => {
  return (
    <div className='App'>
      {/* <UpperNav/> */}
      {/* <SideNav/> */}
      {/* <MobileSideNav/> */}
      {/* <PlayStrip/> */}
      {/* <HomePage/> */}
      {/* <TopChart/> */}
      {/* <SinglePlay/> */}
      <Routes>
        <Route path="/" exact element={<HomePage/>}></Route>
        <Route path="/listpage" exact element={<SinglePlay/>}></Route>
        <Route path="/card" element={<ListMusic/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
