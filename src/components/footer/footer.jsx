import React from "react";
import "../footer/footer.css";
import facebook from "./assets/facebook.png";
import linkedin from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";

const Footer=()=>{
    return(
        <div className="footer-main">
            <div className="footer-above">
                <div className="footer-1">
                   
                    <div className="footer-1-div">
                        <div className="logo">
                            <p><img src="https://th.bing.com/th/id/OIP.gt7i7rY75SL0jFurl0kc-gHaGF?pid=ImgDet&rs=1" alt=""></img> </p>
                        </div>
                    </div>
                    <div className="footer-1-div">
                        <h4>About</h4>
                        <p>
                            Dharti jafkjjhasfjnsdjisdaf
                        </p>
                    </div>
                    <div className="footer-1-div">
                        <h4>Parameters</h4>
                            <a href="/employer">
                                <p>Indian Dharwad</p>
                            </a>
                            
                    </div>
                    <div className="footer-1-div">
                        <h4>Hyperlink</h4>
                            <a href="/About">
                                <p>about</p>
                            </a>
                            <a href="/home">
                                <p>Home</p>
                            </a>
                            <a href="/blog">
                                <p>Blog</p>
                            </a>
                            <a href="/programmes">
                                <p>Programmes</p>
                            </a>
                            <a href="/contact">
                                <p>Contact</p>
                            </a>
                    </div>
                    <div className="footer-1-div">
                        <h4>Follow us On</h4>
                        <div className="socialmedia">
                            <a href="https://www.facebook.com/https://www.facebook.com/"><p><img src={facebook} alt=""/></p></a>
                            <a href="https://www.instagram.com/"><p><img src={linkedin} alt=""/></p></a>
                            <a href="https://in.linkedin.com/"><p><img src={instagram} alt=""/></p></a>
                            </div>    
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-below">
                <div className="copyright">
                    <p>
                        @{new Date().getFullYear()} IIT Dharwad. All right reserved
                    </p>
                </div>
                <div className="footer-below-links">
                    <a href="/terms">
                        <div>
                            <p>Terms and Conditions</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Footer;