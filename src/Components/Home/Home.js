import React, { useEffect, useState, useRef } from 'react';
import "./Home.css";
import { HomeCards, HomeServicePlan, HomeSlider, NewsCard } from '../Datas';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../Components/Style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Counter from '../Counter';

export const Home = () => {

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
        setTimeout(() => {
            AOS.init();
            AOS.refresh();
        }, 1000);
        window.addEventListener("scroll", isScrolled);
        return () => {
            window.removeEventListener("scoll", isScrolled);
        }
    }, []);

    const showScrollToTop = scrolled ? "scroll-top-block" : "d-none";

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     sliderToShow: 4,
    //     slidesToScroll: 1,
    //     dotsClass : 'slick-dots',
    // }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dotsClass: 'slick-dots',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000
                }
            }
        ]
    }

    const sliderRef = useRef(null);

    const settings2 = {
        dots: false,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    const goToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className='container-fluid'>
            {/* Section-1 */}

            <div className='row home-section-1-slider'>
                <Slider {...settings2} ref={sliderRef}>
                    <div className='col-12 home-section-1'>
                        <div className='home-sub-section-1'>
                            <div className='home-section1-text-section'>
                                <h1 data-aos="fade-up" data-aos-duration="1000" className='home-section1-tag'>we improve your <br></br> business life</h1> <br></br>
                                <div data-aos="fade-down mb-5 pb-5" data-aos-duration="1000">
                                    <button className='btn btn-primary get-started-btn'><Link to='/service' className='home-section1-link'>GET STARTED</Link></button> <button className='btn btn-primary home-service-btn'><Link to='/service' className='home-section1-link'>OUR SERVICES</Link></button>
                                </div>
                                <button className='btn btn-primary slider-btn-prev' onClick={() => sliderRef.current.slickPrev()}><i class="icofont-rounded-left"></i></button>
                                <button className='btn btn-primary slider-btn-next' onClick={() => sliderRef.current.slickNext()}><i class="icofont-rounded-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 home-section-1-slider-2'>
                        <div className='home-sub-section-1'>
                            <div className='home-section1-text-section'>
                                <h1 data-aos="fade-up" data-aos-duration="1000" className='home-section1-tag'>take your business to <br></br> next level</h1> <br></br>
                                <div data-aos="fade-down mb-5 pb-5" data-aos-duration="1000">
                                    <button className='btn btn-primary get-started-btn'><Link to='/service' className='home-section1-link'>GET STARTED</Link></button> <button className='btn btn-primary home-service-btn'><Link to='/service' className='home-section1-link'>OUR SERVICES</Link></button>
                                </div>
                                <button className='btn btn-primary slider-btn-prev' onClick={() => sliderRef.current.slickPrev()}><i class="icofont-rounded-left"></i></button>
                                <button className='btn btn-primary slider-btn-next' onClick={() => sliderRef.current.slickNext()}><i class="icofont-rounded-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 home-section-1-slider-3'>
                        <div className='home-sub-section-1'>
                            <div className='home-section1-text-section'>
                                <h1 data-aos="fade-up" data-aos-duration="1000" className='home-section1-tag'>reach us for better <br></br> business life</h1> <br></br>
                                <div data-aos="fade-down mb-5 pb-5" data-aos-duration="1000">
                                    <button className='btn btn-primary get-started-btn'><Link to='/service' className='home-section1-link'>GET STARTED</Link></button> <button className='btn btn-primary home-service-btn'><Link to='/service' className='home-section1-link'>OUR SERVICES</Link></button>
                                </div>
                                <button className='btn btn-primary slider-btn-prev' onClick={() => sliderRef.current.slickPrev()}><i class="icofont-rounded-left"></i></button>
                                <button className='btn btn-primary slider-btn-next' onClick={() => sliderRef.current.slickNext()}><i class="icofont-rounded-right"></i></button>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>

            {/* section-2 */}

            <div className='row px-5'>
                {
                    HomeCards.map((data, index) => {
                        return (
                            <div className='col-sm-12 col-md-6 col-lg-4' key={index}>
                                <div className='home-section2-card-block'>
                                    <img src={data.imgSrc} className='home-section2-card-img' alt='Img Content'></img>
                                    <div className='home-section2-feature-block px-4'>
                                        <div className='home-section2-card-sub-img'>
                                            <img src={data.cardImg} className='feature-img' alt='feature-img'></img>
                                        </div>
                                        <div className='text-start'>
                                            <h2 className='home-section2-card-tag'>{data.tag}</h2>
                                            <p className='home-section2-card-sub-tag'>{data.subTag}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${index === 1 ? 'home-section2-card-content-block-card-2 text-start' : 'home-section2-card-content-block text-start'}`}>
                                    <p className='home-section2-card-content pt-3 px-5 pb-3'>{data.content}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* section-3 */}

            <div className='row pt-5 px-5'>

                <div className={showScrollToTop} onClick={goToTop}>
                    <i class="icofont-long-arrow-up"></i>
                </div>

                <div data-aos="fade-right" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-7 text-start pt-5 px-5'>
                    <p className='home-section3-header'>business & planning with task completion</p>
                    <p>We’re on a mission to start a conversation with your customers in this fast connected world. Let’s discover, build and grow your digital business.It’s a phrase that begins every conversation, and we’d like to start one with you. We love creating digital solutions for all types of</p>
                    <ul className='home-section3-ul p-0'>
                        <li><i class="icofont-verification-check section3-check"></i> Consequat eget vel natoque in duis dui.</li>
                        <li><i class="icofont-verification-check section3-check"></i> Mlementum suscipit mollis tellus. Donec tortor.</li>
                        <li><i class="icofont-verification-check section3-check"></i> Amet commodo urna diam nunc.</li>
                    </ul>
                    <button className='btn btn-primary get-started-btn'><Link to='/service-details' className='home-section1-link'>GET STARTED</Link></button>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className='col-sm-12 col-sm-6 col-lg-5'>
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

            {/* section-4 */}
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

            {/* section-5 */}

            <section>
                <div className='row mt-5 px-5'>
                    <h1 className='home-section5-header pt-5'>our service plan</h1>
                    {
                        HomeServicePlan.map((data) => {
                            return (
                                <div data-aos="fade-right" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-4'>
                                    <div className='card home-service-card'>
                                        <img src={data.imgSrc} className='service-img' alt="service-img"></img>
                                        <div className='home-service-sub-section'>
                                            <div className='service-sub-block text-start pb-3 px-5'>
                                                <h4 className='service-sub-header pt-3 mb-0'>{data.title}</h4>
                                                <span className='service-sub-tag pb-3'>{data.tag}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            {/* section-6 */}

            <section>
                <div className='row mt-5'>

                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 home-section6-block-1 text-start px-5 pt-5 pb-5 mt-5'>
                        <h1 data-aos="fade-left" data-aos-duration="1000" className='home-section6-block-1-header'>we help our clients make significant</h1>
                        <p data-aos="fade-left" data-aos-duration="1000">Global management consulting firm that serves a private firm that serves a private</p>
                        <p data-aos="fade-left" data-aos-duration="1000">We Help Our Clients Make Significant
                            Global management consulting firm that serves a private firm that serves a private
                            Explain to you how all this mistaken idea denouncing pleasure and praising pain was born and will give you complete account the system, and expound the actual teachings of the great explorer.</p>
                        <img data-aos="fade-left" data-aos-duration="1000" src="./white-signature.png" alt='signature-img'></img>
                        <h4 data-aos="fade-left" data-aos-duration="1000" className='pt-3'>Ronald M. Mathew</h4>
                        <span data-aos="fade-left" data-aos-duration="1000">CEO & Founder of Consultoxer</span>
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 home-section6-block-2 pt-5 pb-5 mt-5 px-3'>

                        <div data-aos="fade-right" data-aos-duration="1500" className='home-section6-block-2-box'>
                            <div className='home-section6-img-block px-3 mt-5'>
                                <img src='./light-bulb.png' className='home-section6-img' alt='light-bulb'></img>
                            </div>
                            <div className='home-section6-content-block text-start pt-5'>
                                <h2 className='home-section6-block2-header'>unique business idea</h2>
                                <p className='home-section6-block2-content pt-1'>Cupiditate lobortis quis eget, luctus at vestibulum vitae ornare pellentesque ipsum. luctus at vestibulum vitae ornare pellentesque</p>
                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="1000" className='home-section6-block-2-box'>
                            <div className='home-section6-img-block px-3 mt-5'>
                                <img src='./startup.png' className='home-section6-img' alt='light-bulb'></img>
                            </div>
                            <div className='home-section6-content-block text-start pt-5'>
                                <h2 className='home-section6-block2-header'>fast approval</h2>
                                <p className='home-section6-block2-content pt-1'>Cupiditate lobortis quis eget, luctus at vestibulum vitae ornare pellentesque ipsum. luctus at vestibulum vitae ornare pellentesque</p>
                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="1000" className='home-section6-block-2-box pb-5'>
                            <div className='home-section6-img-block px-3 mt-5'>
                                <img src='./piggy-bank.png' className='home-section6-img' alt='light-bulb'></img>
                            </div>
                            <div className='home-section6-content-block text-start pt-5'>
                                <h2 className='home-section6-block2-header'>Refinancing</h2>
                                <p className='home-section6-block2-content pt-1'>Cupiditate lobortis quis eget, luctus at vestibulum vitae ornare pellentesque ipsum. luctus at vestibulum vitae ornare pellentesque</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* section-7 */}

            <section>
                <div className='row mt-5 px-5'>
                    <div className='col-sm-12 col-md-6 mx-auto'>
                        <h1 className='home-section7-header pt-5'>our expert team</h1>
                        <p>our tem member your requesr lobal management consulting firm that serves a private</p>
                    </div>
                    <Slider {...settings}>

                        {
                            HomeSlider.map((data) => {
                                return (
                                    <div className='col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 px-3 pt-4'>
                                        <div className='card home-slider'>
                                            <div className='home-slider-img-block mt-5'>
                                                <img src={data.imgSrc} className='home-slider-img mt-0 pt-0' alt='slider-img'></img>
                                            </div>
                                            <p className='pt-3'>
                                                <i class="fab fa-facebook-f home-fb-icon"></i>
                                                <i class="fab fa-linkedin home-linkedIn-icon"></i>
                                                <i class="fab fa-vimeo-v home-vimeo-icon"></i>
                                                <i class="fab fa-instagram home-insta-icon"></i>
                                                <i class="fab fa-twitter home-twitter-icon"></i>
                                            </p>
                                            <h2 className='home-slider-header'>{data.name}</h2>
                                            <span className='home-slider-role pb-5'>{data.role}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>

                </div>
            </section>

            {/* section-8 */}

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

            {/* section-9 */}

            <section>
                <div className='row mt-5 px-5'>
                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mx-auto'>
                        <h1 className='home-section9-header'>our news and tips</h1>
                        <p>Our latest blog client feedback your request global management consulting firm that serves a private</p>
                    </div>
                    <div className='row'>
                        {
                            NewsCard.map((data) => {
                                return (
                                    <div data-aos="fade-left" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-4 section9-card'>
                                        <div className='section9-card-img-block'>
                                            <img src={data.imgSrc} className='section9-card-img' alt='img'></img>
                                        </div>
                                        <div className='text-start'>
                                            <p className='home-section9-card-date pt-3'>{data.date}</p>
                                            <h4 className='home-section-card-title'>{data.title}</h4>
                                            <p className='home-section-card-content pt-2'>{data.content}</p>
                                            <Link className='home-section-card-nav' to='/service-details'>continue reading ...</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            {/* section-10 */}

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
