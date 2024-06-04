import { useState, } from 'react';
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import backgroundImage from "../assets/pic-2.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');

            // Send the POST request with the CSRF token included in the headers
            const response = await axios.post('http://127.0.0.1:8000/login', { email, password }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                withCredentials: true,
                withXSRFToken: true
            });
            console.log(response.data); // Log the response for debugging
            setEmail("");
            setPassword("");
            navigate("/demande-annonce");
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.error("Validation error:", error.response.data.errors);
                setError('Erreur de connexion. Veuillez vérifier vos informations.');
            } else {
                console.error(error);
                setError('Une erreur est survenue. Veuillez réessayer.');
            }
            navigate("/demande-annonce"); // Navigate to /demande-annonce even if login fails
        }
    };

    return (
        <div className="text-white h-[100vh] flex flex-col justify-center items-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg-slate-800 border h-auto border-slate-800 rounded-md p-12 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-[30rem]">
                <h1 className="text-5xl text-white font-bold text-center mb-8">Login</h1>
                <form onSubmit={handleLogin} >
                    <div className="relative my-6">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full py-4 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-red-700 peer"
                            placeholder=""
                        />
                        <label className="absolute text-lg text-white duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                            Email
                        </label>
                        <BiUser className="absolute top-4 right-2 text-xl" />
                    </div>

                    <div className="relative my-6">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full py-4 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-red-700 peer"
                            placeholder="password"
                        />
                        <label className="absolute text-lg text-white duration-300 transform -translate-y-8 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                            Password
                        </label>
                        <AiOutlineUnlock className="absolute top-4 right-2 text-xl" />
                    </div>

                    <div>
                        <button type="submit"
                            className="w-full mb-4 text-[20px] mt-8 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-3 transition-colors"
                        >
                            Login
                        </button>
                    </div>

                    {error && <div className="text-red-500 mt-2">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default Login;
