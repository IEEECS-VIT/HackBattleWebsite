import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { Config } from './Config';
import Navbar from './Navbar';
import Modal from 'react-modal';
import QRCode from 'react-qr-code';

function QRCodePopup({ isOpen, onClose, qrCodeData }) {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      maxWidth: '50vw',
      maxHeight: '50vh',
      margin: 'auto',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      alignItems: 'center',
      padding: '20px',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='QR Code Popup'
      style={customStyles}
    >
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontFamily: 'Chakra Petch',
            alignItems: 'center',
            height: '100%',
            color: '#00ffed',
            padding: '20px',
          }}
        >
          <h2>QR Code</h2>
          <QRCode
            value={qrCodeData}
            size={200}
            style={{ border: '5px solid white' }}
          />
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
}
const Team = () => {
  const [activeLink, setActiveLink] = useState('home');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          .then(function (response) {
            setTeamData(response.data);
            console.log(response.data);
          })
          .catch(function (error) {
            if (error.response.data.error === 'Team not found') {
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

  return (
    <>
      <Navbar />
      <div className='px-2 md:px-10 flex flex-col items-center'>
        <div className='flex flex-col justify-center items-center w-full md:w-5/6 my-14'>
          <p className='text-neoBlue font-chakra'>
            Yay! you are successfully registered!{' '}
            <span className='text-black'>🎉</span>
          </p>
          <h1 className='pt-7 text-3xl font-bold tracking-widest text-white font-chakra'>
            HACKBATTLE'<span className='text-neoBlue'>23</span>
          </h1>
        </div>
        <div className='flex flex-col justify-center w-full px-4 md:px-0 md:w-2/3'>
          <h1 className='text-neoBlue font-chakra text-2xl font-bold'>
            TEAM DETAILS
          </h1>
          <div className='flex flex-col w-full my-4 mx-auto'>
            <div className='flex justify-between my-3 p-2 px-4 font-chakra bg-neoBlueLight border-0 outline-0 text-white'>
              <p className='font-chakra'>Team Name</p>
              {teamData ? (
                <p className='font-chakra text-neoBlue'>
                  {teamData.team.team_name}
                </p>
              ) : (
                <p>Loading team data...</p>
              )}
            </div>
            <div className='flex-col md:flex-row flex justify-between my-3 p-2 px-4 font-chakra bg-neoBlueLight border-0 outline-0 text-white'>
              <p className='font-chakra'>Team Referral Code</p>
              {teamData ? (
                <>
                  <button
                    className='font-chakra text-neoBlue select-text'
                    onClick={openModal}
                  >
                    Show QR Code
                  </button>
                  <QRCodePopup
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    qrCodeData={teamData.team.referenceNumber}
                  />
                  <p className='font-chakra text-neoBlue select-text'>
                    {teamData.team.referenceNumber}
                  </p>
                </>
              ) : (
                <p>Loading team data...</p>
              )}
            </div>
            <div className='flex-col md:flex-row flex justify-between my-3 p-2 px-4 font-chakra bg-neoBlueLight border-0 outline-0 text-white'>
              <p className='font-chakra'>Repository Link</p>
              {teamData ? (
                <p className='font-chakra text-neoBlue'>
                  {teamData.teamLeader.git_link}
                </p>
              ) : (
                <p>Loading team data...</p>
              )}
            </div>
            <div className='flex justify-between mt-3 p-2 px-4 font-chakra bg-neoBlueLight border-0 outline-0 text-white'>
              <p className='font-chakra'>Team Members</p>
            </div>
            {teamData ? (
              <div
                key={teamData.teamLeader.Reg_num}
                className='flex justify-between p-2 px-4 font-chakra bg-lighterGrey border-0 outline-0 text-white'
              >
                <p className='font-chakra'>{teamData.teamLeader.name} 👑</p>
                <p className='font-chakra text-neoBlue'>
                  {teamData.teamLeader.Reg_num}
                </p>
              </div>
            ) : (
              <p>Loading team data...</p>
            )}
            {teamData ? (
              teamData.teamMembers.map((member) => (
                <div
                  key={member.Reg_num}
                  className='flex justify-between p-2 px-4 font-chakra bg-lighterGrey border-0 outline-0 text-white'
                >
                  <p className='font-chakra'>{member.name}</p>
                  <p className='font-chakra text-neoBlue'>{member.Reg_num}</p>
                </div>
              ))
            ) : (
              <p>Loading team data...</p>
            )}
          </div>
        </div>
        <button
          className='inline-block w-44 text-md my-10 mx-5 px-5 py-3 font-chakra font-bold leading-none border text-darkBlue bg-neoBlue'
          onClick={() => Navigate('/changeTeam')}
        >
          Change Team
        </button>
      </div>
    </>
  );
};

export default Team;
