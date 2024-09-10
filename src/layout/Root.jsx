import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar/NavBar";

const Root = () => {
    return (
        <div className="font-montserrat ">
           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;