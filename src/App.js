import { useState } from 'react';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import PopularCourse from './Components/PopularCourse/PopularCourse';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';



function App() {
  const [hideVideoPlayer, setHideVideoPlayer] = useState(true)
  return (
   <div className='app'>
     <Navbar/>
     <Hero/>
     <PopularCourse/>
     <About setHideVideoPlayer={setHideVideoPlayer}/>
     <VideoPlayer hideVideoPlayer={hideVideoPlayer} setHideVideoPlayer = {setHideVideoPlayer}/>
    </div>
  );
}

export default App;
