import React from 'react';
import { Button } from 'react-bootstrap';
import './banner.css';
import {ImMan} from 'react-icons/im';
import {FaChild, FaShoppingBag} from 'react-icons/fa';
import {GoTriangleDown} from 'react-icons/go';

const Banner = () => {
    return (
        <>
            <div className='banner'>
                <div className="banner_info col-3"></div>
                <div className="booking_div">
                    <div className="booking">
                        <div className='d-flex justify-content-center'>
                            <div className="banner_main_div d-flex flex-row border border-primary text-dark rounded s-30 bg-primary">
                                <a className="btn btn-primary" target="_blank" href="https://www.secure-hotel-booking.com/smart/Hotel-d-Argenson/26AD/fr/#roomselection" >Réservez votre séjour</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;