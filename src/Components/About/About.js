import React, { useState, useEffect } from 'react';
import "./About.css";
import { AboutCard, AboutSlider } from '../Datas';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Counter from '../Counter';

export const About = () => {

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
        setTimeout(() => {
            AOS.init();
            AOS.refresh();
        }, 1000);
        goToTop();
        window.addEventListener("scroll", isScrolled);
        return () => {
            window.removeEventListener("scroll", isScrolled);
        }
    },[]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass: 'slick-dots',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive : [
            {
                breakpoint : 767,
                settings: {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                    dots : true,
                    autoplay : true,
                    autoplaySpeed : 3000
                }
            },
            {
                breakpoint : 992,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll : 1,
                    autoplay : true,
                    autoplaySpeed : 3000
                }
            }
        ]
    }

    const goToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    const showScrollToTop = scrolled ? "scroll-top-block" : "d-none";


    return (
        <div className='container-fluid'>
            {/* section-1 */}
            <section class="pageheading-sec">
                <div class="breadcrumb-overlay">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-heading">
                                <h1>About Us</h1>
                            </div>
                            <div class="breadcrumb-list">
                                <ul>
                                    <li><Link to='/home'>Home</Link></li>
                                    <li><a class="ms-3" href="/about">About Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-2 */}

            <section className='about-section-2'>
                <div className='row px-5'>

                    <div className={showScrollToTop} onClick={goToTop}>
                        <i class="icofont-long-arrow-up"></i>
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-6 col-lg-8 col-xl-8 col-xxl-8 about-section2-block-1 text-start'>
                        <h1 data-aos="fade-right" data-aos-duration="1000" className='about-section2-header'>why people choose <br></br> our compony</h1>
                        <p data-aos="fade-right" data-aos-duration="1000" className='about-section2-content pt-4'>We’re on a mission to start a conversation with your customers in this fast connected world. Let’s discover, build and grow your digital business. With the right approach, you can achieve unprecedented success online.</p>

                        <div data-aos="fade-right" data-aos-duration="1000" className='about-section2-content-block pt-4'>
                            <div className='about-section2-block1-img-block'>
                                <img src='./light-bulb.png' className='about-section2-block-1-img' alt='about-img'></img>
                            </div>
                            <div className='text-start px-3'>
                                <h2 className='about-section2-card-header'>unique business idea</h2>
                                <p className='about-section2-card-content'>Cupiditate lobortis quis eget, luctus at vestibulum vitae ornare pellentesque ipsum. luctus at vestibulum vitae ornare pellentesque</p>
                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="1000" className='about-section2-content-block pt-4'>
                            <div className='about-section2-block1-img-block'>
                                <img src='./startup.png' className='about-section2-block-1-img' alt='about-img'></img>
                            </div>
                            <div className='text-start px-3'>
                                <h2 className='about-section2-card-header'>fast approval</h2>
                                <p>Cupiditate lobortis quis eget, luctus at vestibulum vitae ornare pellentesque ipsum. luctus at vestibulum vitae ornare pellentesque</p>
                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="1000" className='about-section2-content-block pt-4'>
                            <div className='about-section2-block1-img-block'>
                                <img src='./piggy-bank.png' className='about-section2-block-1-img' alt='about-img'></img>
                            </div>
                            <div className='text-start px-3'>
                                <h2 className='about-section2-card-header'>refinancing</h2>
                                <p>Cupiditate lobortis quis eget, luctus at vestibulum vitae ornare pellentesque ipsum. luctus at vestibulum vitae ornare pellentesque</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1000" className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                        <div className='home-section3-video-block'>
                            <img src='./video-thumb.jpg' className='video-thumb-img' alt='Video-img'></img>
                            <div class="video-overlay">
                                <div class="video-button">
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=7e90gBu4pas" class="mfp-iframe vedio-play"><i class="icofont-ui-play"></i></a>
                                </div>
                                <span class="video-title"><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=7e90gBu4pas" class="mfp-iframe">Watch the Video</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-3 */}

            <section>
                <div className='row mt-5'>
                    <div className='row home-section-4 pt-4 pb-4'>
                        <div data-aos="fade-right" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-3 counter-block text-start  pt-3 pb-3'>
                            <h2 className='home-section4-count px-5'><Counter start={0} end={6589} /></h2>
                            <p className='home-section4-tags px-5'>Projects Completed</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-3 counter-block text-start pt-3 pb-3'>
                            <h2 className='home-section4-count px-5'><Counter start={0} end={264} /></h2>
                            <p className='home-section4-tags px-5'>Expert Technicians</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-3 counter-block text-start pt-3 pb-3'>
                            <h2 className='home-section4-count px-5'><Counter start={0} end={7530} /></h2>
                            <p className='home-section4-tags px-5'>Happy Customers</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-3 text-start pt-3 pb-3'>
                            <h2 className='home-section4-count px-5'><Counter start={0} end={2657} /></h2>
                            <p className='home-section4-tags px-5'>Cups of Coffee</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* section-4 */}

            <section>
                <div className='row'>

                    <div className='col-sm-12 col-md-12 col-lg-6 text-start px-5 pt-5 d-block'>
                        <h1 className='about-section2-header px-3'>get finance solutions for your business</h1>
                        <p className='about-section2-content pt-4 px-3'>We ready for your requesr lobal management consulting firm that serves a private</p>
                    </div>
                    <div className='row px-5'>
                        {
                            AboutCard.map((data) => {
                                return (
                                    <div data-aos="fade-left" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 pt-4 mb-3'>
                                        <div className='card about-card px-5'>
                                            <div className='about-card-header-block pt-4'>
                                                <div class="services-i-left">
                                                    <a href="/service-details"><i class={data.iconClass}></i></a>
                                                </div>
                                                <div>
                                                    <h2 className='about-card-header'>{data.header}</h2>
                                                </div>
                                            </div>
                                            <p className='about-card-content text-start'>{data.content}</p>
                                            <div className='text-start pb-4'>
                                                <Link to='/service-details' className='about-card-link'>read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            {/* section-5 */}

            <section className='mt-5 pt-5'>
                <div className='row'>
                    <div className='home-section-8'>
                        <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 home-form-section text-start px-5 pt-5 pb-5'>
                            <h2 className='home-form-header'>request a free consultation</h2>
                            <p className='home-form-content'>We ready for your requesr lobal management consulting firm that serves a private</p>
                            <form data-aos="fade-right" data-aos-duration="1000">
                                <div className='row'>

                                    <div className='col-sm-12 col-md-6'>
                                        <input type='text' className='form-control home-input' placeholder='First Name*' required></input>
                                    </div>

                                    <div className='col-sm-12 col-md-6'>
                                        <input type='text' className='form-control home-input last-name' placeholder='Last Name*' required></input>
                                    </div>

                                    <div className='col-sm-12 col-md-6 pt-4'>
                                        <input type='text' className='form-control home-input' placeholder='Email Address*' required></input>
                                    </div>

                                    <div className='col-sm-12 col-md-6 pt-4'>
                                        <input type='text' className='form-control home-input' placeholder='Phone*' required></input>
                                    </div>

                                    <div className='col-12 pt-4'>
                                        <input type='text' className='form-control home-input' placeholder='Services Name*' required></input>
                                    </div>

                                    <div className='col-12 pt-4'>
                                        <textarea className='form-control home-text-area' placeholder='Request Message*' required></textarea>
                                    </div>

                                    <div className='text-start pt-4'>
                                        <button className='btn btn-primary home-form-btn'>send request</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-6 */}

            <section>
                <div className='row px-5 mt-5 pt-5'>
                    <div className='col-12 col-lg-10 mx-auto'>
                        <h1 className='about-section6-header'>what our client says</h1>
                        <p>our client feedback your requesr lobal management consulting firm that serves a private feedback your requesr lobal management</p>
                    </div>
                    <Slider {...settings}>
                        {
                            AboutSlider.map((data) => {
                                return (
                                    <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-5 pt-5'>
                                        <div className='card about-slider-card text-start'>
                                            <p className='about-slider-content'>{data.content}</p>
                                            <p>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                            </p>
                                            <p className='about-slider-name'>{data.name}</p>
                                            <p className='about-slider-role mb-0'>{data.role}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>

            {/* section-7 */}

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
