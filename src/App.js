import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import PopularCourse from './Components/PopularCourse/PopularCourse';



function App() {
  return (
   <div className='app'>
     <Navbar/>
     <Hero/>
     <PopularCourse/>
     <About/>
    </div>
  );
}

export default App;
