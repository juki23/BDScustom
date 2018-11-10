import React, { Component } from 'react';

import Carousel from './Carousel';
import Project from './Project';
import News from './News';

import ctaLogo from './../../App/wp-content/uploads/2017/06/hoc-nganh-kien-truc-o-dau-htt-edu-vn.jpg';

class App extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Project />
                <section className="cta">
                    <div className="well well-lg" style={{ background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${ctaLogo})`, backgroundAttachment: 'fixed' }}>
                        <div className="container">
                            <div className="cta-content">Liên lạc ngay với nhân viên kinh doanh để được hỗ trợ nhanh nhất!</div>
                            <div className="cta-phone"><a href="tel:0907015588">0907 01 55 88</a></div>
                            <center style={{ marginTop: 30 }}><a href="#contact"><button style={{ background: 'none', color: 'inherit !important', border: 'none' }} className="btn giahung-btn">Form đăng ký nhận bảng giá <i className="fa fa-chevron-down" aria-hidden="true" /></button></a></center>
                        </div>
                    </div>
                </section>
                <News />
                {/* <a href="tel:0907015588">
                    <div className="call-wrapper pulse-button">
                        <i className="element-animation fa fa-2x fa-phone" />
                    </div>
                </a>
                <div className="footer-cta">
                    <a href="tel:0907015588">
                        <i className="element-animation fa fa-phone" /> 0907 01 55 88</a>
                    <a href="#contact">Yêu cầu thông tin</a>
                </div> */}
            </div>
        );
    }
}

export default App;