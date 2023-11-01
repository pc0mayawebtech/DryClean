import React from 'react';
import "./Customer.css";
import { AiFillStar } from "react-icons/ai";
import Cust1 from "../../assets/cust_img_1.jpg";
import Cust2 from "../../assets/cust_img_2.jpg";
import Cust3 from "../../assets/cust_img_3.jpg";
import FileB from "../../assets/file.jpg";
import BudgetImg from "../../assets/budget-img.png";
import MenImg from "../../assets/men-img.png";

const Customer = () => {
    return (
        <>
            <div className="speak-customer-head text-center">
                <h1>CUSTOMER SPEAK</h1>
                <p>UClean is the highest rated and most searched Laundry and Dry-Cleaning brand in India! <br />
                    Still not sure? Here is a glimpse of our raving reviews!</p>
                <div className="container-customer">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="img_sc ">
                                <img src={Cust1} alt="" className='new-one service-icon1' />
                                <p className='text-costomer'>Gave up on my 15 year old "dry cleaners" for U Clean. Excellent service, Couteous staff, Super Sonic delivery. Feel pampered. And yes, not to forget
                                    the competitive rates. A definite recommend. Get your clothesU Cleaned. I'am loving it. <br />
                                    <span style={{ color: "#dfae18", fontSize: "18px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </span>
                                    <p className='fs-3 fw-bold'>Om Yadav </p>
                                    <p className='position'>(Front-End Developer, Delhi)</p>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="img_sc ">
                                <img src={Cust2} alt="" className='new-one service-icon1' />
                                <p className='text-costomer'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, modi, maiores amet et odio consequuntur possimus magni reprehenderit deserunt sapiente rem sed commodi nobis ipsum? Corporis, autem? Laboriosam, vero earum! <br />
                                    <span style={{ color: "#dfae18", fontSize: "18px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </span>
                                    <p className='fs-3 fw-bold'>Alok Verma </p>
                                    <p className='position'>(Full-Stack Developer, Delhi)</p>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="img_sc ">
                                <img src={Cust3} alt="" className='new-one service-icon1' />
                                <p className='text-costomer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dignissimos aliquid totam? Tenetur iste magni cumque. Non dolorum vitae corrupti cupiditate ea voluptatum ratione dolorem, labore placeat rem deleniti omnis? <br />
                                    <span style={{ color: "#dfae18", fontSize: "18px" }}>
                                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                    </span>
                                    <p className='fs-3 fw-bold'>Rupal Sharma </p>
                                    <p className='position'>(Hr Department, Delhi)</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Latest Blog */}
            <div className="content-blog">
                <div className="blog-section text-center mt-5">
                    <strong className='fs-1 '>LATEST BLOGS</strong>
                    <p className='fs-5 mt-3'>Stay updated with the best of garment and home cleaning</p>
                </div>

                <div className="row text-center">
                    <div className="col-lg-6 ">
                        <div className="blog-cust">
                            <img src={FileB} alt="" className='file-img' />
                            <p className='text-cstomer text-center'>Sarvesh Mourya, FOUNDER OF MayaWebTech, BATTLES IT OUT AT INDIA'S BIGGEST BUSINESS REALITY SHOW ON TIMES NOW
                            </p>
                            <span>Watch the show on Saturday (20 July, 2018) at 9.30 a.m. and Sunday (21 July 2018) at 11.30 am to catch Mr. Sarvesh Mourya, founder of MayaWebTech, battle it out with other</span> <br />
                            <p className='text-end text-primary' style={{ textDecoration: "underline", cursor: "pointer" }} >Learn More</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="budget-head d-flex">
                            <div className="col-lg-5">
                                <div className="image-img">
                                    <img src={BudgetImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="budget-text">
                                    <p className='text-primary'>2022-11-29 11:26:32</p>
                                    <strong className='fs-5' >UP YOUR LIVING STANDARD, ON A BUDGET!</strong> <br />
                                    <span>Lorem ipsum dolor sit amet consectetur adisicing elit. Quam odit quidem incidunt consequatur iusto architecto expedita nesciunt, id necessitatibus qui commod.</span>
                                    <p className='text-end text-primary mt-1' style={{ textDecoration: "underline", cursor: "pointer" }} >Learn More</p>
                                </div>
                            </div>

                        </div>

                        <div className="budget-head second-row d-flex">
                            <div className="col-lg-5">
                                <div className="image-img">
                                    <img src={MenImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="budget-text">
                                    <p className='text-primary'>2022-11-29 11:22:48</p>
                                    <strong className='fs-5'>STYLING TIPS FOR MEN</strong> <br />
                                    <span>Lorem ipsum dolor sit amet consectetur adisicing elit. Quam odit quidem incidunt consequatur iusto architecto expedita nesciunt, id necessitatibus qui commodi Lorem, ipsum dolor sit amet consetetur
                                    </span>
                                    <p className='text-end text-primary mt-1' style={{ textDecoration: "underline", cursor: "pointer" }} >Learn More</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* CITIES WE DELIVER TO */}
        </>
    )
}

export default Customer