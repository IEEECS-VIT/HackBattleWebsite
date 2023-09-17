import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Prizes from './components/Prizes';
import Tracks from './components/Tracks';
import FAQ from './components/FAQ';
import AboutHack from './components/AboutHack';
import ConductedBy from './components/ConductedBy';
import Layout from './components/Layout';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import Team from './components/Team';
import ChangeTeam from './components/ChangeTeam';

function App() {
  return (
    <>
      <Layout>
      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <AboutHack />
            {/* <Prizes/> */}
            <Tracks />
            <ConductedBy />
            <FAQ />
          </>
        } />
        <Route path='/register' element={<Register />} />
        <Route path='/changeTeam' element={<ChangeTeam />} />
        <Route path='/team/:referenceNumber' element={<Team/>}/>
      </Routes>
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
