// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
// import Anonce from "./components/Annonce/Annonce";
import Celebration from "./components/Celebration/Celebration";
import Contact from "./components/Contact/Contact";



const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return( 
      <>
         <Navbar/>
         <Hero/>
         <AboutUs/>
         <Celebration/>
         {/* <Anonce/> */}
     
        <Contact/>
         <Footer/>
    </>
  );

};

export default App;