import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './wp-content/uploads/2018/08/cropped-logo-ngang-xanh.jpg';

class Header extends Component {

    render() {
        var { district } = this.props;        
        return (
            <header>
                <section className="logo-menu">
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header"> <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" /> <span className="icon-bar" /> </button>
                                <div className="logo-tag">
                                    <Link replace to="/" className="custom-logo-link" >
                                        <img width={300} height={89} src={logo} className="custom-logo" alt="Sàn Giao Dịch BĐS Gia Hưng Land" itemProp="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <div className="top-phone">
                                    <form role="search" className="search-form">
                                        <label>
                                            <input type="search" className="search-field" placeholder="Tìm kiếm …" name="s" />
                                        </label>
                                        <button type="submit" className="search-submit"><i className="fa fa-search" aria-hidden="true" /></button>
                                    </form>
                                    <div style={{ display: 'inline-block' }}> <span><i className="fa fa-phone blinking" aria-hidden="true" /> HOTLINE <b>24/7</b></span>
                                        <div className="blink"><a href="tel:0907015588">0907 01 55 88</a></div>
                                    </div>
                                </div>
                                <div className="menu-main-menu-container">
                                    <ul id="menu-main-menu" className="nav navbar-nav navbar-right">
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home active">
                                            <Link replace to="/">
                                                <i className="fa fa-home" aria-hidden="true" />
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-project_cat menu-item-has-children dropdown">
                                            <Link replace to="/project">Dự án<span className="caret" /></Link>
                                            <ul role="menu" className=" dropdown-menu">
                                                {this.showDistrictMenu(district)}
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-custom">
                                            <Link replace to="/news">Tin tức</Link>
                                        </li>
                                        <li className="menu-item menu-item-type-custom">
                                            <Link replace to="/">TUYỂN DỤNG</Link>
                                        </li>
                                        <li className="menu-item menu-item-type-custom">
                                            <Link replace to="/">Hoạt Động Gia Hưng Land</Link>
                                        </li>
                                        <li className="menu-item menu-item-type-custom">
                                            <Link replace to="/contact" >Liên hệ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
            </header>
        );
    }

    showDistrictMenu = (district) => {
        var result = [];
        result = district.map((distr, index) => {
            return <li key={index} id="menu-item-1434" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-1434">
                <Link replace to={`/project/${distr.id}`}>{distr.district_name}</Link>
            </li>
        })
        return result;
    }
}

export default Header;
