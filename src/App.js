import { useState } from 'react';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import PopularCourse from './Components/PopularCourse/PopularCourse';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Gallery from './Components/Gallery/Gallery';
import GalleryPhotos from './Components/GallaryPhotos/GalleryPhotos';



function App() {
  const [hideVideoPlayer, setHideVideoPlayer] = useState(true)
  const [hideGallery, setHideGallery] = useState(true)
  return (
   <div className='app'>
     <Navbar/>
     <Hero/>
     <PopularCourse/>
     <About setHideVideoPlayer={setHideVideoPlayer}/>
     <VideoPlayer hideVideoPlayer={hideVideoPlayer} setHideVideoPlayer = {setHideVideoPlayer}/>
     <Gallery setHideGallery={setHideGallery}/>
     <GalleryPhotos hideGallery={hideGallery} setHideGallery={setHideGallery}/>
    </div>
  );
}

export default App;
