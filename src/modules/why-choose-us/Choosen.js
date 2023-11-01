import React from 'react'
import "./Choosen.css"
import CenterImg from "../../assets/center_logo.png";
import QuickServ from "../../assets/QUICK_SERVICE.png"
import Doorstep from "../../assets/DOORSTEP_PICK_UP_AND_DROP.png";
import Pricing from "../../assets/affordable_per_kilo_pricing.png";
import State from "../../assets/STATE_OF_THE_ART_TECHNOLOGY.png";
import Water from "../../assets/WE_SAVE_WATER-WITH_EVERY_WASH_CYCLE.png";
import Profesional from "../../assets/PROFESSIONAL_CLEANING.png";
import Detergents from "../../assets/GREEN_CERTIFIED_DETERGENTS.png";
import Ondemand from "../../assets/ONDEMAND_EXPRESS_SERVICE_AVAILABLE.png";
import Sanitized from "../../assets/100_SANITIZED_and_MACHINE_DRY.png";
import Packging from "../../assets/CUSTOM_PACKAGING_FOLD_OR_HANGI.png";
import Mobile1 from "../../assets/mobile1.png";
import Mobile2 from "../../assets/mobile2.png";
import PlayStore from "../../assets/playstore.png";
import AppStore from "../../assets/app-store.png";
const Choosen = () => {
    return (
        <>
            <div className="choose-us">
                <h1>INDIA’S NO. 1 LAUNDRY & DRY-CLEANING <br />
                    BRAND FROM AN IITIAN</h1>
            </div>

            {/* Why U Clean */}
            <div className="uclean-main text-center" style={{ marginBottom: "300px" }}>
                <h1>WHY UCLEAN?</h1>
                <img src={CenterImg} alt="" />
                <ul>
                    <span className='quik-text'>QUICK SERVICE</span>
                    <li><img src={QuickServ} alt="" className='quick-service' /></li>
                    <span className='door-text'>DOORSTEP PICK UP AND DROP</span>
                    <li> <img src={Doorstep} alt="" className='door-step' /></li>
                    <span className='pricing-text'>AFFORDABLE PER KILO PRICING</span>
                    <li> <img src={Pricing} alt="" className='pricing-step' /></li>
                    <span className='state-text'>STATE-OF-THE-ART TECHNOLOGY</span>
                    <li> <img src={State} alt="" className='state-step' /></li>
                    <span className='water-text'>WE SAVE WATER WITH EVERY WASH</span>
                    <li> <img src={Water} alt="" className='water-step' /></li>

                    <span className='profes-text'>GREEN-CERTIFIED DETERGENTS</span>
                    <li><img src={Profesional} alt="" className='profes-service' /></li>
                    <span className='detergent-text'>PROFESSIONAL CLEANING</span>
                    <li><img src={Detergents} alt="" className='detergent-service' /></li>
                    <span className='ondemand-text'>ON-DEMAND SERVICE ALSO AVAILABLE</span>
                    <li><img src={Ondemand} alt="" className='ondemand-service' /></li>
                    <span className='sanitized-text'>100% SANITIZED CLOTHES</span>
                    <li><img src={Sanitized} alt="" className='sanitized-service' /></li>
                    <span className='packging-text'>CUSTOM PACKAGING FOLD OR HANG!</span>
                    <li><img src={Packging} alt="" className='packging-service' /></li>

                </ul>
            </div>

            {/* Download Uclean App */}

            <div className="container-download">
                <div className="download">
                    <div className="mobile-service">
                        <img src={Mobile1} alt="" className='mob-1' />
                        <img src={Mobile2} alt="" className='mob-2' />
                    </div>
                    <div className="downloap-bg">
                        <div className="row">
                            <div className="col-lg-5">
                            </div>
                            <div className="col-lg-7">
                                <div className="download-text">
                                    <h2>Download UClean App</h2>
                                    <p>Upgrade your laundry experience with our
                                        <span className='text-white'> new app! </span> Get the convenience of easy scheduling,
                                        real-time updates, and <span className='text-white'> free pick-up and drop-off </span>at
                                        your doorstep. No more hassle of traditional laundry
                                        services - with just a few taps, you can have your clothes
                                        cleaned and returned to you in no time. Download now and enjoy
                                        a stress-free laundry routine.
                                    </p>
                                    <div className="d-flex">
                                        <img src={PlayStore} alt="" className='play-store' />
                                        <span className='text-white mt-3'>OR</span>
                                        <img src={AppStore} alt="" className='app-store' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Choosen