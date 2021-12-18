import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import CardSlider from "../../Components/CardSlider/CardSlider";
import Album from "../../Components/Album/Album";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {

    return (
        <>
            <main>
                <Header/>
                <Hero/>
                <CardSlider/>
                <Album/>
                <Footer/>
            </main>
        </>
    );
};

export default HomePage;