import React, {useState} from "react";
import {motion} from 'framer-motion';

const Footer = () => {

    return (
        <motion.div className="footer"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>

            <div className="container">
                <div className="item1Color">
                    <div className="item1">
                        <p className="NL">NewsLetter</p>
                        <div className="item11">
                            <div className="News">
                                <p className="data">Abonnez-vous a la newsletter Clinique pour ne rien manquer !</p>
                            </div>
                            <div className="Info">
                                <div className="mail">
                                    <input type="text" placeholder="Adresse e-mail"></input>
                                </div>
                                <div className="register">
                                    <button> S'INSCRIRE</button>

                                </div>
                                <div className="consentement">
                                    <input type="checkbox"/>
                                    <p>Je souhaite m'abonner à la newsletter Clinique pour recevoir en avant-première
                                        les nouveautés, exclusivités et offres spéciales
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="item2">
                    <div className="flex-itemp">
                        <div className="Title">EXPÉRIENCE EN LIGNE</div>
                        <div className="desc">
                            <div className="acontainer"><a href="https://www.clinique.fr">Points de Vente</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Programme de Fidélité</a>
                            </div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Offres Spéciales</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Blog</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Consultation en ligne</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-itemp">
                        <div className="Title">À PROPOS</div>
                        <div className="desc">
                            <div className="acontainer"><a href="https://www.clinique.fr">Service Client</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Charte sur la Vie Privée</a>
                            </div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Publicité Ciblée</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Conditions Générales de
                                Vente</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Recrutement</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Changer de Pays</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Gérer les Cookies</a></div>

                        </div>

                    </div>
                    <div className="flex-itemp">
                        <div className="Title">BESOIN D'AIDE?</div>
                        <div className="desc">
                            <div className="acontainer"><a href="https://www.clinique.fr">Contactez-nous en cliquant
                                ici</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Appelez-nous +33182883343</a>
                            </div>
                            <div className="acontainer"><a href="https://www.clinique.fr">WhatsApp +33182883343</a>
                            </div>
                        </div>

                    </div>
                    <div className="flex-itemp">
                        <div className="Title">SOCIAL</div>
                        <div className="desc">
                            <div className="acontainer"><a href="https://www.clinique.fr">Facebook</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Instagram</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Twitter</a></div>
                            <div className="acontainer"><a href="https://www.clinique.fr">Pinterest</a></div>
                        </div>

                    </div>

                </div>
                <div className="desc">
                    <div className="item3">
                        <div className="test">
                            <p>© Clinique Laboratories, llc. Tous Droits Mondiaux Réservés.</p>

                        </div>
                        <div className="select">
                            <select className="custom">
                                <option value="http://www.fr.clinique.com">France</option>
                                <option value="http://www.clinique.com.ar/"> Argentina</option>
                                <option value="http://www.clinique.com.au">Australia</option>
                                <option value="http://www.clinique.at">Austria</option>
                                <option value="http://www.clinique.be/">Belgium</option>
                                <option value="http://www.clinique.com.br">Brazil</option>
                                <option value="https://www.clinique.ca">Canada</option>
                                <option value="http://www.clinique.cl/">Chile</option>
                                <option value="http://www.clinique.com.cn">China Mainland</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;