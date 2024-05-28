import { useState,useEffect } from 'react';
import { AiOutlineUnlock, AiOutlineWarning } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import backgroundImage from "../assets/pic-2.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AxiosAdmin = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    withXSRFToken:true,
    headers: {
        'Content-Type': 'application/json',
        
    },
});

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        setCsrfToken(token);
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
    }, []);
    

    const handleLogin = async (event) => {
        event.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);

        try {
            await AxiosAdmin.get('/sanctum/csrf-cookie');
            const response = await AxiosAdmin.post('/login', { email, password },
            { headers: {
               
                'X-CSRF-TOKEN': csrfToken,
            },}
           
                
            );
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
        }
    };

    return (
        <div className="text-white h-[100vh] flex flex-col justify-center items-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* <div className="flex items-center mb-8 bg-red-800 text-white p-4 rounded-md shadow-lg"> */}
                {/* <AiOutlineWarning className="mr-2 text-4xl font-bold" /> */}
                {/* <h1 className="text-3xl font-bold">C'est juste pour les administrateurs</h1> */}
            {/* </div> */}
            <div className="bg-slate-800 border h-80 border-slate-800 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="relative my-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-72 py-2.3 text-sm text-white bg-transparent border-o border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-red-700 peer"
                            placeholder=""
                        />
                        <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-700 peer-placeholder-shown:scale-100 peer-placeholder-shown-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email
                        </label>
                        <BiUser className="absolute top-0 right-2" />
                    </div>

                    <div className="relative my-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-72 py-2.3 text-sm text-white bg-transparent border-o border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-red-700 peer"
                            placeholder=""
                        />
                        <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-700 peer-placeholder-shown:scale-100 peer-placeholder-shown-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Password
                        </label>
                        <AiOutlineUnlock className="absolute top-0 right-2" />
                    </div>

                    <div>
                        <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors">
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
