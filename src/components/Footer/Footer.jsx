// import   useState  from "react";
import {
    FaWhatsapp ,
  FaInstagram,
 
  FaLocationArrow,
  FaPhone,
  

} from "react-icons/fa";
import footerLogo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="w-70 h-30" />
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
                  <li className="cursor-pointer"><a href="">Accueil</a></li>
                  <li className="cursor-pointer"><a href="">Qui sommes-nous?</a></li>
                  <li className="cursor-pointer"><a href="">Services</a></li>
                  <li className="cursor-pointer"><a href="">Nouvelle Annonce</a></li>
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
              < FaPhone/>
              <p>+212 123456789</p>

            </div>
            
            {/* <div className="flex items-center gap-3 mt-3"> */}
               
               {/* <MdOutlineEmail /> */}
              <p>abdo@gmail.com</p>

            {/* </div> */}



            <div className="flex items-center gap-3 mt-6">

            <a
          href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600"
        >
          <FaInstagram className="text-xl" />
          {/* <span className="ml-2">Instagram</span> */}
        </a>
              <a
          href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600"
        >
          <FaWhatsapp className="text-xl" />
          {/* <span className="ml-2">WhatsApp</span> */}
        </a>
            </div>

                </ul>
              </div>
            </div>
            <div className="">
       
            </div>
          </div>
        </div>
        <div>
          {/* <div className="text-center py-10 border-t-2 border-gray-300/50">
              @copyright 2024 All rights reserved
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Footer;