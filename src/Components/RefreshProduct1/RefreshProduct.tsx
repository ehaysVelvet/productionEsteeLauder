import React, {useState} from "react";
import {motion} from 'framer-motion';
import T1 from "./../../pictures/T1.jpg"
import T2 from './../../pictures/T2.png';


const RefreshProduct = () => {

    return (
        <motion.div className="refreshproduct"
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

            <div className='archi'>
                        <div className="title">
                            <h2>LES NOUVEAUTÉS M·A·C
                            </h2>
                        </div>
                        <div className='flex-container'>
                            <div className="item">
                                <div className="test">
                                 <img className="fit-picture" src={T1}>
                                    </img>
                                </div>
                                <div className="info">
                                    <div className="titre"><p>MASCARA M∙A∙CSTACK</p></div>
                                    <div className="data"><p>Superposez-le à l'infini pour un volume intense et une longueur extrême.</p></div>
                                    <div><p className="action"><a href="https://www.maccosmetics.fr/products/32779/produits/collections/macstack-mascara ">Acheter</a></p></div>
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                 <img className="fit-picture" src={T2}>
                                    </img>
                                </div>
                                <div className="info">
                                    <div className="titre"><p>MASCARA M-CSTACK</p></div>
                                    <div className="data"><p>Découvrez notre tout nouveau primer révélateur d’éclat !</p></div>
                                    <div><p className="action"><a href="https://www.maccosmetics/product/13830/102515/produits/maquillage/teint/primer-studio-radiance-hydratant-illuminateur">Acheter</a></p></div>
                                </div>
                            </div>
                        </div>
                    </div>
        </motion.div>
    );
};

export default RefreshProduct;