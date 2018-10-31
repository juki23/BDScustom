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
                <section id="contact" className="contact" style={{ background: 'linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(../wp-content/uploads/2018/08/cropped-c-Michael-Sch%c3%bctz-fotolia.com_.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <legend> Điền thông tin để nhận báo giá và tư vấn miễn phí</legend>
                            </div>
                            <div className="col-sm-7">
                                <div role="form" className="wpcf7" id="wpcf7-f1341-o1" lang="vi" dir="ltr">
                                    <div className="screen-reader-response" />
                                    <form action="https://giahungland.vn/lien-he/#wpcf7-f1341-o1" method="post" className="wpcf7-form" noValidate="novalidate">
                                        <div style={{ display: 'none' }}> <input type="hidden" name="_wpcf7" defaultValue={1341} /> <input type="hidden" name="_wpcf7_version" defaultValue="5.0.3" /> <input type="hidden" name="_wpcf7_locale" defaultValue="vi" /> <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f1341-o1" /> <input type="hidden" name="_wpcf7_container_post" defaultValue={0} /></div>
                                        <p><span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Họ tên *" /></span></p>
                                        <div className="row" style={{ marginBottom: 10 }}>
                                            <div className="col-sm-6"> <span className="wpcf7-form-control-wrap your-phone"><input type="tel" name="your-phone" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control" aria-required="true" aria-invalid="false" placeholder="Số điện thoại *" /></span></div>
                                            <div className="col-sm-6"> <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email form-control" aria-invalid="false" placeholder="Địa chỉ Email" /></span></div>
                                        </div>
                                        <p><span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols={40} rows={3} className="wpcf7-form-control wpcf7-textarea form-control" aria-invalid="false" placeholder="Nội dung" defaultValue={""} /></span></p>
                                        <p><input type="submit" defaultValue="Gửi đi" className="wpcf7-form-control wpcf7-submit btn-warning btn giahung-btn" /></p>
                                        <div className="wpcf7-response-output wpcf7-display-none" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> <a href="tel:0907015588"><div className="call-wrapper pulse-button"> <i className="element-animation fa fa-2x fa-phone" /></div> </a>
                <div className="footer-cta"> <a href="tel:0907015588"><i className="element-animation fa fa-phone" /> 0907 01 55 88</a> <a href="#contact">Yêu cầu thông tin</a></div>
            </div>

        );
    }
}

export default Contact;