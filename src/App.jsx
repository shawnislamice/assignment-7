
import './App.css'
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar'
import Recipies from './components/Recipies/Recipies';

function App() {

  return (
    <>
      <section className='container mx-auto max-w-screen-xl relative'>
        <div className=''>
          <NavBar></NavBar>
        </div>
        <div className=''>
          <Hero></Hero>
        </div>
        <div>
          <Recipies></Recipies>
        </div>
      </section>
    </>
  );
}

export default App
