import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './wp-content/uploads/2018/08/cropped-logo-ngang-xanh.jpg';
import footerLogo from './wp-content/uploads/2018/08/footerLogo.jpg';
import Contact from './Contact';

class Footer extends Component {
    render() {
        var { district } = this.props;
        return (
            <div>
                <section id="contact" className="contact" style={{ background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${footerLogo})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                    <Contact/>
                </section>
                <section className="footers">
                    <div className="container footers">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="textwidget">
                                    <p><Link replace to="/"><img className="alignnone wp-image-2167 " src={logo} alt="" width={309} height={88} /></Link></p>
                                    <p style={{ marginTop: 15 }}><b>Sàn Giao Dịch Bất Động Sản Gia Hưng</b></p>
                                    <p><i className="fa fa-map-marker" aria-hidden="true" /> 195 Đường D1, Phường 25, Quận Bình Thạnh<br /> <i className="fa fa-phone" aria-hidden="true" /> <a href="lien-he/index.html">0907015588</a><br /> <i className="fa fa-envelope" aria-hidden="true" /> <a href="mailto:tuvan@giahungland.vn">tuvan@giahungland.vn</a></p>
                                </div>
                            </div>
                            <div className="col-md-4"><h3 className="widget-title-f">VỀ CHÚNG TÔI</h3>
                                <div className="textwidget">
                                    <p>Gia Hưng Land – Cổng thông tin Bất Động Sản TP.HCM<br /> Đem Giá Trị – Niềm Tin của khách hàng là cốt lõi của sự phát triển</p>
                                    <p>Và Chúng Tôi mong muốn làm một người Bạn tin cậy của Khách Hàng.</p>
                                </div>
                            </div>
                            <div className="col-md-4"><h3 className="widget-title-f">BẢN QUYỀN</h3>
                                <div className="textwidget">
                                    <p>Gia Hưng Land đã đăng ký bản quyền về nội dung, khi muốn sao chép, hãy để lại rõ ràng trong bài viết cùng đường dẫn ''Nguồn: giahungland.vn''<br />
                                        <a style={{ margin: '10px 0', display: 'block' }} className="dmca-badge" title="DMCA.com Protection Status" href="http://www.dmca.com/Protection/Status.aspx?ID=038edc96-cd33-4bc8-af31-4b5fdad0d1b5">
                                            <img src="../images.dmca.com/Badges/dmca_protected_sml_120hbf19.png?ID=038edc96-cd33-4bc8-af31-4b5fdad0d1b5" alt="DMCA.com Protection Status" /></a><br />
                                        <a href="chinh-sach-bao-mat-gia-hung-land/index.html"><i className="fa fa-caret-right" aria-hidden="true" /> Chính sách bảo mật - Privacy Policy</a></p>
                                </div>
                            </div>
                            <div className="col-md-4"><h3 className="widget-title-f">BẠN CẦN TÌM CĂN HỘ THEO QUẬN?</h3>
                                <div className="textwidget">
                                    <ul>
                                        {this.showDistrictFooter(district)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="page-bottom" style={{ background: `url(${footerLogo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="pull-left">
                            <ul className="list-inline social" />
                        </div>
                        <div className="pull-right"> Copyright © 2018 by <Link replace to="/">Gia Hưng Land</Link>.</div>
                    </div>
                </footer>
            </div>
        );
    }

    showDistrictFooter = (district) => {
        var result = [];
        result = district.map((distr, index) => {
            return <li key={index}><Link replace to="/project">{distr.district_name}</Link></li>
        })
        return result;
    }
}

export default Footer;
