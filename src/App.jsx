<<<<<<< HEAD
import React from "react";
import AOS from "aos";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import DemandeAnnonce from "./Admin/DemandeAnnonce.jsx";

=======
  import React from "react";
  import AOS from "aos";
  import { RouterProvider } from "react-router-dom";
  import { router } from "./router/index.jsx";
>>>>>>> f99a883d5d7c68a6e494a6e7b7ebacc0894133c4



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


<<<<<<< HEAD
  return (
    <>
      <RouterProvider router={router} />
      {/* <DemandeAnnonce/>   */}
    </>
  );
};
=======
    return (
      <>
        <RouterProvider router={router} /> 
      </>
    );
  };
>>>>>>> f99a883d5d7c68a6e494a6e7b7ebacc0894133c4

  export default App;
