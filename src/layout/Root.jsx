import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar/NavBar";

const Root = () => {
    return (
        <div className="font-montserrat bg-hero-pattern bg-no-repeat h-screen bg-cover bg-center">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;