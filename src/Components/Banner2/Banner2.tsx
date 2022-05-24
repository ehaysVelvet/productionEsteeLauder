import React, {useState} from "react";
import {motion} from 'framer-motion';
import Header from "../../Components/Header/Header";
import Product1 from "../../Components/product1/Product";
import Banner from "../../Components/Banner/Banner";

const Banner2 = () => {
    return (
        <motion.div className="banner2"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className="allimageContainer">
                <div className="image1">
                    <img src={require('../../Images/test-creme.png')} alt="img"/>
                </div>
                <div className="image2">
                    <img src={require('../../Images/image 3.png')} alt="img"/>
                </div>
                <div className="image3">
                    <img src={require('../../Images/image 4.png')} alt="img"/>
                </div>
            </div>
            <div className="secondContainer">
                <div className="textContainer">
                    <h1>La meilleure idée cadeaux.</h1>
                    <p>All About Eyes Rich™ Baume Total Regard,
                        une Crème riche pour le contour des yeux, diminue l'apparence des cernes, des poches et des
                        ridules sous les yeux.</p>
                    <div><button>je découvre</button></div>
                </div>
            </div>

        </motion.div>
    );
};

export default Banner2;