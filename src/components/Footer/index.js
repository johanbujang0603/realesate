import React from 'react';
import { NavLink } from 'react-router-dom';

import GooglePlayStore from '../../assets/img/home-google-play-store-badge.svg';
import AppStore from '../../assets/img/home-app-store-badge.svg';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-10 mb-10">
                    <div className="col-span-2">
                        <div className="footer-logo mb-5">Homely</div>
                        <div className="flex items-center">
                            <a href="#!" className="mr-10">
                                <img src={GooglePlayStore} width="100%" alt="Google Play" />
                            </a>
                            <a href="#!" className="">
                                <img src={AppStore} width="100%" alt="AppStore" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5 className="uppercase font-semibold mb-3 px-2">Company</h5>
                        <ul>
                            <li>
                                <NavLink to='#'>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Press Releases</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>In The Media</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Brand Guidelines</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Contact Homely</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="uppercase font-semibold mb-3 px-2">Search Homely</h5>
                        <ul>
                            <li>
                                <NavLink to='#'>Buy Properties</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Rentals</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Sold Properties</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Agent Finder</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Subhurb Profiles</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Local Discussions</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Property Guides</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Lifestyle Tips</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Property News</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Connect Your Utilities</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h5 className="uppercase font-semibold mb-3 px-2">For Agents</h5>
                        <ul>
                            <li>
                                <NavLink to='#'>Advertise on Homely</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Clain Agent Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Guides & Tips for Agents</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Surviving COVID-19 Series</NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>Agent Help Centre</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto border-t">
                <div className="flex justify-between pt-5">
                    <div className="flex items-center">
                        <p className="text-sm">Copyright © 2021 Homely Group Pty Ltd. <span className="ml-2"> All rights reserved.</span></p>
                        <ul className="ml-10">
                            <li className="float-left mr-5"><NavLink to="#" className="text-base font-medium">Privacy Policy</NavLink></li>
                            <li className="float-left"><NavLink to="#" className="text-base font-medium">Terms of Use</NavLink></li>
                        </ul>
                    </div>
                    <div className="social-icons">
                        <ul>
                            <li className="float-left mx-1"><a href="#!"><FaFacebookF size={20} /></a></li>
                            <li className="float-left mx-1"><a href="#!"><FaInstagram size={20} /></a></li>
                            <li className="float-left mx-1"><a href="#!"><FaTwitter size={20} /></a></li>
                            <li className="float-left mx-1"><a href="#!"><FaLinkedinIn size={20} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
