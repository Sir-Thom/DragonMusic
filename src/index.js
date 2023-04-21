import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

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
    element: <Connexion />,
  },
  {
    path: "inscription",
    element: <Inscription />,
  },
  {
    path: "AjoutMusique",
    element: <AjoutMusique />,
  },
  {
    path: "/",
    element: <Accueil />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Fragment>
);

//reportWebVitals(console.log);
