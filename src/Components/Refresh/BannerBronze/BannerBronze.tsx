import React, {useState} from "react";
import {motion} from 'framer-motion';
import {VscArrowRight} from "react-icons/all";

const BannerBronze = () => {
    return (
        <motion.div className="bannerBronze"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className="mainContainer">
                <div className="container1">
                    <div>
                        <h2>Nouveau</h2>
                        <h1>Bronze Collection</h1>
                    </div>
                    <p>M-A-C vous a préparé une collection sur mesure pour un été ensoléillé! Créez-vous une routine
                        pour
                        les
                        beaux jours et donnez de l´éclat à votre peau avec des essentiels teint, lèvres et soins.</p>
                    <div>
                        <a href='https://www.maccosmetics.fr/products/33031/produits/collections/bronzing '>
                            <div className="linkContainer">
                                <h1>Découvrir la Collection</h1>
                                <VscArrowRight className='arrow'/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="container2">
                    <div className="containerImage">
                        <img src={require('../../../Images/BRONZINGBANNER.jpeg')} alt="img"/>
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default BannerBronze;