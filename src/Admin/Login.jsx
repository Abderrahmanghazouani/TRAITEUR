import { useState } from 'react';
import { AiOutlineUnlock, AiOutlineWarning } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import backgroundImage from "../assets/pic-2.jpg";
import  { AxiosAdmin } from "../api/axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();




    const handleLogin = async (event) =>{
        event.preventDefault();

       

        try {
             await AxiosAdmin.get('/sanctum/csrf-cookie');
             await AxiosAdmin.post('/login', { email, password,});
             setEmail("")
             setPassword("")
             navigate("/about-us");
         
            // Handle successful login (e.g., redirect, store token)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="text-white h-[100vh] flex flex-col justify-center items-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="flex items-center mb-8 bg-red-800 text-white p-4 rounded-md shadow-lg">
                <AiOutlineWarning className="mr-2 text-4xl font-bold" />
                <h1 className="text-3xl font-bold">C'est juste pour les administrateurs</h1>
            </div>
            <div className="bg-slate-800 border h-80 border-slate-800 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleLogin} >
                    <div className="relative my-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            className="block w-72 py-2.3 text-sm text-white bg-transparent border-o border-b-2 border-gray-300 appearance-none dark:focus:border-red-600 focus:outline-none focus:ring-0 focus:text-white focus:border-red-700 peer"
                            placeholder=""
                        />
                        <label
                            htmlFor=""
                            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-700 peer-focus:dar:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Username
                        </label>
                        <BiUser className="absolute top-0 right-2" />
                    </div>

                    <div className="relative my-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            className="block w-72 py-2.3 text-sm text-white bg-transparent border-o border-b-2 border-gray-300 appearance-none dark:focus:border-red-600 focus:outline-none focus:ring-0 focus:text-white focus:border-red-700 peer"
                          
                            placeholder=""
                        />
                        <label
                            htmlFor=""
                            className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-700 peer-focus:dar:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                        <AiOutlineUnlock className="absolute top-0 right-2" />
                    </div>

                    <div>
                        <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
