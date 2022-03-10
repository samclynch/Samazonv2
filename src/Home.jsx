import React from "react";
import "./Home.css";

import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="1"
                        title="Iphone 11"
                        price={699.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
                        rating={4}
                    />
                    <Product
                        id="2"
                        title="Mac"
                        price={1099.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg3hmMnPJoK6VrfH2pZ2czfbSqJ7ksHcLhPQ&usqp=CAU"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                            title='The Lean Startup' 
                            price={29.99} 
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                            rating={3}
                    />
                    <Product
                            id="49538094"
                            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                            price={239.00} 
                            image="https://www.kenwoodworld.com/WebImage/Global/New%20products/1_KW_kMix_Red_800x600.jpg" 
                            rating={4}
                    />
                    <Product
                        id="5"
                        title="Lehsun"
                        price={3.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ISKQLF1oL._SL1500_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                            id="23445930"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98.99} 
                            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" 
                            rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
