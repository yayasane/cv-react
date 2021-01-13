import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            {/*Mes infos*/}
            <div className="id">
                <div className="idContent">
                    <img src="./media/billGates.png" alt="profil-pic" width={150} height={150} />
                    <h3>Yaya SANE</h3>
                </div>
            </div>

            {/**Menu de navigation */}
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home">
                            </i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain">
                            </i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images">
                            </i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book">
                            </i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/**Menu Réseaux sociaux */}

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="http://httpsgoogle.com" target="blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="http://httpsgoogle.com" target="blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="http://httpsgoogle.com" target="blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="http://httpsgoogle.com" target="blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>yayaveli - 2020</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;