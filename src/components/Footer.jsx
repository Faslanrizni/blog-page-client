import React from 'react';
import { Link } from 'react-router-dom';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';

const Footer = () => {
    return (
        <section className="section footer additionalColor  text-white ">
            <div className="container ">
                <div className="row withIcon">
                    <div className="col-md-4">
                        <h6> Company information</h6>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi id illo nisi, reprehenderit soluta ullam. Ab doloribus expedita nihil.
                        </p>
                    </div>
                    <div className="col-md-4 link">
                        <h6> Quick Links</h6>
                        <div className={'link-footer'}>
                            <div><Link to={'/'}>Home</Link></div>
                            <div><Link to={'/'}>Properties</Link></div>
                            <div><Link to={'/'}>Favorite</Link></div>
                            <div><Link to={'/'}>Blog</Link></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h6> Contact information</h6>
                        <div><p className="text-white mb-1">Galle, Sri Lanka</p></div>
                        <div><p className="text-white mb-1">+94 475808880</p></div>
                        <div><p className="text-white mb-1">mrm@gmail.com</p></div>
                    </div>
                    <div className="col-md-4 icons d-flex justify-content-center align-items-center iconSize">
                        <div className="mx-2"><Link to="#" target="_blank"><CiFacebook /></Link></div>
                        <div className="mx-2"><Link to="#" target="_blank"><FaInstagram /></Link></div>
                        <div className="mx-2"><Link to="#" target="_blank"><CiTwitter /></Link></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
