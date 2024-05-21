
import {
  FaWhatsapp,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.jpg";

import { GrFormNextLink } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#e3dac9] dark:bg-gray-950 relative">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="w-70 h-30 border border-bold" />
              {/* Traiteur */}
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
               <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Liens
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                
                  <div className="flex items-center gap-3 mt-3">
                  <GrFormNextLink />
                <li className="cursor-pointer" > <a href="accueil">Accueil</a></li>
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                  <GrFormNextLink />
                <li className="cursor-pointer" > <a href="about-us">Qui sommes-nous?</a></li>
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                  <GrFormNextLink />
                <li className="cursor-pointer" > <a href="services">Services</a></li>
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                  <GrFormNextLink />
                <li className="cursor-pointer" > <a href="annonce">Nouvelle Annonce</a></li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Adresse
                </h1>
                <ul className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Noida, Uttar Pradesh</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaPhone />
                    <p>+212 123456789</p>
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                    <MdEmail/>
                  <p>abdo@gmail.com</p>
                  </div>

                  
                  <div className="flex items-center gap-3 mt-6">
                    <a
                      href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-600"
                    >
                      <FaWhatsapp className="text-xl" />
                    </a>
                  </div>
                </ul>
              </div>
            </div>
            <div className="">


        
          </div>
        </div>

      </div>
      <div className="absolute bottom-4 right-4">
        <a href="admin"><button className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
          Administration
        </button></a>
      </div>
    </section>
  </div>

);

};

export default Footer;
