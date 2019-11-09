import React, { Component } from 'react';
import {IoIosJournal, IoIosPhotos, IoMdSearch} from 'react-icons/io';
import styles from '../../../assets/css/RealEstate/HomePage/HomePage.css';


class HomePageRealEstate extends Component {
    render() {
        return(
            <div className={styles.container}>
                <main>
                    <div className={styles.main_background}>
                        
                        <div className={styles.container_sub}>
                    <div className={styles.details_card}>
                        <div className={styles.image_container}>
                            <IoIosJournal size="10em" color="white" className={styles.logo_image}/>
                        </div>
                        <div className={styles.header_contanier}>
                            <h2>Buy a property</h2>
                        </div>
                        <div className={styles.description_container}>
                           Find a best property to buy as your choise
                        </div>
                        <button 
                            className={styles.card_button}
                        >
                        See homes
                        </button>
                    </div>
                    <div className={styles.details_card}>
                        <div className={styles.image_container}>
                            <IoIosPhotos size="10em" color="white" className={styles.logo_image}/>
                        </div>
                        <div className={styles.header_contanier}>
                            <h2>Sell a property</h2>
                        </div>
                        <div className={styles.description_container}>
                            Start your Real estate buissness with us
                        </div>
                        <button 
                            className={styles.card_button}
                        >
                        Publish your ads
                        </button>
                    
                    </div>
                    <div className={styles.details_card}>
                        <div className={styles.image_container}>
                            <IoMdSearch size="10em" color="white" className={styles.logo_image}/>
                        </div>
                        <div className={styles.header_contanier}>
                            <h2>Find a property</h2>
                        </div>
                        <div className={styles.description_container}>
                            Find a good property to invest your money
                        </div>
                        <button 
                            className={styles.card_button}
                        >
                        See homes
                        </button>
                    
                    </div>
                
                </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default HomePageRealEstate;

