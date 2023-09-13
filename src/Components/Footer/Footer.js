import React, {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Footer = () =>{

    const [currentYear, setCurrentYear] = useState();

    useEffect(()=>{
        const year = new Date().getFullYear();
        setCurrentYear(year);
        setTimeout(()=>{
            AOS.init();
            AOS.refresh();
        })
    },[])

    const footerStyle = {
        backgroundColor : "#131228",
        padding : "20px 0",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    }

    const footerText = {
        color : "#ddd",
        textAlign : "center"
    }

    return(
        <div className='footer-container' style={footerStyle}>
            <p style={footerText}>© {currentYear} Consultoxer Consulting. All Rights Reserved.</p>
        </div>
    )
}