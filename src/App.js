import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Prizes from './components/Prizes';
import Tracks from './components/Tracks';
import FAQ from './components/FAQ';
import AboutHack from './components/AboutHack';
import ConductedBy from './components/ConductedBy';

function App() {
  return (
    <>
      <Home />
      <AboutHack />
      <Tracks />
      {/* <Prizes /> */}
      <ConductedBy />
      <FAQ />
      <div id='space'>
        <div className='stars'></div>
        <div className='stars'></div>
        <div className='stars'></div>
        <div className='stars'></div>
        <div className='stars'></div>
      </div>
    </>
  );
}

export default App;
