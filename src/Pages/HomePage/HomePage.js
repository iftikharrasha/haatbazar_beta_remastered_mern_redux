import React from "react";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Header from "../../Components/Header/Header";
import CardSlider from "../../Components/CardSlider/CardSlider";

const HomePage = () => {

    return (
        <>
            <main>
                <Header/>
                <Hero/>
                <CardSlider/>
                <Footer/>
            </main>
        </>
    );
};

export default HomePage;