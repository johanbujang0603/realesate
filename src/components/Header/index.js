import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import { GrClose } from 'react-icons/gr';

const Header = () => {
    const [showSigninModal, updateShowSigninModal] = useState(false);

    const openSigninModal = (e) => {
        e.preventDefault();
        updateShowSigninModal(true);
    }

    const closeModal = (e) => {
        e.preventDefault();
        updateShowSigninModal(false);
    }

    return (
        <>
            <header>
                <div className="site-logo">
                    <span>Homely</span>
                </div>
                <nav className="site-menus">
                    <ul>
                        <li><NavLink to="#">Buy</NavLink></li>
                        <li><NavLink to="#">Rent</NavLink></li>
                        <li><NavLink to="#">Sold</NavLink></li>
                        <li><NavLink to="#">Agent Finder</NavLink></li>
                        <li><NavLink to="#">Suburb Reviews</NavLink></li>
                        <li><NavLink to="#">Questions</NavLink></li>
                        <li><NavLink to="#">Blog</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to="#">Collections</NavLink></li>
                        <li><NavLink to="#">Alerts</NavLink></li>
                        <li><NavLink to="#" onClick={openSigninModal}>Sign In</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Modal visible={showSigninModal} width="400" onClickAway={closeModal}>
                <div className="">
                    <div className="p-3 border-b relative text-center">
                        <span className="font-bold text-lg">Sign in</span>
                        <button className="absolute left-3 top-1/2 transform -translate-y-2/4" onClick={closeModal}><GrClose size={16} /></button>
                    </div>
                    <div className="p-3">
                        <p className="mb-5 text-center">Instant sign in using your email</p>
                        <form className="border-b pb-5">
                            <div className="form-group mb-3">
                                <input type="text" className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2 focus:ouline-none" placeholder="Email or Username" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2 focus:ouline-none" placeholder="Password" />
                            </div>
                            <div><button className="w-full rounded-full text-white bg-primary py-2.5 text-center">Sign in</button></div>
                            <p className="text-right font-medium mt-5">
                                <a href="#!" className="text-primary">Forgot Password?</a>
                            </p>
                        </form>
                        <div className="px-3 py-5 text-center">
                            <p>Not yet a member? <a href="#!" className="text-primary font-medium">Register with Homely</a></p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default Header;
