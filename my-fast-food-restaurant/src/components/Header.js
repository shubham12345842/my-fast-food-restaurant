import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Header.css';


const Header =() =>{


    return(

        <header className="header">
            <div className="header-content">
                <Carousel
                    showThums ={false}
                    showStatus ={false}
                    infiniteLoop
                    autoplay
                    interval={3000}
                    showArrows ={false}
                >
                    <div className="slider-text">
                        <h2>Where every bite tells a story</h2>
                        <p> Let your taste buds explore a world of unforgettable flavors. </p>
                        <button className="order-button">Order-button</button>

                    </div>

                    <div className="slider-text">
                        <h2>From our kitchen to your heart-freshly made, lovingly served</h2>
                        <p> Because great food is made with love and served wth care.</p>
                        <button className="order-button">Order-button</button>

                    </div>

                    <div className="slider-text">
                        <h2>Not just food</h2>
                        <p> It's an experience on a plate, because it cooked with passion and served with soul.</p>
                        <button className="order-button">Order-button</button>

                    </div>

                </Carousel>
                
            </div>


        </header>
    );
};

export default Header;
