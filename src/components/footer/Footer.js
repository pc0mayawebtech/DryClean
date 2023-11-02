import React from 'react'
import "./Footer.css";
import Logof from "../../assets/logo.png";
// import GoogleF from "../../assets/playstore.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Whatsappicon from "../../assets/whtsp-icon.png";
import Iphoneicon from "../../assets/apple-icon.png";
import Playicone from "../../assets/play-icon.png";

const Footer = () => {
    return (
        <>
            <div>
                {/* <div className="footer">
                    <div className="footerlogosectionpara">
                        <img src={Logof} alt='' className="logo" />
                        <p>
                            UClean is India's largest Laundry & Dry Cleaning Chain
                            with over 300+ stores spread across 85+ cities. we are also
                            India's highest rated laundry brand.
                        </p>
                    </div>
                    <div className="footerservicesection">
                        <h4>OUR SERVICES</h4>
                        <a href="./miniatm.html">Dry Cleaning</a>
                        <a href="./aeps.html">Laundry by Kg</a>
                        <a href="./dmt.html">Premium Laundry</a>
                        <a href="./insurance.html">Steam Ironing</a>
                        <a href="./recharge.html">Shoe Cleaning</a>
                        <a href="./cms.html">Bag Cleaning</a>
                        <a href="./payout.html">Curtain Cleaning</a>
                        <a href="www">Sofa Cleaning</a>
                        <a href="www">Carpet Cleaning</a>
                    </div>
                    <div className="footerservicesectionsecond">
                        <h4>PAGES</h4>
                        <a href="./payment.html">Locate us</a>
                        <a href="./invest.html">Blog</a>
                        <a href="./insurance.html">Career</a>
                        <a href="./insurance.html">Career</a>
                        <a href="./insurance.html">Media</a>
                        <a href="./insurance.html">Privacy Policy</a>
                        <a href="./insurance.html">T&C</a>
                    </div>

                    <div className="footerservicesectionsecond" id="footerpolicies">
                        <h4>CONTACT US</h4>
                        <a href="./kyc.html">KYC Policy</a>
                        <a href="./termsmerchant.html">Terms And Merchants</a>
                        <a href="./termagent.html">Terms And Agent</a>
                    </div>
                    <div className="footerlogosection">
                        <p>Download App</p>
                        <img src={GoogleF} alt='' />
                        <span>Follow Us</span>
                        <div className="footerlogosectionconnection">
                            <a href="www"><i className="fa-brands fa-facebook" /></a>
                            <a href="www"><i className="fa-brands fa-instagram" /></a>
                            <a href="www"><i className="fa-brands fa-linkedin" /></a>
                        </div>
                    </div>
                </div>


                <div className="footerdisclaimer">
                    <div className="footerdisclaimercopy">
                        <p>Copyright © 2023, All Right Reserved Maya Web Tech </p>
                    </div>
                    <div className="footerdisclaimercondition">
                        <a href="./policy.html">Privacy Policy</a>
                        <a href="./faqs.html">FAQ's</a>
                        <a href="./disclaimer.html">Disclaimer</a>
                    </div>
                </div> */}
            </div>

            <div className="footer">
                <div className="row fotter-sec">
                    <div className="col-lg-3">
                        <div className="footerlogosectionpara">
                            <img src={Logof} alt='' className="logo" />
                            <p>
                                UClean is India's largest Laundry & Dry Cleaning Chain
                                with over 300+ stores spread across 85+ cities. we are also
                                India's highest rated laundry brand.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footerservicesection">
                            <h4>OUR SERVICES</h4>
                            <a href="./miniatm.html">Dry Cleaning</a>
                            <a href="./aeps.html">Laundry by Kg</a>
                            <a href="./dmt.html">Premium Laundry</a>
                            <a href="./insurance.html">Steam Ironing</a>
                            <a href="./recharge.html">Shoe Cleaning</a>
                            <a href="./cms.html">Bag Cleaning</a>
                            <a href="./payout.html">Curtain Cleaning</a>
                            <a href="www">Sofa Cleaning</a>
                            <a href="www">Carpet Cleaning</a>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footerservicesectionsecond">
                            <h4>PAGES</h4>
                            <a href="./payment.html">Locate us</a>
                            <a href="./invest.html">Blog</a>
                            <a href="./insurance.html">Career</a>
                            <a href="./insurance.html">Career</a>
                            <a href="./insurance.html">Media</a>
                            <a href="./insurance.html">Privacy Policy</a>
                            <a href="./insurance.html">T&C</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footerservicesectionsecond" id="footerpolicies">
                            <h4>CONTACT US</h4>
                            <p> <FaLocationDot style={{ color: "#fff", fontSize: "15px" }} />   A-44 Sector-2, Noida, Uttar Pradesh</p>
                            <p> <BsFillTelephoneFill style={{ color: "#fff", fontSize: "15px" }} />   +91 93159 69524</p>
                            <p> <AiOutlineMail style={{ color: "#fff", fontSize: "15px" }} />   info@mayawebtech.com</p>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <div className="footerservicesectionsecond" id="footerpolicies">
                            <h4>FOLLOW US</h4>
                            <span className='d-flex'>
                                <p><FaFacebookF className='fa-facebook' /></p>
                                <p><BsTwitter className='fa-facebook twitter' /></p>
                                <p><BiLogoLinkedin className='fa-facebook linked-in' /></p>
                                <p><AiFillInstagram className='fa-facebook insta-grm' /></p>
                                <p><BsYoutube className='fa-facebook you-tube' /></p>
                            </span>
                            <h5 className='mt-2'>Download the App</h5>
                            <p className='d-flex'>
                                <img src={Whatsappicon} alt="" className='whtsp-icon whtsp-footer' />
                                <img src={Iphoneicon} alt="" className='whtsp-icon whtsp-footer' />
                                <img src={Playicone} alt="" className='whtsp-icon whtsp-footer' />
                            </p>
                        </div>

                    </div>
                    <hr className='mt-4 text-white' />
                    <div className="copy-right">
                        <p>&copy; 2023 Uclean.All right reserved</p>
                        <span>Privacy Policy |  Terms  and Condition</span>
                    </div>
                </div>

            </div>




        </>
    )
}

export default Footer