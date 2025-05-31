import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./components/navbar/index.jsx";
import Userdata from "./components/userdata/index.jsx";
export default function Home() {
    const nav = useNavigate();
    const [userData, setUserData] = useState({});
    function getUserData() {
        setUserData(JSON.parse(localStorage.getItem('user_data')));
    }
    useEffect(() => {
        getUserData();
        if(localStorage.getItem('user_data')==null){
            nav("/login")
        }

    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Navbar />
        <Userdata user={userData}/>
        </div>
    );
    
};
