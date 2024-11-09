import { Outlet } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;