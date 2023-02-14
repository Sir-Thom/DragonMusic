
import { useRouteError  } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center gradiant justify-center h-screen">
    <div className="text-center bg-cod-gray-100 p-6 rounded" id="error-page" >
      <h1 className="text-6xl font-bold text-white ">Oops!</h1>
      <p className="text-xl font-medium text-white">Sorry, an unexpected error has occurred.</p>
      <p>
        <i  className="text-xl font-medium text-white">{error.statusText || error.message}</i>
      </p>
    </div>
    </div>
  );
}