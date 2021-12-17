import React from "react";
import Footer from "../../Components/Footer/Footer";
import Outlet from "../../Components/Outlet/Outlet";
import Header from "../../Components/Header/Header";

const OutletPage = () => {

    return (
        <>
            <main>
                <Header/>
                <Outlet/>
                <Footer/>
            </main>
        </>
    );
};

export default OutletPage;