import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Services.css";
import { ServiceCard } from '../Datas';
import AOS from 'aos';

export const Service = () => {

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
        return ()=>{
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
                                <h1>Services</h1>
                            </div>
                            <div class="breadcrumb-list">
                                <ul>
                                    <li><Link to='/home'>Home</Link></li>
                                    <li><a class="ms-3" href="/about">Services</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-2 */}

            <section>
                <div className='row px-5'>

                <div className={showScrollToTop} onClick={goToTop}>
                    <i class="icofont-long-arrow-up"></i>
                </div>

                    <h1 className='block-header pt-5 mt-5'>our global activities</h1>
                    {
                        ServiceCard.map((data) => {
                            return (
                                <div data-aos="fade-left" data-aos-duration="1000" className='col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 service-card-section  pt-3 mb-3'>
                                    <div className='service-card text-start'>
                                        <div className='service-card-img-block'>
                                            <img src={data.imgSrc} className='service-card-img' alt='service-img'></img>
                                            <div className='service-sub-img-block'>
                                                <img src={data.icoSrc} alt='sub-img'></img>
                                            </div>
                                        </div>
                                        <div className='service-card-content-block'>
                                            <h2 className='service-card-title pt-4'>{data.title}</h2>
                                            <p className='service-card-content pt-4'>{data.content}</p>
                                            <div className='text-start'>
                                                <Link to='/service-details' className='service-card-link'>read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
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
