import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Config } from './Config';
import Navbar from "./Navbar";

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
    }
    const newReferenceNumberHandler = (e) => {
        setNewReferenceNumber(e.target.value);
    }
    const oldReferenceNumberHandler = (e) => {
        setOldReferenceNumber(e.target.value);
    }

    const navigate = useNavigate();
    const [errorStatus, setErrorStatus] = useState('');
    const [errorMsg, setErrorMsg] = useState('Error');

    const changeTeamHandler = async () => {
        try {
            setErrorStatus('');
            setErrorMsg('');
            await Axios.put(Config.BASE_URL + '/change_team', {
                Reg_num: regNo,
                newReferenceNumber: newReferenceNumber,
                oldReferenceNumber: oldReferenceNumber
            })
                .then(function (response) {
                    console.log(response);
                    localStorage.setItem('refCode', response.data.newReferenceNumber);
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
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <Navbar/>
            <div className="px-2 md:px-10 flex flex-col items-center">
                <div className="flex flex-col justify-center items-center w-full md:w-5/6 my-14">
                    <p className="text-neoBlue font-chakra">Switch your team for</p>
                    <h1 className="pt-7 text-3xl font-bold tracking-widest text-white font-chakra">HACKBATTLE'<span className="text-neoBlue">23</span></h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full md:w-2/3">
                    <div className="flex flex-col w-5/6 my-4">
                        <label htmlFor="FirstName" className="font-chakra text-neoBlue mb-2">Registration number</label>
                        <input type="text" placeholder="Enter your registration number" className="font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white" value={regNo} onChange={regNoHandler}></input>
                    </div>
                    <div className="flex flex-col w-5/6 my-4">
                        <label htmlFor="FirstName" className="font-chakra text-neoBlue mb-2">Old reference number</label>
                        <input type="text" placeholder="Enter old reference number" className="font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white" value={oldReferenceNumber} onChange={oldReferenceNumberHandler}></input>
                    </div>
                    <div className="flex flex-col w-5/6 my-4">
                        <label htmlFor="FirstName" className="font-chakra text-neoBlue mb-2">New reference number</label>
                        <input type="text" placeholder="Enter new reference number" className="font-chakra bg-neoBlueLight p-1 px-2 border-0 outline-0 text-white" value={newReferenceNumber} onChange={newReferenceNumberHandler}></input>
                    </div>
                </div>
                <div class={`${errorStatus === '' ? 'hidden' : 'flex'} bg-red-100 border border-red-400 text-red-700 px-1 md:px-4 mt-4 py-3 rounded relative`} role="alert">
                    <strong class="font-bold mr-1">{errorStatus}</strong>
                    <span class="block sm:inline"> {errorMsg}</span>
                </div>
                <button
                    className='inline-block w-44 text-md my-10 mx-5 px-5 py-3 font-chakra font-bold leading-none border text-darkBlue bg-neoBlue'
                    onClick={changeTeamHandler}
                >
                    Change Team
                </button>
            </div>
        </>
    )
}

export default ChangeTeam;
