import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Config } from './Config';

const Register = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [activeRegister, setActiveRegister] = useState('Leader');
  const leaderClickHandler = () => {
    setActiveRegister('Leader');
  };
  const memberClickHandler = () => {
    setActiveRegister('Member');
  };

  // Team Leader Details Handlers
  const [leaderFirstName, setLeaderFirstName] = useState('');
  const [leaderLastName, setLeaderLastName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [leaderGithub, setLeaderGithub] = useState('');
  const [leaderRegNo, setLeaderRegNo] = useState('');
  const [leaderPhoneNo, setLeaderPhoneNo] = useState('');

  const leaderFirstNameHandler = (e) => {
    setLeaderFirstName(e.target.value);
  };
  const leaderLastNameHandler = (e) => {
    setLeaderLastName(e.target.value);
  };
  const teamNameHandler = (e) => {
    setTeamName(e.target.value);
  };
  const leaderEmailHandler = (e) => {
    setLeaderEmail(e.target.value);
  };
  const leaderGithubHandler = (e) => {
    setLeaderGithub(e.target.value);
  };
  const leaderRegNoHandler = (e) => {
    setLeaderRegNo(e.target.value);
  };
  const leaderPhoneNoHandler = (e) => {
    setLeaderPhoneNo(e.target.value);
  };

  const navigate = useNavigate();
  const [errorStatus, setErrorStatus] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const leaderSubmitHandler = async () => {
    try {
      await Axios.post(Config.BASE_URL + '/team_leader', {
        name: leaderFirstName + ' ' + leaderLastName,
        teamName: teamName,
        email: leaderEmail,
        git_link: leaderGithub,
        phone_num: leaderPhoneNo,
        reg_num: leaderRegNo,
      })
        .then(function (response) {
          console.log(response);
          navigate(`/team/${response.data.referenceNumber}`);
        })
        .catch(function (error) {
          setErrorStatus(error.response.request.status);
          setErrorMsg(error.response.data.error);
          console.log(error);
        });
      setLeaderFirstName('');
      setLeaderLastName('');
      setTeamName('');
      setLeaderEmail('');
      setLeaderGithub('');
      setLeaderPhoneNo('');
      setLeaderRegNo('');
    } catch (error) {
      console.log(error);
    }
  };

  //Team Member Details Handler
  const [memberFirstName, setMemberFirstName] = useState('');
  const [memberLastName, setMemberLastName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [memberGithub, setMemberGithub] = useState('');
  const [memberRegNo, setMemberRegNo] = useState('');
  const [memberPhoneNo, setMemberPhoneNo] = useState('');
  const [refCode, setRefCode] = useState('');

  const memberFirstNameHandler = (e) => {
    setMemberFirstName(e.target.value);
  };
  const memberLastNameHandler = (e) => {
    setMemberLastName(e.target.value);
  };
  const memberEmailHandler = (e) => {
    setMemberEmail(e.target.value);
  };
  const memberGithubHandler = (e) => {
    setMemberGithub(e.target.value);
  };
  const memberRegNoHandler = (e) => {
    setMemberRegNo(e.target.value);
  };
  const MemberPhoneNoHandler = (e) => {
    setMemberPhoneNo(e.target.value);
  };
  const refCodeHandler = (e) => {
    setRefCode(e.target.value);
  };

  const memberSubmitHandler = () => {
    try {
      Axios.post(Config.BASE_URL + '/team_member', {
        name: memberFirstName + ' ' + memberLastName,
        email: memberEmail,
        git_link: memberGithub,
        phone_num: memberPhoneNo,
        Reg_num: memberRegNo,
        referenceNumber: refCode,
      })
        .then(function (response) {
          console.log(response);
          navigate(`/team/${response.data.referenceNumber}`);
        })
        .catch(function (error) {
          console.log(error);
          setErrorStatus(error.response.request.status);
          setErrorMsg(error.response.data.error);
        });
      setMemberFirstName('');
      setMemberLastName('');
      setMemberEmail('');
      setMemberGithub('');
      setMemberRegNo('');
      setMemberPhoneNo('');
      setRefCode('');
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
      <div className='px-2 md:px-10 flex flex-col items-center'>
        <div className='flex flex-col justify-center items-center w-auto md:w-5/6'>
          <h1 className='py-7 text-xl md:text-3xl font-bold tracking-widest text-white font-chakra'>
            WELCOME TO HACKBATTLE'<span className='text-neoBlue'>23</span>
          </h1>
          <div className='flex justify-center pb-5'>
            <button
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)',
              }}
              className={`inline-block w-40 md:w-52 text-sm md:text-base mx-2 md:mx-5 px-2 md:px-10 py-2 md:py-4 font-chakra font-bold leading-none border text-darkBlue ${
                activeRegister === 'Leader' ? 'bg-neoBlue' : 'bg-lightGrey'
              }`}
              onClick={leaderClickHandler}
            >
              REGISTER AS TEAM LEADER
            </button>
            <button
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, 100% 80%, 95% 100%,0% 100%, 0% 80%, 3% 70%, 3% 30%, 0% 20%)',
              }}
              className={`inline-block w-40 md:w-52 text-sm md:text-base mx-2 md:mx-5 px-2 md:px-10 py-2 md:py-4 font-chakra font-bold leading-none border text-darkBlue ${
                activeRegister === 'Member' ? 'bg-neoBlue' : 'bg-lightGrey'
              }`}
              onClick={memberClickHandler}
            >
              REGISTER AS TEAM MEMBER
            </button>
          </div>
        </div>
        {activeRegister === 'Leader' ? (
          <>
            <div className='flex flex-col items-center w-full md:w-5/6'>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='FirstName'
                  className='font-chakra text-neoBlue mb-2'
                >
                  First name
                </label>
                <input
                  type='text'
                  placeholder='First name'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={leaderFirstName}
                  onChange={leaderFirstNameHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='LastName'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Last name
                </label>
                <input
                  type='text'
                  placeholder='Last name'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={leaderLastName}
                  onChange={leaderLastNameHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='TeamName'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Team name
                </label>
                <input
                  type='text'
                  placeholder='Team name'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={teamName}
                  onChange={teamNameHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='Email'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Email'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={leaderEmail}
                  onChange={leaderEmailHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='Github'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Github Link
                </label>
                <input
                  type='text'
                  placeholder='Enter your Github repository link'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={leaderGithub}
                  onChange={leaderGithubHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='RegNo'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Registration number
                </label>
                <input
                  type='text'
                  placeholder='Enter your Registration number'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={leaderRegNo}
                  onChange={leaderRegNoHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='PhoneNo'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Phone number
                </label>
                <input
                  type='text'
                  placeholder='Phone number'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={leaderPhoneNo}
                  onChange={leaderPhoneNoHandler}
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
              className='inline-block w-60 text-md my-10 mx-5 px-5 py-3 font-chakra font-extrabold leading-none border text-darkBlue bg-neoBlue'
              onClick={leaderSubmitHandler}
            >
              Register As Team Leader
            </button>
          </>
        ) : (
          <>
            <div className='flex flex-col items-center w-full md:w-5/6'>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='FirstName'
                  className='font-chakra text-neoBlue mb-2'
                >
                  First name
                </label>
                <input
                  type='text'
                  placeholder='First name'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={memberFirstName}
                  onChange={memberFirstNameHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='LastName'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Last name
                </label>
                <input
                  type='text'
                  placeholder='Last name'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={memberLastName}
                  onChange={memberLastNameHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='Email'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Email'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={memberEmail}
                  onChange={memberEmailHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='Email'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Github Link
                </label>
                <input
                  type='text'
                  placeholder='Enter your Github repository link'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={memberGithub}
                  onChange={memberGithubHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='RegNo'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Registration number
                </label>
                <input
                  type='text'
                  placeholder='Enter your Registration number'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={memberRegNo}
                  onChange={memberRegNoHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='PhoneNo'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Phone number
                </label>
                <input
                  type='text'
                  placeholder='Phone number'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={memberPhoneNo}
                  onChange={MemberPhoneNoHandler}
                ></input>
              </div>
              <div className='flex flex-col w-5/6 my-4'>
                <label
                  htmlFor='RefCode'
                  className='font-chakra text-neoBlue mb-2'
                >
                  Referral code
                </label>
                <input
                  type='text'
                  placeholder='Enter team referral code'
                  className='font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white'
                  value={refCode}
                  onChange={refCodeHandler}
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
              className='inline-block w-60 text-md my-10 mx-5 px-5 py-3 font-chakra font-extrabold leading-none border text-darkBlue bg-neoBlue'
              onClick={memberSubmitHandler}
            >
              Register As Team Member
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Register;
