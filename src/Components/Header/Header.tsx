import React, {useState} from "react";
import {motion} from 'framer-motion';
import {CgSearch, FiMenu, VscClose} from "react-icons/all";


const Header = () => {
    const [menu, setMenu] = useState<boolean>(false)

    return (
        <motion.div className="header"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>


            <div className="homePhone" style={menu ? {marginLeft: '0%'} : {marginLeft: '100%'}}>
                <div className="haderContainer">
                    <div className="logoContainer">
                        <svg id='logoClinique' viewBox='0 0 1219.7 325'>
                            <path
                                d="M175.4 236.3c-3.1 8.9-10.7 15.6-26.3 17.8-25 3.5-86.9 9.4-113.2-28.1-33.4-48.1-26.3-118-.4-147 23.6-26.3 51.3-29.1 86.9-25.8 21.4 2 29.7 3 50.3 4.7V83c-16.1-16.9-39.2-19.1-66.8-16-42.3 4.9-63.7 38.3-59.3 94.9 3.6 43.2 20.9 73.1 59.3 80.2 29.4 5.8 53-2.7 71.7-25.8 1.4 6.5 0 13.7-2.2 20zm377.3 17.1s-77.9-103.8-121.4-153.2L429.5 227c0 15.4 15.2 26.3 15.2 26.3h-35.9V56.9H444l104.6 138.4s1.6-101.6 1.5-109c-.3-20-14.2-29.4-14.2-29.4h35v196.5h-18.2zm250.6 1.1c-8.9-1.3-14.2-.9-21.4-2.7 34.3-5.4 60.2-16.9 73.1-50.4 6.2-16 20.5-66 1.8-105.6-15.2-32.1-42.3-45-92.2-44.1-35.2.9-66.8 7.1-85.5 41.9-19.6 37.4-13.4 82.9-5.8 102.9 12 30.3 33 51.7 60.6 55.7 59.7 8 49.9 15.2 79.3 31.2 21.8 11.6 33.9 10.7 47.2 9.4v-10.2c-8.5-1.8-8.9 2.2-21.8-6.7-12.6-8.4-12.1-17.8-35.3-21.4zm-97.8-57.9c-9.8-35.2-8.5-60.1.5-89.5 15.6-50.3 97.6-64.2 121.2 1.3 10.2 28.1 11.6 57.5 2.7 88.2-20.2 68.2-108.8 55.3-124.4 0zm373.7-139.7h117.2V76s-11.6-7.8-31.8-7.1c-19.1.6-56.1 8.5-56.1 8.5V141s24.3.4 33.7.4c22.2.5 49.1-1.8 49.1-1.8V157s-27.3-1.8-48.6-.9c-10.6.4-34.1 1.8-34.1 1.8v76.4c12.2 1.6 28.6 3.4 40.2 4.2 18.3 1.4 35.6 1.8 46.7-6.7 6.5-4.9 7.1-5.5 14.5-12.6-3.2 12.5-4.7 20.3-10.6 30.3-2.8 4.7-10.1 3.8-18.3 3.8h-101.7l-.2-196.4zM307.3 231.8c-11.1 8.5-28.6 9.3-46.7 6.7-11.6-1.7-12.9-2.2-24.1-5.9V56.9h-29.3v196.5h85.7c8.2 0 15.5.9 18.3-3.8 5.9-10 7.4-17.8 10.6-30.3-7.4 7.1-8 7.6-14.5 12.5zm69.3-174.9h-40.5s4.5 32 5.4 61c1.8 52.9-.9 135.5-.9 135.5h31.6s-2.7-82.6-.9-135.5c.9-29 5.3-61 5.3-61zM1002.5 251c-11.1 4-51.3 7.1-71.2.4-47.8-15.5-38.1-54.9-37.6-91.6.5-35.8 2.7-52.2-4.4-86.7-1.3-6.2-2.2-9.8-4-16.3h40.4c-3 51.3-2.5 72.3-1.9 128.6.3 22.1 3.5 42 23.5 50.9 14.6 6.6 42.9 5.3 58.8-3.1 26.5-14.1 18.6-72.4 19.5-136.6.4-29.6-3.7-30.6-11.7-39.8h30.3c-1.4 46.8-.5 83 .9 135.7.8 39-16.9 49.6-42.6 58.5zM644.4 56.9h-40.5s4.5 32 5.3 61c1.8 52.9-.9 135.5-.9 135.5H640s-2.7-82.6-.9-135.5c.9-29 5.3-61 5.3-61z"/>
                        </svg>
                    </div>

                    <a onClick={() => setMenu(false)}>
                        <div className='iconContainer' style={{width: 35, height: 35, cursor: "pointer"}}>
                            <VscClose style={{fontSize: 35}}/>
                        </div>
                    </a>
                </div>

                <div className="linContainer">
                    <div className="textContainer">
                        <div className='aContainer' style={{padding: 7}}><a href="https://www.clinique.fr" style={{color: '#d1738a'}}>Fête des
                            Mères</a></div>
                        <div className='aContainer' style={{padding: 7}}><a href="https://www.clinique.fr" className='animMenuLink'>Offres</a></div>
                        <div className='aContainer' style={{padding: 7}}><a href="https://www.clinique.fr" className='animMenuLink'>Services</a></div>
                        <div className='aContainer' style={{padding: 7}}><a href="https://www.clinique.fr" className='animMenuLink'>Découvrir</a></div>
                        <div className='aContainer' style={{padding: 7}}><a href="https://www.clinique.fr" className='animMenuLink'>Best-sellers</a></div>
                        <div className='aContainer' style={{padding: 7}}><a href="https://www.clinique.fr" className='animMenuLink'>Soin</a></div>
                        <div className='aContainer' style={{padding: 7}}><a href="https://www.clinique.fr" className='animMenuLink'>Maquillage</a></div>
                        <div className='aContainer' style={{padding: 7}}><a href="https://www.clinique.fr" className='animMenuLink'>Parfum</a></div>
                        <div className='aContainer' style={{padding: 7}}><a href="https://www.clinique.fr" className='animMenuLink'>Homme</a></div>

                    </div>

                    <div className="infoContainer">
                        <div className="serviceContainer">
                            <div className='aContainer'><a href="https://www.clinique.fr">Points de Ventes</a></div>
                            <div className='aContainer'><a href="https://www.clinique.fr">Service Client</a></div>
                        </div>
                        <div className="separator"/>
                        <div className="connexionContainer">
                            <div className='aContainer'><a href="https://www.clinique.fr">S'identifier</a></div>
                            <div className='aContainer'><a href="https://www.clinique.fr">Programme de Fidélité</a></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mainContainer">
                <div className='ConnexionContainer'>
                    <div className='contentLeft'>
                        <p>{`Pour avoir un accès exclusif à nos offres : `}</p>
                        <a href="https://www.clinique.fr" className='subscribeLink'>Inscrivez-vous</a>
                    </div>
                    <div className='contentRight'>
                        <a href="https://www.clinique.fr" className='otherLink'>S'identifier</a>
                        <span>|</span>
                        <a href="https://www.clinique.fr" className='otherLink'>Programme de Fidélité</a>
                    </div>
                </div>
            </div>


            <div className="haderContainer">
                <div className="logoContainer">
                    <svg id='logoClinique' viewBox='0 0 1219.7 325'>
                        <path
                            d="M175.4 236.3c-3.1 8.9-10.7 15.6-26.3 17.8-25 3.5-86.9 9.4-113.2-28.1-33.4-48.1-26.3-118-.4-147 23.6-26.3 51.3-29.1 86.9-25.8 21.4 2 29.7 3 50.3 4.7V83c-16.1-16.9-39.2-19.1-66.8-16-42.3 4.9-63.7 38.3-59.3 94.9 3.6 43.2 20.9 73.1 59.3 80.2 29.4 5.8 53-2.7 71.7-25.8 1.4 6.5 0 13.7-2.2 20zm377.3 17.1s-77.9-103.8-121.4-153.2L429.5 227c0 15.4 15.2 26.3 15.2 26.3h-35.9V56.9H444l104.6 138.4s1.6-101.6 1.5-109c-.3-20-14.2-29.4-14.2-29.4h35v196.5h-18.2zm250.6 1.1c-8.9-1.3-14.2-.9-21.4-2.7 34.3-5.4 60.2-16.9 73.1-50.4 6.2-16 20.5-66 1.8-105.6-15.2-32.1-42.3-45-92.2-44.1-35.2.9-66.8 7.1-85.5 41.9-19.6 37.4-13.4 82.9-5.8 102.9 12 30.3 33 51.7 60.6 55.7 59.7 8 49.9 15.2 79.3 31.2 21.8 11.6 33.9 10.7 47.2 9.4v-10.2c-8.5-1.8-8.9 2.2-21.8-6.7-12.6-8.4-12.1-17.8-35.3-21.4zm-97.8-57.9c-9.8-35.2-8.5-60.1.5-89.5 15.6-50.3 97.6-64.2 121.2 1.3 10.2 28.1 11.6 57.5 2.7 88.2-20.2 68.2-108.8 55.3-124.4 0zm373.7-139.7h117.2V76s-11.6-7.8-31.8-7.1c-19.1.6-56.1 8.5-56.1 8.5V141s24.3.4 33.7.4c22.2.5 49.1-1.8 49.1-1.8V157s-27.3-1.8-48.6-.9c-10.6.4-34.1 1.8-34.1 1.8v76.4c12.2 1.6 28.6 3.4 40.2 4.2 18.3 1.4 35.6 1.8 46.7-6.7 6.5-4.9 7.1-5.5 14.5-12.6-3.2 12.5-4.7 20.3-10.6 30.3-2.8 4.7-10.1 3.8-18.3 3.8h-101.7l-.2-196.4zM307.3 231.8c-11.1 8.5-28.6 9.3-46.7 6.7-11.6-1.7-12.9-2.2-24.1-5.9V56.9h-29.3v196.5h85.7c8.2 0 15.5.9 18.3-3.8 5.9-10 7.4-17.8 10.6-30.3-7.4 7.1-8 7.6-14.5 12.5zm69.3-174.9h-40.5s4.5 32 5.4 61c1.8 52.9-.9 135.5-.9 135.5h31.6s-2.7-82.6-.9-135.5c.9-29 5.3-61 5.3-61zM1002.5 251c-11.1 4-51.3 7.1-71.2.4-47.8-15.5-38.1-54.9-37.6-91.6.5-35.8 2.7-52.2-4.4-86.7-1.3-6.2-2.2-9.8-4-16.3h40.4c-3 51.3-2.5 72.3-1.9 128.6.3 22.1 3.5 42 23.5 50.9 14.6 6.6 42.9 5.3 58.8-3.1 26.5-14.1 18.6-72.4 19.5-136.6.4-29.6-3.7-30.6-11.7-39.8h30.3c-1.4 46.8-.5 83 .9 135.7.8 39-16.9 49.6-42.6 58.5zM644.4 56.9h-40.5s4.5 32 5.3 61c1.8 52.9-.9 135.5-.9 135.5H640s-2.7-82.6-.9-135.5c.9-29 5.3-61 5.3-61z"/>
                    </svg>
                </div>
                <div className="linkContainer">
                    <div className="linkText">
                        <a href="https://www.clinique.fr" style={{color: '#d1738a'}} className='linkAnimation'>Fête des
                            Mères</a>
                        <a href="https://www.clinique.fr" className='linkAnimation'>Offres</a>
                        <a href="https://www.clinique.fr" className='linkAnimation'>Best-sellers</a>
                        <a href="https://www.clinique.fr" className='linkAnimation'>Soin</a>
                        <a href="https://www.clinique.fr" className='linkAnimation'>Maquillage</a>
                    </div>
                    <a href="https://www.clinique.fr">
                        <div className='iconContainer' style={{marginLeft: 15}}>
                            <svg id='bag' viewBox='0 0 24 24'>
                                <path
                                    d="M 9.6 2.4 c 2 0 3.6 1.6 3.6 3.6 h 2.4 c 0 -3.4 -2.6 -6 -6 -6 s -6 2.6 -6 6 H 6 c 0 -2 1.6 -3.6 3.6 -3.6 Z M 0 8.4 L 2.4 24 h 14.4 l 2.4 -15.6 H 0 Z m 14.8 13.2 H 4.4 L 2.8 10.8 h 13.6 l -1.6 10.8 Z"/>
                            </svg>
                        </div>
                    </a>
                    <a href="https://www.clinique.fr">
                        <div className='iconContainer' style={{width: 28, height: 28}}>
                            <CgSearch style={{fontSize: 28}}/>
                        </div>
                    </a>
                    <button className='menu'>
                        <div className='iconContainer' style={{width: 28, height: 28}} onClick={() => setMenu(true)}>
                            <FiMenu style={{fontSize: 28}}/>
                        </div>
                    </button>

                </div>
            </div>
        </motion.div>
    );
};

export default Header;