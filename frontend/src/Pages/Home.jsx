import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./components/navbar/index.jsx";
import Userdata from "./components/userdata/index.jsx";
import Sidebare from './components/sidebar/index.jsx';
import Stories from './components/Stories/index.jsx';
import Request from './components/Requests/index.jsx';
import Posts from './components/Posts/index.jsx';
import '../App.css';
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
            <div className='test'>
                 <div style={{width:"25%"}}>
                    <Userdata user={userData}/>
                    <Sidebare/>
                </div>
                <div style={{width:"50%"}}>
                    <Stories />
                    <Posts />
                    
                </div>
                <div style={{width:"25%"}}>
                <Request />
                
                </div>
            </div>
           
        
        </div>
    );
    
};
