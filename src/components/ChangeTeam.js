import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Config } from './Config';

const ChangeTeam = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [regNo, setRegNo] = useState('');
  const [newReferenceNumber, setNewReferenceNumber] = useState('');
  const [oldReferenceNumber, setOldReferenceNumber] = useState('');

  const regNoHandler = (e) => {
    setRegNo(e.target.value);
  };
  const newReferenceNumberHandler = (e) => {
    setNewReferenceNumber(e.target.value);
  };
  const oldReferenceNumberHandler = (e) => {
    setOldReferenceNumber(e.target.value);
  };

  const navigate = useNavigate();
  const [errorStatus, setErrorStatus] = useState('');
  const [errorMsg, setErrorMsg] = useState('Error');

  const changeTeamHandler = async () => {
    try {
      await Axios.put(Config.BASE_URL + '/change_team', {
        Reg_num: regNo,
        newReferenceNumber: newReferenceNumber,
        oldReferenceNumber: oldReferenceNumber,
      })
        .then(function (response) {
          console.log(response);
          navigate(`/team/${response.data.newReferenceNumber}`);
        })
        .catch(function (error) {
          setErrorStatus(error.response.request.status);
          setErrorMsg(error.response.data.error);
          console.log(error);
        });
      setRegNo('');
      setNewReferenceNumber('');
      setOldReferenceNumber('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav
        className='flex items-center justify-between flex-wrap bg-transparent-500 pr-8 pl-8 py-4 border-neoBlue border-neoBlue-400 border-b-2  z-10'
        style={{ fontFamily: 'Chakra Petch' }}
      >
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-white-200 hover:text-neoBlue'>
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='w-full block flex-grow lg:flex justify-between lg:items-center lg:w-auto'>
          <div className='text-md flex w-1/2 justify-around pl-8 pr-6'>
            <div className='inline-flex'>
              <Link
                to='/'
                smooth={true}
                duration={500}
                className={`${
                  activeLink === 'home'
                    ? 'border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900'
                    : ' text-white text-white-500'
                } cursor-pointer items-center px-1 pt-1 text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </Link>
            </div>
            <div className='inline-flex'>
              <Link
                to='/'
                smooth={true}
                duration={500}
                className={`${
                  activeLink === 'tracks'
                    ? 'border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900'
                    : ' text-white text-white-500'
                } cursor-pointer items-center px-1 pt-1  text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick('tracks')}
              >
                Tracks
              </Link>
            </div>
            <div className='inline-flex'>
              <Link
                to='/'
                smooth={true}
                duration={500}
                className={`${
                  activeLink === 'prizes'
                    ? 'border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900'
                    : ' text-white text-white-500'
                } cursor-pointer items-center px-1 pt-1  text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick('prizes')}
              >
                Prizes
              </Link>
            </div>
            <div className='inline-flex'>
              <Link
                to='/'
                smooth={true}
                duration={500}
                className={`${
                  activeLink === 'abouthack'
                    ? 'border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900'
                    : ' text-white text-white-500'
                } cursor-pointer items-center px-1 pt-1  text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick('abouthack')}
              >
                About Hack
              </Link>
            </div>
            <div className='inline-flex'>
              <Link
                to='/'
                smooth={true}
                duration={500}
                className={`${
                  activeLink === 'faq'
                    ? 'border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900'
                    : ' text-white text-white-500'
                } cursor-pointer items-center px-1 pt-1 text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                onClick={() => handleLinkClick('faq')}
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className='flex-basis-1/2 mr-8'>
            <a
              href='/register'
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)',
              }}
              className='inline-block text-xl px-4 py-2 leading-none border text-darkBlue bg-neoBlue mt-2 lg:mt-0 font-bold'
            >
              Register Now!
            </a>
          </div>
        </div>
      </nav>
      <div className='px-10 flex flex-col items-center'>
        <div className='flex flex-col justify-center items-center w-5/6 my-14'>
          <p className='text-neoBlue font-chakra'>Switch your team for</p>
          <h1 className='pt-7 text-3xl font-bold tracking-widest text-white font-chakra'>
            HACKBATTLE'<span className='text-neoBlue'>23</span>
          </h1>
        </div>
        <div className='flex flex-col justify-center items-center w-2/3'>
          <div className='flex flex-col w-5/6 my-4'>
            <label
              htmlFor='FirstName'
              className='font-chakra text-neoBlue mb-2'
            >
              Registration number
            </label>
            <input
              type='text'
              placeholder='Enter your registration number'
              className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
              value={regNo}
              onChange={regNoHandler}
            ></input>
          </div>
          <div className='flex flex-col w-5/6 my-4'>
            <label
              htmlFor='FirstName'
              className='font-chakra text-neoBlue mb-2'
            >
              Old reference number
            </label>
            <input
              type='text'
              placeholder='Enter old reference number'
              className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
              value={oldReferenceNumber}
              onChange={oldReferenceNumberHandler}
            ></input>
          </div>
          <div className='flex flex-col w-5/6 my-4'>
            <label
              htmlFor='FirstName'
              className='font-chakra text-neoBlue mb-2'
            >
              New reference number
            </label>
            <input
              type='text'
              placeholder='Enter new reference number'
              className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
              value={newReferenceNumber}
              onChange={newReferenceNumberHandler}
            ></input>
          </div>
        </div>
        <div
          class={`${
            errorStatus === '' ? 'hidden' : 'block'
          } bg-red-100 border border-red-400 text-red-700 px-4 mt-4 py-3 rounded relative`}
          role='alert'
        >
          <strong class='font-bold'>{errorStatus}</strong>
          <span class='block sm:inline'> {errorMsg}</span>
        </div>
        <button
          className='inline-block w-44 text-md my-10 mx-5 px-5 py-3 font-chakra font-bold leading-none border text-darkBlue bg-neoBlue'
          onClick={changeTeamHandler}
        >
          Change Team
        </button>
      </div>
    </>
  );
};

export default ChangeTeam;
