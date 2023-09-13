import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export const Contact = () => {

    const [scrolled, setScrolled] = useState(false);

    const isScrolled = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        goToTop();
        window.addEventListener("scroll", isScrolled);
        return () => {
            window.removeEventListener("scroll", isScrolled);
        }
    },[]);

    const goToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    const showScrollToTop = scrolled ? "scroll-top-block" : "d-none";


    return (
            <div className="container-fluid">
                {/* section-1 */}
                <section class="pageheading-sec">
                    <div class="breadcrumb-overlay">
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="page-heading">
                                    <h1>Contact Us</h1>
                                </div>
                                <div class="breadcrumb-list">
                                    <ul>
                                        <li><Link to='/home'>Home</Link></li>
                                        <li><a class="ms-3" href="/about">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-2 */}

                <div className={showScrollToTop} onClick={goToTop}>
                    <i class="icofont-long-arrow-up"></i>
                </div>

                <section>
                    <div className="row">
                        <div className="col-10 contact-map-block mx-auto mt-5">
                            <div style={{ width: "100%" }}>
                                <iframe width="100%" height="600" frameborder="0" title="google-map" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=WorkFlo,Greeta%20Tech%20Park,Phase%201,%20No.99-OMR,Industrial%20Estate,%20Perungudi,%20Chennai-600096+(Focusbytes)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section-3 */}

                <section>
                    <div className="row mt-5 px-5">

                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 pt-3">
                            <div class="contact-info-inner">
                                <div class="contact-info-icon">
                                    <i class="icofont-google-map"></i>
                                </div>
                                <div class="contact-info-text">
                                    <h2>office address</h2>
                                    <span>De Fontaine Harncou </span>
                                    <span>Unverzagt 6 6594</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 pt-3">
                            <div class="contact-info-inner">
                                <div class="contact-info-icon">
                                    <i class="icofont-telephone"></i>
                                </div>
                                <div class="contact-info-text">
                                    <h2>office address</h2>
                                    <span>De Fontaine Harncou </span>
                                    <span>Unverzagt 6 6594</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 pt-3">
                            <div class="contact-info-inner">
                                <div class="contact-info-icon">
                                    <i class="icofont-envelop-open"></i>
                                </div>
                                <div class="contact-info-text">
                                    <h2>office address</h2>
                                    <span>De Fontaine Harncou </span>
                                    <span>Unverzagt 6 6594</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 pt-3">
                            <div class="contact-info-inner">
                                <div class="contact-info-icon">
                                    <i class="icofont-paper-plane"></i>
                                </div>
                                <div class="contact-info-text">
                                    <h2>office address</h2>
                                    <form class="contact-info-subscribe">
                                        <input type="email" placeholder="Email" name="email" autocomplete="off" required="" />
                                        <button type="submit">
                                            <i class="icofont-paper-plane"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* section-4 */}

                <section>
                    <div className="row px-5 pt-5">
                        <div className="col-lg-8 contact-form-section text-start">
                            <h2 className="px-3">get in touch</h2>
                            <form>
                                <input type="text" className="form-control mt-3" placeholder="Name*" required></input>
                                <input type="email" className="form-control mt-3" placeholder="Email*" required></input>
                                <input type="text" className="form-control mt-3" placeholder="Website*" required></input>
                                <textarea className="form-control mt-4 pb-5" placeholder="Write Your Message*" required></textarea>
                                <button className="btn btn-primary mt-4">send message</button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* section-4 */}

                <section className='row home-footer-container mt-5'>
                    <div className='home-footer pb-3'>
                        <div className='home-footer-sub-block pb-2'>
                            <div className='row pt-5'>

                                <div data-aos="fade-right" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-3 text-start mt-5 pb-5 px-5'>
                                    <img src='./focusbytes-logo.png' className='footer-logo pt-5' alt='Logo'></img>
                                    <p className='footer-block1-content pt-3'>Augue lacinia tempus aptentr deteum oegecumsan quis sem. Ut eget prasent placeranostra conubivitae in .</p>
                                    <div className='footer-icons-block'>
                                        <i class="icofont-facebook footer-fb-icon footer-icons"></i>
                                        <i class="icofont-linkedin footer-linkedIn-icon footer-icons"></i>
                                        <i class="icofont-vimeo footer-vimeo-icon footer-icons"></i>
                                        <i class="icofont-instagram footer-insta-icon footer-icons"></i>
                                        <i class="icofont-twitter footer-twitter-icon footer-icons"></i>
                                    </div>
                                </div>

                                <div data-aos="fade-right" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-3 text-start pt-5 mt-5 px-5'>
                                    <h2 className='home-footer-block-header'>quick link</h2>
                                    <ul className='footer-ul'>
                                        <Link to='/home' className='footer-ul-link'>Home</Link> <br></br>
                                        <Link to='/about' className='footer-ul-link'>About Us</Link> <br></br>
                                        <Link to='/service' className='footer-ul-link'>Services</Link> <br></br>
                                        <Link to='/service-details' className='footer-ul-link'>Service Details</Link> <br></br>
                                        <Link to='/contact' className='footer-ul-link'>Contact</Link>
                                    </ul>
                                </div>

                                <div data-aos="fade-right" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-3 footer-block-3 text-start pt-5 mt-5'>
                                    <h2 className='home-footer-block-header'>twitter feeds</h2>
                                    <p className='footer-content pt-3 mb-0'><span className='footer-link'>@istiakahmed024 Hi,</span> semper orci curabitur orcialiquet vivamus cons</p>
                                    <a href='https://website1.focusbytes.in' className='footer-link'>https://website1.focusbytes.in</a>
                                    <p className='footer-content pt-3 mb-0'><span className='footer-link'>@istiakahmed024 Hi,</span> semper orci curabitur orcialiquet vivamus cons</p>
                                    <a href='https://website3.focusbytes.in' className='footer-link'>https://website3.focusbytes.in</a>
                                </div>

                                <div data-aos="fade-right" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-3 footer-block-3 text-start pt-5 mt-5'>
                                    <h2 className='home-footer-block-header'>contact us</h2>

                                    <div className='footer-icon-block'>
                                        <div className='px-3'>
                                            <i class="icofont-location-pin footer-block4-icons"></i>
                                        </div>
                                        <div>
                                            <p className='footer-content pt-3 mb-0'>WorkFlo, <br></br> No.99-OMR,Industrial Estate, <br></br> Perungudi, Chennai-600096</p>
                                        </div>
                                    </div>

                                    <div className='footer-icon-block'>
                                        <div className='px-3 text-start'>
                                            <i class="icofont-email footer-block4-icons"></i>
                                        </div>
                                        <div>
                                            <p className='footer-content pt-3 mb-0'>info@focusbytes.com </p>
                                        </div>
                                    </div>

                                    <div className='footer-icon-block pt-4'>
                                        <div className='px-3 text-start'>
                                            <i class="icofont-phone footer-block4-icons"></i>
                                        </div>
                                        <div>
                                            <p className='footer-content pt-3 mb-0'>+91 9994171128</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}