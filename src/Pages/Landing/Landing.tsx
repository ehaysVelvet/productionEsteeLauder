import React, {useState} from "react";
import {motion} from 'framer-motion';
import Header from "../../Components/Header/Header";
import Product1 from "../../Components/product1/Product";
import Banner from "../../Components/Banner/Banner";
import Banner2 from "../../Components/Banner2/Banner2";
import Footer from "../../Components/Footer/Footer";

const Landing = () => {
    return (
        <motion.div className="landing"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <Header/>
            <Banner />
            <Product1 name="1"/>
            <Banner2/>
            <Product1 name="2"/>
            <Footer/>

        </motion.div>
    );
};

export default Landing;