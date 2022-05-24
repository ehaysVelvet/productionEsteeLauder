import React, {useState} from "react";
import {motion} from 'framer-motion';
import i1 from "./../../pictures/Rectangle1.png"
import i2 from './../../pictures/Rectangle3.png';
import i22 from './../../pictures/Rectangle22.png';
import i4 from './../../pictures/Rectangle4.png';

import B1 from "./../../pictures/B1.png"
import B2 from './../../pictures/B2.png';
import B3 from './../../pictures/B3.png';
import B4 from './../../pictures/B4.png';

const Product = (props: any) => {
    console.log(props.name)
    let option = <p>Loading</p>
    if (props.name == "1") {
        option = <div className='archi'>
            <div className='title'>
                <h2>Une large gamme de soin pour la remercier.</h2>
            </div>
            <div className='flex-container'>
                <div className="item">
                    <div>
                        <img className="fit-picture" src={i1}>
                        </img>
                    </div>
                    <div className='info'>
                        <p>Clinique Smart Clinical Repair™ Sérum Correcteur Anti-Rides</p>
                        <p className='Price'>75.00€ - 165.00€</p>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <img className="fit-picture" src={i22}>
                        </img>
                    </div>
                    <div className='info'>
                        <p className='data'>Le serum anti-âge le plus intelligent, parfait pour elle.</p>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <img className="fit-picture" src={i2}>
                        </img>
                    </div>
                    <div className='info'>
                        <p>Moisture Surge Eye™ Concentré Yeux Hydro-réimprégent 96h</p>
                        <p className='Price'>37.50€</p>
                    </div>
                </div>
                <div className="item">
                    <img className="fit-picture" src={i4}>
                    </img>
                    <div className='info'>
                        <p>Gélee Hydro-assainissante Tellement Différente</p>
                        <p className='Price'>29.00€</p>
                    </div>
                </div>
            </div>
            <div className='buttomAContainer'>
                <a href="https://www.clinique.fr" className='buttonA'>Découvrir les best-sellers</a>
            </div>
        </div>

    }
    if (props.name == "2") {
        option = <div className='archi'>
            <div className='title'>
                <h2>Nos best-sellers Clinique à lui offir</h2>
            </div>
            <div className='flex-container'>
                <div className="item">
                    <div>
                        <img className="fit-picture" src={B1}>
                        </img>
                    </div>
                    <div className='info'>
                        <p className='data'>Le cadeau qui fait toujours plaisir.</p>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <img className="fit-picture" src={B4}>
                        </img>
                    </div>
                    <div className='info'>
                        <p>Moisture Surge™ Soin auto-réhydratant 100H</p>
                        <p className='Price'>10.90€ - 68.00€</p>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <img className="fit-picture" src={B2}>
                        </img>
                    </div>
                    <div className='info'>
                        <p>BB-Gel teinté universel</p>
                        <p className='Price'>29.00€</p>
                    </div>
                </div>
                <div className="item">
                    <img className="fit-picture" src={B3}>
                    </img>
                    <div className='info'>
                        <p>Un savon Visage Liquide</p>
                        <p className='Price'>25.00€ - 40.00€</p>
                    </div>
                </div>
            </div>
            <div className='buttomAContainer'>
                <a href="https://www.clinique.fr" className='buttonA'>Découvrir les best-sellers</a>
            </div>
        </div>

    }


    return (
        <motion.div className="product"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            {/* <div className='ConnexionContainer'>
                <div className='contentLeft'>
                    <p>{`Pour avoir un accès exclusif à nos offres : `}</p>
                    <a href="https://www.clinique.fr">Inscrivez-vous</a>
                </div>
                <div className='ContentRightContainer'>
                    <a href="https://www.clinique.fr">S'identifier</a>
                    <span>|</span>
                    <a href="https://www.clinique.fr">Programme de Fidélité</a>
                </div>
            </div> */}
            {option}
        </motion.div>
    );
};

export default Product;