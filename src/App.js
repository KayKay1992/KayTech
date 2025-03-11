import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import PopularCourse from './Components/PopularCourse/PopularCourse';



function App() {
  return (
   <div className='app'>
     <Navbar/>
     <Hero/>
     <PopularCourse/>
    </div>
  );
}

export default App;
