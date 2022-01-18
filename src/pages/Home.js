import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import GoToTheTopButton from "../components/GoToTheTopButton";

const Home = () => {
    useEffect(() => {
        document.title = "Trafico | Homepage";
    }, []);
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
            <GoToTheTopButton showBelow={400} />
        </div>
    );
};

export default Home;
