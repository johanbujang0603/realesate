import React from 'react';
import { NavLink } from 'reactstrap';

// Import third party packages
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import components
import Banner from '../../containers/Home/Banner';

// Import images
import SaleSignImg from '../../assets/img/homely-property-for-sale-sign.svg';
import RentSignImg from '../../assets/img/homely-property-for-rent-sign.svg';
import PropertySignImg from '../../assets/img/homely-sold-property-sign.svg';
import GooglePlayStore from '../../assets/img/home-google-play-store-badge.svg';
import AppStore from '../../assets/img/home-app-store-badge.svg';

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow arrow-next" onClick={onClick}>
            <AiOutlineArrowRight size={24} />
        </div>
    )
}

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow arrow-prev" onClick={onClick}>
            <AiOutlineArrowLeft size={24} />
        </div>
    )
}

const Homepage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    }
    return (
        <>
            <Banner />

            <section className="my-32">
                <div className="container">
                    <div className="rounded-3xl bg-primary py-10 text-center">
                        <h3 className="text-white font-semibold text-2xl mb-5">Be in to win a share of $5,000!</h3>
                        <p className="text-white font-normal text-xl mb-7">Love where you live? Review your suburb and be in to win a share of $5,000.</p>
                        <button className="text-white text-xl focus:outline-none hover:bg-primary-500 font-semibold py-2 px-7 border border-white rounded-3xl">Enter Now</button>
                    </div>
                </div>
            </section>

            <section className="my-32 has-section-starter">
                <div className="container">
                    <h2 className="text-4xl font-bold">New properties <br />on Homely</h2>

                    <div className="grid grid-cols-4 gap-20">
                        <div>
                            <article>
                                <NavLink to="#">

                                </NavLink>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            

            <section className="my-32 has-section-starter">
                <div className="container">
                    <h2 className="text-4xl font-bold mb-24">Homely helps you make <br />better property decisions</h2>

                    <div className="grid grid-cols-3 gap-20">
                        <div>
                            <img src={SaleSignImg} className="mb-12" alt="Sale Sign" />
                            <h5 className="text-3xl font-bold mb-7">Find homes for sale</h5>
                            <p className="text-lg mb-8">With new homes added daily and 45+ search filters, Homely makes finding your next home to purchase simpler.</p>
                            <a className="text-lg text-primary font-semibold" href="#!">View properties for sale</a>
                        </div>
                        
                        <div>
                            <img src={RentSignImg} className="mb-12" alt="Rent Sign" />
                            <h5 className="text-3xl font-bold mb-7">Find homes for sale</h5>
                            <p className="text-lg mb-8">With new homes added daily and 45+ search filters, Homely makes finding your next home to purchase simpler.</p>
                            <a className="text-lg text-primary font-semibold" href="#!">View properties for sale</a>
                        </div>
                        
                        <div>
                            <img src={PropertySignImg} className="mb-12" alt="Property Sign" />
                            <h5 className="text-3xl font-bold mb-7">Find homes for sale</h5>
                            <p className="text-lg mb-8">With new homes added daily and 45+ search filters, Homely makes finding your next home to purchase simpler.</p>
                            <a className="text-lg text-primary font-semibold" href="#!">View properties for sale</a>
                        </div>
                    </div>
                </div>

                <div className="flex items-center overflow-x-auto mt-24">
                    <img src="./assets/img/demo/homely-city-apartment-listing-living-room-grey-furniture.jpg" alt="Demo 1" />
                    <img src="./assets/img/demo/homely-double-story-unit-listing-living-room-cream-and-red-furniture.jpg" alt="Demo 2" />
                    <img src="./assets/img/demo/homely-glass-house-listing-backyard-setting-doors-open.jpg" alt="Demo 3" />
                    <img src="./assets/img/demo/homely-city-apartment-listing-living-room-grey-furniture.jpg" alt="Demo 4" />
                </div>
            </section>
            

            <section className="my-32 has-section-starter">
                <div className="container">
                    <h2 className="flex items-end text-4xl font-bold mb-10">Discover and learn <br />about neighbourhoods <span className="ml-2 rounded-lg text-white text-sm font-medium py-1 px-2 bg-gradient-primary">Only on Homely</span></h2>
                    <p className="text-lg w-2/3 mb-10">Homely has Australia’s largest collection of street and suburb reviews, empowering you to find the right area for you to move to. With tens of thousands of local community topics and discussions, find the answers to all your questions about an area, or ask the locals.</p>
                    <a className="flex items-center text-primary font-semibold mb-10" href="#!">Find neighbourhood profiles <IoIosArrowForward size={20} className="ml-5" /></a>
                    <a className="flex items-center text-primary font-semibold" href="#!">View local discussions and forums <IoIosArrowForward size={20} className="ml-5" /></a>
                </div>

                <div className="flex items-center overflow-x-auto mt-24">
                    <img src="./assets/img/demo/homely-city-apartment-listing-living-room-grey-furniture.jpg" alt="Demo 1" />
                    <img src="./assets/img/demo/homely-double-story-unit-listing-living-room-cream-and-red-furniture.jpg" alt="Demo 2" />
                    <img src="./assets/img/demo/homely-glass-house-listing-backyard-setting-doors-open.jpg" alt="Demo 3" />
                    <img src="./assets/img/demo/homely-city-apartment-listing-living-room-grey-furniture.jpg" alt="Demo 4" />
                </div>
            </section>
            

            <section className="my-32 has-section-starter">
                <div className="container">
                    <h2 className="text-4xl font-bold mb-10">Find real estate agents in <br /> your area</h2>
                    <Slider {...settings} className="mb-12 -mx-3">
                        <div className="py-3">
                            <article className="rounded-2xl shadow mx-3 w-64">
                                <a href="#!">
                                    <div className="flex border-b relative logo-raywhite rounded-t-2xl p-4 h-14">
                                        <span className="">
                                            <img  src="./assets/img/users/user-475943.jpg" width="76" height="76" className="rounded-full" alt="User Avatar" />
                                        </span>
                                        <div className="flex-1">
                                            <img src="./assets/img/franchiselogo-9004.jpg.png" alt="LJ Hooker Joondalup" />
                                        </div>
                                    </div>
                                    <div className="px-4 mt-12">
                                        <h5 className="font-semibold text-lg">James Lewis</h5>
                                        <p className="text-sm">Ray White Carina</p>

                                    </div>
                                </a>
                                <div className="mt-10 px-4 pb-5">
                                    <button className="rounded-full border w-full py-2.5 text-center font-semibold border-current">Contact Agent</button>
                                </div>
                            </article>
                        </div>
                        
                        <div className="py-3">
                            <article className="rounded-2xl shadow mx-3 w-64">
                                <a href="#!">
                                    <div className="flex border-b relative logo-raywhite rounded-t-2xl p-4 h-14">
                                        <span className="">
                                            <img  src="./assets/img/users/user-462888.jpg" width="76" height="76" className="rounded-full" alt="User Avatar" />
                                        </span>
                                        <div className="flex-1">
                                            <img src="./assets/img/franchiselogo-9004.jpg.png" alt="LJ Hooker Joondalup" />
                                        </div>
                                    </div>
                                    <div className="px-4 mt-12">
                                        <h5 className="font-semibold text-lg">James Lewis</h5>
                                        <p className="text-sm">Ray White Carina</p>

                                    </div>
                                </a>
                                <div className="mt-10 px-4 pb-5">
                                    <button className="rounded-full border w-full py-2.5 text-center font-semibold border-current">Contact Agent</button>
                                </div>
                            </article>
                        </div>
                        
                        <div className="py-3">
                            <article className="rounded-2xl shadow mx-3 w-64">
                                <a href="#!">
                                    <div className="flex border-b relative logo-ljhooker rounded-t-2xl p-4 h-14">
                                        <span className="">
                                            <img  src="./assets/img/users/user-96019.jpg" width="76" height="76" className="rounded-full" alt="User Avatar" />
                                        </span>
                                        <div className="flex-1">
                                            <img src="./assets/img/franchiselogo-15064.jpg.png" alt="LJ Hooker Joondalup" />
                                        </div>
                                    </div>
                                    <div className="px-4 mt-12">
                                        <h5 className="font-semibold text-lg">James Lewis</h5>
                                        <p className="text-sm">Ray White Carina</p>

                                    </div>
                                </a>
                                <div className="mt-10 px-4 pb-5">
                                    <button className="rounded-full border w-full py-2.5 text-center font-semibold border-current">Contact Agent</button>
                                </div>
                            </article>
                        </div>
                        
                        <div className="py-3">
                            <article className="rounded-2xl shadow mx-3 w-64">
                                <a href="#!">
                                    <div className="flex border-b relative logo-raywhite rounded-t-2xl p-4 h-14">
                                        <span className="">
                                            <img  src="./assets/img/users/user-475943.jpg" width="76" height="76" className="rounded-full" alt="User Avatar" />
                                        </span>
                                        <div className="flex-1">
                                            <img src="./assets/img/franchiselogo-9004.jpg.png" alt="LJ Hooker Joondalup" />
                                        </div>
                                    </div>
                                    <div className="px-4 mt-12">
                                        <h5 className="font-semibold text-lg">James Lewis</h5>
                                        <p className="text-sm">Ray White Carina</p>

                                    </div>
                                </a>
                                <div className="mt-10 px-4 pb-5">
                                    <button className="rounded-full border w-full py-2.5 text-center font-semibold border-current">Contact Agent</button>
                                </div>
                            </article>
                        </div>
                        
                        <div className="py-3">
                            <article className="rounded-2xl shadow mx-3 w-64">
                                <a href="#!">
                                    <div className="flex border-b relative logo-raywhite rounded-t-2xl p-4 h-14">
                                        <span className="">
                                            <img  src="./assets/img/users/user-475943.jpg" width="76" height="76" className="rounded-full" alt="User Avatar" />
                                        </span>
                                        <div className="flex-1">
                                            <img src="./assets/img/franchiselogo-9004.jpg.png" alt="LJ Hooker Joondalup" />
                                        </div>
                                    </div>
                                    <div className="px-4 mt-12">
                                        <h5 className="font-semibold text-lg">James Lewis</h5>
                                        <p className="text-sm">Ray White Carina</p>

                                    </div>
                                </a>
                                <div className="mt-10 px-4 pb-5">
                                    <button className="rounded-full border w-full py-2.5 text-center font-semibold border-current">Contact Agent</button>
                                </div>
                            </article>
                        </div>
                    </Slider>
                    <a className="flex items-center text-primary font-semibold mb-10" href="#!">Find real estate agents in all subhurbs <IoIosArrowForward size={20} className="ml-5" /></a>
                </div>
            </section>
            

            <section className="my-32 has-section-starter">
                <div className="container">
                    <h2 className="text-4xl font-bold mb-10">Featured property guides <br /> and lifestyle tips</h2>
                    <div className="grid grid-cols-3 gap-20">
                        <div>
                            <a href="#!">
                                <img src="./assets/img/demo/homely-city-apartment-listing-living-room-grey-furniture.jpg" className="rounded-2xl mb-5" alt="Demo1 "/>
                            </a>
                            <a className="font-medium text-primary" href="#!">Australian property news and market trends</a>
                            <p className="text-base font-medium mt-3">Is 2022 the year of the seachange? Here are 6 tips for property seekers on the move.</p>
                        </div>
                        
                        <div>
                            <a href="#!">
                                <img src="./assets/img/demo/homely-double-story-unit-listing-living-room-cream-and-red-furniture.jpg" className="rounded-2xl mb-5" alt="Demo1 "/>
                            </a>
                            <a className="font-medium text-primary" href="#!">HOME LOANS</a>
                            <p className="text-base font-medium mt-3">Should You Refinance Your Home Loan?</p>
                        </div>
                        
                        <div>
                            <a href="#!">
                                <img src="./assets/img/demo/homely-city-apartment-listing-living-room-grey-furniture.jpg" className="rounded-2xl mb-5" alt="Demo1 "/>
                            </a>
                            <a className="font-medium text-primary" href="#!">OUTDOOR LIVING</a>
                            <p className="text-base font-medium mt-3">5 ways to do up your backyard or deck</p>
                        </div>
                    </div>
                </div>
            </section>
            

            <section className="my-32 phone-app-wrapper">
                <div className="container mx-auto">
                    <div className="">
                        <h3 className="text-3xl font-semibold text-white mb-8">Ready to get started?</h3>
                        <p className="text-xl text-white mb-8 w-2/3">Download the Homely app to find homes to buy or rent, save and share your favourite properties and get real-time alerts.</p>
                        <div className="flex items-center">
                            <img src={GooglePlayStore} className="mr-5" alt="Google Play" />
                            <img src={AppStore} alt="AppStore" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-32 mb-8 py-10 bg-gray-100">
                <div className="container">
                    <div className="grid grid-cols-5 gap-5">
                        <div>
                            <h3 className="text-base font-bold pb-5 border-b mb-5">Real estate for sale</h3>
                            <ul>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Berwick real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Craigieburn real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Doreen real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Edithvale real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Essedon real esate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">More</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base font-bold pb-5 border-b mb-5">Real estate for rent</h3>
                            <ul>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Berwick real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Craigieburn real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Doreen real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Edithvale real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Essedon real esate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">More</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base font-bold pb-5 border-b mb-5">Top rated subhurbs</h3>
                            <ul>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Berwick real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Craigieburn real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Doreen real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Edithvale real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Essedon real esate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">More</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base font-bold pb-5 border-b mb-5">Subhurbs with questions</h3>
                            <ul>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Berwick real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Craigieburn real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Doreen real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Edithvale real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Essedon real esate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">More</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base font-bold pb-5 border-b mb-5">Real estate agents</h3>
                            <ul>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Berwick real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Craigieburn real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Doreen real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Edithvale real estate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">Essedon real esate</a></li>
                                <li className="mb-5"><a href="#!" className="hover:text-primary">More</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Homepage;
