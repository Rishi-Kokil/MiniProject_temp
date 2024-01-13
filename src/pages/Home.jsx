import React from 'react'
import styles from "../style"

import { Header, Footer, Hero, Features } from "../containers";
import { Feature, Navbar } from "../components";

const divStyle = {
    backgroundImage: 'url("../assests/hero_bg_img.png")',
    backgroundSize: 'cover',  // You can adjust this property as needed
    backgroundPosition: 'center center',  // You can adjust this property as needed
};


function Home() {
    return (
        <div className='home_component'>
            <div className='w-full overflow-hidden'>
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>

                <div style={divStyle}>
                    <div className={`${styles.flexStart}`}>
                        <div className={`${styles.boxWidth}`}>
                            <Hero />
                        </div>
                    </div>
                </div>


                <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Footer />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;
