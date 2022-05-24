import React, {useState} from "react";
import {motion} from 'framer-motion';
import Header from "../../Components/Header/Header";

const image = require("../../Images/imgheader2.png");

const Banner = () => {
    return (
        <motion.div className="banner"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className="imageContainer">
                <img src={image} alt='img'/>
                <div className="textContainer">
                    <h1>Merci, Maman.</h1>
                    <p>Elle prend soin de vous depuis toujours. À votre tour de prendre soin d’elle. Découvrez nos idées
                        cadeaux pour la chouchouter.</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Banner;