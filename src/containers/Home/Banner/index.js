import React from 'react';

import homeHeroDesktop from '../../../assets/img/home-hero-desktop-3@2x.webp';

const Homepage = () => {
    return (
        <section className="banner-wrapper">
            <div className="hero-image">
                <img src={homeHeroDesktop} width="100%" alt="Home Hero" />
            </div>
            <div className="container mx-auto">
                <div>
                    <h1 className="text-primary text-5xl font-semibold mb-2">Australian real estate search, </h1>
                    <h1 className="text-5xl font-semibold">suburb reviews and local Q&A</h1>
                    <p className="text-xl mt-7">
                        Find hundreds of thousands of properties for sale and rent.
                        <span className="font-semibold text-primary ml-2">New homes listed daily.</span>
                    </p>
                </div>
                <div role="search" className="search-box mt-16">
                    <div className="search-filters">
                        <button type="button" className="">Buy</button>
                        <button type="button" className="">Rent</button>
                        <button type="button" className="">Sold</button>
                        <button type="button" className="">Agents</button>
                        <button type="button" className="">Reviews</button>
                        <button type="button" className="">Questions</button>
                    </div>
                    <div className="search-input">
                        <div>
                            <input type="text" placeholder="Subhurb or postcode" />
                        </div>
                        <button className="rounded-full bg-primary text-white font-semibold text-lg py-3 px-8">Search</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Homepage;
