import React, {useState} from "react";
import {motion} from 'framer-motion';
import Header from "../../Components/Header/Header";
import Product1 from "../../Components/product1/Product";
import Banner from "../../Components/Banner/Banner";
import Banner2 from "../../Components/Banner2/Banner2";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <motion.div className="intro"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <Link to={"/landingPage"}>
                LandingPage Clinique
            </Link>
            <Link to={"/refresh"}>
                RefreshContent MAC
            </Link>
            <a href="EmailEl.html">Email Estee Lauder</a>
            <a href="JoeMalone.html">Email Joe Malone</a>
            <a href="LaMer.html">Email La Mer</a>
        </motion.div>
    );
};

export default Intro;