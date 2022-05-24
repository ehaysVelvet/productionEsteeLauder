import React, {useState} from "react";
import {motion} from 'framer-motion';
import Header from "../../Components/Header/Header";
import BannerBronze from "../../Components/Refresh/BannerBronze/BannerBronze";
import RefreshProduct from "../../Components/RefreshProduct1/RefreshProduct";


const Refresh = () => {
    return (
        <motion.div className="refresh"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className="main header">
                <h3>header</h3>
            </div>


            <BannerBronze />


            <div className="main pochette">
                <h3>GWP POCHETTE</h3>
            </div>

            <RefreshProduct/>


            <div className="main carrousel ">
                <h3>carrousel produit</h3>
            </div>


            <div className="main macstack ">
                <h3>Look macstack</h3>
            </div>


            <div className="main2 ">
                <div className="main22">
                    <h3>Parrainage</h3>
                </div>
                <div className="main22">
                    <h3>Bambuser</h3>
                </div>
                <div className="main22">
                    <h3>leçon de maquillage</h3>
                </div>
                <div className="main22">
                    <h3>whatsapp</h3>
                </div>
            </div>


            <div className="main header" style={{height: 150}}>
                <h3>Footer</h3>
            </div>

        </motion.div>
    );
};

export default Refresh;