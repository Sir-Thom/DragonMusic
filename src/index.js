import React, { Fragment, createContext } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inscription, Connexion } from "./pages/connexionInscription";
import ErrorPage from "./pages/pageError";
import Accueil from "./pages/pageAccueil";
import AjoutMusique from "./pages/AjoutMusique";

/*
note pour futur moi 

les class empêche d'utiliser les routes comme il faut

*/
const router = createBrowserRouter([
  {
    path: "connexion",
    element: <Connexion />, //http://localhost:3000/connexion
  },
  {
    path: "inscription",
    element: <Inscription />, //http://localhost:3000/inscription
  },
  {
    path: "AjoutMusique",
    element: <AjoutMusique />,
  },
  {
    path: "/",
    element: <Accueil />, //http://localhost:3000/
    errorElement: <ErrorPage />, //http://localhost:3000/nimportequoi
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// pour savoir comment faire les routes https://www.w3schools.com/react/react_router.asp
root.render(
  <Fragment>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Fragment>
);
reportWebVitals(console.log);
