import React from "react";
import './Promotions.css';
import { FaShoppingCart } from "react-icons/fa";

const Promotions = () =>{

    return(

        <div className="promotions">

            <div className="promotion-card">
                <img src="./images/mojitooffer.png" alt="Mojito" />

                <div className="promotion-content">
                    <div className="promotion-title">Tasty Thursday</div>
                    <div className="promotion-discount">30% off</div>
                    <button className="order-button">Order Now <FaShoppingCart/></button>

                </div>

            </div>

            <div className="promotion-card">
                <img src="./images/tikka2.jpeg" alt="Paneer-Tikka" />

                <div className="promotion-content">
                    <div className="promotion-title">Foodie Friday</div>
                    <div className="promotion-discount">25% off</div>
                    <button className="order-button">Order Now <FaShoppingCart/></button>

                </div>

            </div>
            
        </div>

        

    )

};

export default Promotions;
