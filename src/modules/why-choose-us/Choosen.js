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
                </ul>
                <span className='profes-text'>PROFESSIONAL CLEANING</span>
                <li><img src={Profesional} alt="" className='profes-service' /></li>
                <ul>

                </ul>
            </div>

        </>
    )
}

export default Choosen