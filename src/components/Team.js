import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { Config } from './Config';

const Team = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const Navigate = useNavigate();

  const { referenceNumber } = useParams();
  const [teamData, setTeamData] = useState(null);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                await Axios.get(`${Config.BASE_URL}/team/${referenceNumber}`)
                .then(function(response){
                    setTeamData(response.data);
                    console.log(response.data);
                })
                .catch(function (error) {
                    if(error.response.data.error === 'Team not found'){
                        Navigate('/team/null');
                    }
                    console.log(error);
                });
            } catch (error) {
                console.error('Failed to fetch team data:', error);
            }
        };
        fetchTeamData();
    }, []);

    const [refNumber, setRefNumber] = useState('');

    useEffect(()=>{
        setRefNumber(localStorage.getItem('refCode'));
    }, []);

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-transparent-500 pr-8 pl-8 py-4 border-neoBlue border-neoBlue-400 border-b-2  z-10" style={{ fontFamily: "Chakra Petch" }}>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white-200 hover:text-neoBlue">
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex justify-between lg:items-center lg:w-auto">
                    <div className="text-md flex w-1/2 justify-around pl-8 pr-6">
                        <div className="inline-flex">
                            <Link
                                to="/"
                                smooth={true}
                                duration={500}
                                className={`${activeLink === "home"
                                    ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                                    : " text-white text-white-500"
                                    } cursor-pointer items-center px-1 pt-1 text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                onClick={() => handleLinkClick("home")}
                            >
                                Home
                            </Link>
                        </div>
                        <div className="inline-flex">
                            <Link
                                to="/"
                                smooth={true}
                                duration={500}
                                className={`${activeLink === "tracks"
                                    ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                                    : " text-white text-white-500"
                                    } cursor-pointer items-center px-1 pt-1  text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                onClick={() => handleLinkClick("tracks")}
                            >
                                Tracks
                            </Link>
                        </div>
                        <div className="inline-flex">
                            <Link
                                to="/"
                                smooth={true}
                                duration={500}
                                className={`${activeLink === "prizes"
                                    ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                                    : " text-white text-white-500"
                                    } cursor-pointer items-center px-1 pt-1  text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                onClick={() => handleLinkClick("prizes")}
                            >
                                Prizes
                            </Link>
                        </div>
                        <div className="inline-flex">
                            <Link
                                to="/"
                                smooth={true}
                                duration={500}
                                className={`${activeLink === "abouthack"
                                    ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                                    : " text-white text-white-500"
                                    } cursor-pointer items-center px-1 pt-1  text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                onClick={() => handleLinkClick("abouthack")}
                            >
                                About Hack
                            </Link>
                        </div>
                        <div className="inline-flex">
                            <Link
                                to="/"
                                smooth={true}
                                duration={500}
                                className={`${activeLink === "faq"
                                    ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                                    : " text-white text-white-500"
                                    } cursor-pointer items-center px-1 pt-1 text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                onClick={() => handleLinkClick("faq")}
                            >
                                FAQ
                            </Link>
                        </div>
                        <div className="inline-flex">
                            <Link
                                to={`/team/${refNumber}`}
                                smooth={true}
                                duration={500}
                                className={`${activeLink === "team"
                                    ? "border-neoBlue border-b-4 border-neoBlue-500 text-neoBlue text-neoBlue-900"
                                    : " text-white text-white-500"
                                    } cursor-pointer items-center px-1 pt-1 text-xl font-medium block mt-4 lg:inline-block lg:mt-1 mr-4`}
                                onClick={() => handleLinkClick("team")}
                            >
                                Team
                            </Link>
                        </div>
                    </div>
                    <div className="flex-basis-1/2 mr-8">
                        <a
                            href='/register'
                            style={{
                                clipPath:
                                    "polygon(0 0, 100% 0, 100% 20%, 97% 30%,97% 70%,100% 80%, 100% 100%, 5% 100%,0% 80%)",
                            }}
                            className="inline-block text-xl px-4 py-2 leading-none border text-darkBlue bg-neoBlue mt-2 lg:mt-0 font-bold"
                        >
                            Register Now!
                        </a>
                    </div>
                </div>
            </nav>
            <div className="px-2 md:px-10 flex flex-col items-center">
                <div className="flex flex-col justify-center items-center w-full md:w-5/6 my-14">
                    <p className="text-neoBlue font-chakra">Yay! you are successfully registered! <span className="text-black">🎉</span></p>
                    <h1 className="pt-7 text-3xl font-bold tracking-widest text-white font-chakra">HACKBATTLE'<span className="text-neoBlue">23</span></h1>
                </div>
                <div className="flex flex-col justify-center w-full px-4 md:px-0 md:w-2/3">
                    <h1 className="text-neoBlue font-chakra text-2xl font-bold">TEAM DETAILS</h1>
                    <div className="flex flex-col w-full my-4 mx-auto">
                        <div className="flex justify-between my-3 p-2 px-4 font-chakra bg-neoBlueLight border-0 outline-0 text-white">
                            <p className="font-chakra">Team Name</p>
                            {teamData ? (
                                <p className="font-chakra text-neoBlue">{teamData.team.team_name}</p>
                            ) : (
                                <p>Loading team data...</p>
                            )}
                        </div>
                        <div className="flex-col md:flex-row flex justify-between my-3 p-2 px-4 font-chakra bg-neoBlueLight border-0 outline-0 text-white">
                            <p className="font-chakra">Team Referral Code</p>
                            {teamData ? (
                                <p className="font-chakra text-neoBlue select-text">{teamData.team.referenceNumber}</p>
                            ) : (
                                <p>Loading team data...</p>
                            )}

                        </div>
                        <div className="flex-col md:flex-row flex justify-between my-3 p-2 px-4 font-chakra bg-neoBlueLight border-0 outline-0 text-white">
                            <p className="font-chakra">Repository Link</p>
                            {teamData ? (<p className="font-chakra text-neoBlue">{teamData.teamLeader.git_link}</p>) : (<p>Loading team data...</p>)}
                        </div>
                        <div className="flex justify-between mt-3 p-2 px-4 font-chakra bg-neoBlueLight border-0 outline-0 text-white">
                            <p className="font-chakra">Team Members</p>
                        </div>
                        {teamData ? (<div key={teamData.teamLeader.Reg_num} className="flex justify-between p-2 px-4 font-chakra bg-lighterGrey border-0 outline-0 text-white">
                            <p className="font-chakra">{teamData.teamLeader.name} 👑</p>
                            <p className="font-chakra text-neoBlue">{teamData.teamLeader.Reg_num}</p>
                        </div>) : (<p>Loading team data...</p>)}
                        {teamData ? (teamData.teamMembers.map(member => (
                            <div key={member.Reg_num} className="flex justify-between p-2 px-4 font-chakra bg-lighterGrey border-0 outline-0 text-white">
                                <p className="font-chakra">{member.name}</p>
                                <p className="font-chakra text-neoBlue">{member.Reg_num}</p>
                            </div>
                        ))) : (<p>Loading team data...</p>)}
                    </div>
                </div>
                <button
                    className='inline-block w-44 text-md my-10 mx-5 px-5 py-3 font-chakra font-bold leading-none border text-darkBlue bg-neoBlue'
                    onClick={()=> Navigate('/changeTeam')}
                >
                    Change Team
                </button>
            </div>
        </>
    )
}

export default Team;
