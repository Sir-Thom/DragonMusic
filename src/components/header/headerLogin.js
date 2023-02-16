import {Link} from 'react-router-dom';
import logo from "../../logo.svg";

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mt-10 mb-10">
            <div className="flex justify-center">
                <img 
                    alt="logo"
                   
                    className="h-20 w-20"
                    src={logo}/>
            </div>
            <h2 className="mt-6 text-center text-white  text-3xl font-extrabold ">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-white  ">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}