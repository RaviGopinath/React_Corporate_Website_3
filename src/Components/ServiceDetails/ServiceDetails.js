import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./ServiceDetails.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ServiceDetails = () => {

    const [scrolled, setScrolled] = useState(false);

    const isScrolled = () =>{
        if(window.scrollY > 0){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            AOS.init();
            AOS.refresh();
        },1000);
        goToTop();
        window.addEventListener("scroll", isScrolled);
        return()=>{
            window.removeEventListener("scroll", isScrolled);
        }
    },[]);

    const goToTop = () =>{
        window.scroll({top:0, behavior:'smooth'});
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
                                <h1>Service Details</h1>
                            </div>
                            <div class="breadcrumb-list">
                                <ul>
                                    <li><Link to='/home'>Home</Link></li>
                                    <li><a class="ms-3" href="/about">Service Details</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-2 */}

            <section>
                <div className='row mt-5 pt-5 px-5'>

                <div className={showScrollToTop} onClick={goToTop}>
                    <i class="icofont-long-arrow-up"></i>
                </div>

                    <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 service-details-section-1'>
                        <img src="./meeting.jpg" alt='meeting-img'></img>
                        <div className='text-start'>
                            <h1 className='pt-4'>financial planing details</h1>
                            <p className='pt-4'>Ante ligula sit ut at mattis maecenas, vel sed eros risus nam. Pulvinar vel commodo ac volutpat sed, odio ac elementum imperdiet pellentesque, metus non feugiat parturient, velit at eu libero sed. Et sem, vel nec, delectus nibh tortor nibh orci massa, arcu donec porttitor cras natoque diam, blandit fringilla adipiscing. Morbi leo tincidunt libero mauris, ad vestibulum lorem nec lacus massa sit, sapien ut erat hendrerit eget lorem. Est commodo ut, at nisl nibh lectus viverra porta, et urna vestibulum</p>
                            <h2 className='pt-4'>planing & strategies</h2>
                            <p className='pt-4'>Suspendisse sociosqu scelerisque massa est sed, mauris laoreet, vulputate in sit sodales odio, ante mauriaquam. Eget non tortor sed sem lacus, tellus ut enim. Egestas varius consequat euismod penatibus odio, at urna nulla donec curabitur. Sed quam vel ligula litora a at, ultricies natoque ut id neque volutpat, ante dui arcu et, in grida tempor nisl mollis eget. Vitae sed a. Illum vestibulum. Magna ullamcorper.</p>
                            <h2 className='pt-4'>key benefits</h2>
                            <div className='row'>

                                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                                    <img src='./casual-meeting.jpg' className='pt-3' alt='meeting-img'></img>
                                </div>

                                <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                                    <p className='pt-3'>elementum interdum amet elementum egestas,fasis eros, massa sed quis rutrum, auctor mattis amet ut in mi, sed mauris. Suspendisse adipiscing bangd jueteyhyewt iuniversity of usa</p>
                                    <ul>
                                        <li> Consequat eget vel natoque in duis dui.</li>
                                        <li>Mlementum suscipit mollis tellus. Donec tortor</li>
                                        <li>Amet commodo urna diam nunc</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 service-details-section1-block-2'>

                        <div className='service-details-section2-search-section'>
                            <form>
                                <input type='text' className='form-control' placeholder='Search Keyword'></input>
                                <button>
                                    <i class="icofont-search-1"></i>
                                </button>
                            </form>
                        </div>

                        <div className='service-details-category-section text-start mt-3 px-4 pb-5 pt-5'>
                            <h2>Categories</h2>
                            <ul>
                                <li>
                                    <Link className='service-details-link'>business policy</Link>
                                </li>
                                <li>
                                    <Link className='service-details-link'>global business policy</Link>
                                </li>
                                <li>
                                    <Link className='service-details-link'>finance growth</Link>
                                </li>
                                <li>
                                    <Link className='service-details-link'>education</Link>
                                </li>
                                <li>
                                    <Link className='service-details-link'>investment plan</Link>
                                </li>
                            </ul>
                        </div>

                        <div className='service-details-category-section text-start mt-5 px-4 pb-5 pt-5'>
                            <h2>Archive</h2>
                            <ul>
                                <li>
                                    <Link className='service-details-link'>january 1980 <span>(36)</span></Link>
                                </li>
                                <li>
                                    <Link className='service-details-link'>March 1991 <span>(25)</span></Link>
                                </li>
                                <li>
                                    <Link className='service-details-link'>september 2012 <span>(18)</span></Link>
                                </li>
                                <li>
                                    <Link className='service-details-link'>february 2018 <span>(56)</span></Link>
                                </li>
                            </ul>
                        </div>

                        <div className='service-section-query-block mb-0 pb-3 mt-5'>
                            <h2>have any questions?</h2>
                            <form className='text-start'>
                                <input className='form-control' type='email' placeholder='your email'></input>
                                <button className='btn btn-primary'>Send</button> <br></br>
                                <p className='pt-4'>call us +91 9994171128</p>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* section-3 */}

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