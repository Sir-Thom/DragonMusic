
import { useRouteError  } from "react-router-dom";
import {Link} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center gradiant justify-center h-full">
    <div className="text-center bg-cod-gray-100 p-6 " id="error-page" >
      <h1 className="text-6xl font-bold text-white ">Oups!</h1>
      <p className="text-xl font-medium text-white">Désolé, Une erreur c'est produite.</p>
      <p>
        <i  className="text-xl font-medium text-white">{error.statusText || error.message}</i>
      </p>
      <br></br>
      <button className=" inline-block bg-indigo-600 ms-auto px-6 transition ease-in hover:scale-200 py-2 border-2 border-violet-600 text-gray-100 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 " 
                                    type="button" id="button-addon3">
            <Link to="/" className="relative px-4 py-2 text-white ">
            Retourner à la page d'accueil
          </Link>
        </button>
    </div>
    </div>
  );
}