import React, { useState, useEffect } from "react";
import "./Header.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

export const Header = () => {

    const [headerToggle, setHeaderToggle] = useState(false);
    const [isFixedHeader, setIsFixedHeader] = useState(false);

    const headerScroll = () => {
        if (window.scrollY > 0) {
            setIsFixedHeader(true);
        }
        else {
            setIsFixedHeader(false);
        }
    }

    useEffect(() => {
        AOS.init();
        window.addEventListener("scroll", headerScroll);
        return () => {
            window.removeEventListener("scroll", headerScroll);
        };
    }, [])

    const mobileNavToggle = () => {
        setHeaderToggle(!headerToggle);
    }

    const closeMobileNavToggle = () => {
        setHeaderToggle(false);
    }

    const fixedPageHeader = isFixedHeader ? "fixed-header" : "lg-header-card";

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Header  */}
                <div className={`card ${fixedPageHeader} d-none d-lg-block`}>
                    <div className="header-card">

                        <div className="header-img-section">
                            <img src="./focusbytes-logo.png" alt="Focusbytes-Logo" className="header-img"></img>
                        </div>

                        <div className="header-nav-secion text-end">
                            <Link to='./home' className="header-nav px-3">Home</Link>
                            <Link to='/about' className="header-nav px-3">About</Link>
                            <Link to='/service' className="header-nav px-3">Services</Link>
                            <Link to="/contact" className="header-nav px-3">Contact</Link>
                        </div>

                        <div className="header-button-section px-5">
                            <button className="btn btn-primary header-btn"><Link to='/contact' className="header-support-btn-link">Get Support</Link></button>
                        </div>

                    </div>
                </div>

                {/* Mobile Header  */}
                <div className="card sm-header-card d-block d-lg-none">
                    <div className="mobile-header">
                        <div className="text-start">
                            <img src="./focusbytes-logo.png" alt="Focusbytes-Logo" className="header-img"></img>
                        </div>
                        <div className="text-start">
                            <i class="icofont-navigation-menu header-bar px-4" onClick={mobileNavToggle}></i>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav Toggle bar  */}

                {headerToggle && <div data-aos="fade-left" className="card mobile-toggle d-block d-lg-none">
                    <div className="mobile-toggle-header-section">
                        <div className="text-start">
                            <img src="./focusbytes-logo.png" alt="Focusbytes-Logo" className="sm-toggle-header-img"></img>
                        </div>
                        <div className="sm-close-btn-block text-center">
                            <i class="icofont-close-line mobile-toggle-close-btn" onClick={closeMobileNavToggle}></i>
                        </div>
                    </div>
                    <div className="text-start px-3">
                        <Link to='/home' className="mobile-nav-link" onClick={closeMobileNavToggle}>Home</Link> <br></br>
                        <hr className="mt-0"></hr>
                        <Link to='/about' className="mobile-nav-link" onClick={closeMobileNavToggle}>About</Link> <br></br>
                        <hr className="mt-0"></hr>
                        <Link to="/service" className="mobile-nav-link" onClick={closeMobileNavToggle}>Service</Link> <br></br>
                        <hr className="mt-0"></hr>
                        <Link to="/service-details" className="mobile-nav-link" onClick={closeMobileNavToggle}>Service Details</Link> <br></br>
                        <hr className="mt-0"></hr>
                        <Link to='/contact' className="mobile-nav-link" onClick={closeMobileNavToggle}>Contact</Link>
                        <hr className="mt-0"></hr>
                    </div>
                </div>}

            </div>
        </div>
    )
}