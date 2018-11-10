import React, { Component } from 'react';
// import Menu from '../Menu/Menu';
// import routes from '../../routes';
import { Switch, Route, BrowserRouter as Router, HashRouter } from 'react-router-dom';



class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <legend> <span><i className="fa fa-caret-right" aria-hidden="true" /> Liên hệ <i className="fa fa-caret-left" aria-hidden="true" /></span></legend>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <section className="page-section">
                                <div className=" detail-content">
                                    <div className="single-post">
                                        <div className="post-content">
                                            <article><h2>Sàn GD Bất Động Sản Gia Hưng Land</h2>
                                                <p><i className="fa fa-map-marker" aria-hidden="true" /> 195/6 Đường D1, Phường 25, Quận Bình Thạnh<br /> <i className="fa fa-phone" aria-hidden="true" /> <a href="tel:0907015588">0907 01 55 88</a><br /> <i className="fa fa-envelope" aria-hidden="true" /> <a href="mailto:www.giahungland.vn@gmail.com">www.giahungland.vn@gmail.com</a></p>
                                                <div>&nbsp;</div>
                                                <div>&nbsp;</div>
                                                <div className="embed-responsive embed-responsive-16by9"><iframe style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.102964649496!2d106.71871931489208!3d10.80342549230317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b3071b32d34b2e2!2zQ3R5IFROSEggxJDhuqd1IFTGsCDEkOG7i2Eg4buQYyBHaWEgSMawbmcgTGFuZA!5e0!3m2!1sen!2s!4v1497687746460" width={800} height={600} frameBorder={0} allowFullScreen="allowfullscreen" /></div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="entry-meta" />
                                    <div id="comments" className="comments-area" />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;