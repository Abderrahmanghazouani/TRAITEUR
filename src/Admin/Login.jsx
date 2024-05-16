import {  AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import backgroundImage from "../assets/pic-2.jpg"



const Login = () => {
return (
   
            <div className=" text-white h-[100vh] flex justify-center items-center bg-cover "     style={{
                backgroundImage: `url(${backgroundImage})` }} >
        <div  className="bg-slate-800 border border-slate-800 rounded-md p-8 shadow-lg
        backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
            <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
            <form action="">

            <div className="relative my-4">
            <input type="text" name="" id=""  className="block w-72 py-2.3 text-sm text-white bg-transparent border-o border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
            <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dar:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
           <BiUser className="absolute top-1 right-2"/>
            </div>

            <div className="relative my-4">
            <input type="password" name="" id=""  className="block w-72 py-2.3 text-sm text-white bg-transparent border-o border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
            <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dar:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            
            <AiOutlineUnlock className="absolute top-1 right-2"/>
         </div>

            <div>
                <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors">Login</button>
            </div>
            </form> 
        </div>
    </div>
    
         

);


};

export default Login;