import React from 'react'
import "./Home.css";
import Whatsappicon from "../../assets/whtsp-icon.png";
import Iphoneicon from "../../assets/apple-icon.png";
import Playicone from "../../assets/play-icon.png";
import Service1 from "../../assets/services1.jpg";
import Service2 from "../../assets/services2.jpg";
import Service3 from "../../assets/services3.jpg";
import Service4 from "../../assets/serv_img_4.jpg";
import ServIcon1 from "../../assets/serv_icon_1.png";
import ServIcon2 from "../../assets/serv_icon_2.png";
import ServIcon3 from "../../assets/serv_icon_3.png";
import ServIcon4 from "../../assets/serv_icon_4.png";
const Home = () => {
    return (
        <>
            <div className="home-img text-center text-white">
                <h1 className=''>Find your nearest Laundromat!</h1>
                <button>Order Now</button>
                <div className="home-icon">
                    <img src={Whatsappicon} alt="" className='whtsp-icon' />
                    <img src={Iphoneicon} alt="" className='whtsp-icon' />
                    <img src={Playicone} alt="" className='whtsp-icon' />
                    <p className=''>Place Your Order Now</p>
                </div>
            </div>

            {/* Our Services */}
            <div className="content-section text-center ">
                <h1 className=''>Our Services</h1>
                <div className="container-service mb-5">
                    <div className="row">
                        <div className="col-lg-6 service-1-col">
                            <div className="serv_block">
                                <div className="img_sec rounded p-3 me-4">
                                    <img src={Service1} alt="" className='service-img1' />
                                    <img src={ServIcon1} alt="" className='service-icon1' />
                                    <h2 >DRY CLEANING</h2>
                                    <span>Eco Friendly | Expert Stain Removal</span>
                                    <p style={{ color: "blue", marginTop: "20px" }}>Learn More</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 service-1-col ">
                            <div className="serv_block">
                                <div className="img_sec rounded p-3 ms-4">
                                    <img src={Service2} alt="" className='service-img1' />
                                    <img src={ServIcon2} alt="" className='service-icon1' />
                                    <h2>DRY CLEANING</h2>
                                    <span>Eco Friendly | Expert Stain Removal</span>
                                    <p style={{ color: "blue", marginTop: "20px" }}>Learn More</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 service-1-col mt-5">
                            <div className="serv_block">
                                <div className="img_sec rounded p-3 me-4">
                                    <img src={Service3} alt="" className='service-img1' />
                                    <img src={ServIcon3} alt="" className='service-icon1' />
                                    <h2>DRY CLEANING</h2>
                                    <span>Eco Friendly | Expert Stain Removal</span>
                                    <p style={{ color: "blue", marginTop: "20px" }}>Learn More</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 service-1-col mt-5">
                            <div className="serv_block">
                                <div className="img_sec rounded p-3 ms-4">
                                    <img src={Service4} alt="" className='w-100 service-img1' />
                                    <img src={ServIcon4} alt="" className='service-icon1' />
                                    <h2>DRY CLEANING</h2>
                                    <span>Eco Friendly | Expert Stain Removal</span>
                                    <p style={{ color: "blue", marginTop: "20px" }}>Learn More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home