import React from 'react';

 const Footer = () => {
    return(
        <div className="footer">
            <div className="footer_img_socials">
                <img style={{width:'60px' }}src='../../logo3.jpg'></img>
            </div>
            <div className="footer_links">
           <div className="footer_sections">
               <h5> Categories</h5>
<a>Top Food</a>
<a>All Menu</a>
<a>Buffet</a>
<a>Cooking Accessories</a>
</div>

<div className="footer_sections">
    <h5>Links</h5>
<a>Sign Up/ Login</a>
<a>Contact Us</a>
<a>Help</a>
<a>FAQs</a></div>
<div className="footer_sections">
<h5>Contact Info</h5>
<a>Email <br/>info@fistacchios.com</a>
<a>WhatsApp/Calls <br/>
+234 913 424 8820</a>
<p>Address <br/>blk 56 johnson est,<br/> Lagos State</p></div>
</div>
<p id='copyright'>Copyright ©2022 All rights reserved | Fistacchios Ltd</p>
        </div>
        );
    }
    export default Footer;