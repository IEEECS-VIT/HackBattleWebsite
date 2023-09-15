import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Prizes from './components/Prizes';
import Tracks from './components/Tracks';
import FAQ from './components/FAQ';
import AboutHack from './components/AboutHack';
import ConductedBy from './components/ConductedBy';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default App;
