import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
        <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-700 mb-4">This is a simple home page.</p>
        <a href="/login" className="text-blue-500 hover:underline">
            Go to Login {userData.email}
        </a>
        </div>
    );
    
};
