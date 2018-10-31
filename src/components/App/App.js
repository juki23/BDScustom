import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';
import Project from '../Custom/Project';
import Home from '../Custom/Home';
import Contact from '../Custom/Contact';
import News from '../Custom/News';
import ProjectItem from '../Custom/ProjectItem';

import logo from './wp-content/uploads/2018/08/cropped-logo-ngang-xanh.jpg';
import footerLogo from './wp-content/uploads/2018/08/footerLogo.jpg';

import './wp-content/cache/autoptimize/css/autoptimize.css';
import './wp-includes/js/jquery/jquery';
import './wp-content/cache/autoptimize/js/autoptimize';
{/* <Link to={to}>
                            {label}
                        </Link> */}
const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/project",
        exact: false,
        main: () => <Project />
    },
    {
        path: "/contact",
        exact: false,
        main: () => <Contact />
    },
    {
        path: "/news",
        exact: false,
        main: () => <News />
    },
    {
        path: "/projectItem",
        exact: false,
        main: () => <ProjectItem />
    }
]

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="home page-template page-template-page-home page-template-page-home-php page page-id-1330 wp-custom-logo">
                    <div id="fb-root" />
                    <header>
                        <section className="logo-menu">
                            <nav className="navbar navbar-default navbar-fixed-top">
                                <div className="container">
                                    <div className="navbar-header"> <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                                        <div className="logo-tag"> <Link to="/" className="custom-logo-link">
                                            <img width={300} height={89} src={logo} className="custom-logo" alt="Sàn Giao Dịch BĐS Gia Hưng Land" itemProp="logo" /></Link></div>
                                    </div>
                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <div className="top-phone">
                                            <form role="search" method="get" className="search-form" action="https://giahungland.vn/">
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
                                                <li id="menu-item-25" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-25 active"><Link to="/"><i className="fa fa-home" aria-hidden="true" /></Link></li>
                                                <li id="menu-item-27" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-has-children menu-item-27 dropdown">
                                                    <Link to="/project">Dự án<span className="caret" /></Link>
                                                    <ul role="menu" className=" dropdown-menu">
                                                        <li id="menu-item-1434" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-1434"><Link to="/project">Căn hộ Quận 2</Link></li>
                                                        <li id="menu-item-2004" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-2004"><Link to="/project">Căn hộ Quận 4</Link></li>
                                                        <li id="menu-item-1608" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-1608"><Link to="/project">Căn hộ Quận 6</Link></li>
                                                        <li id="menu-item-2089" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-2089"><Link to="/project">Căn hộ Quận 7</Link></li>
                                                        <li id="menu-item-1433" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-1433"><Link to="/project">Căn hộ Quận 8</Link></li>
                                                        <li id="menu-item-2001" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-2001"><Link to="/project">Căn hộ Quận 9</Link></li>
                                                        <li id="menu-item-1505" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-1505"><Link to="/project">Căn hộ Quận 10</Link></li>
                                                        <li id="menu-item-1507" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-1507"><Link to="/project">Căn hộ Quận 12</Link></li>
                                                        <li id="menu-item-2000" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-2000"><Link to="/project">Căn hộ quận Thủ Đức</Link></li>
                                                        <li id="menu-item-2002" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-2002"><Link to="/project">Căn hộ quận Bình Thạnh</Link></li>
                                                        <li id="menu-item-1606" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-1606"><Link to="/project">Căn hộ quận Bình Tân</Link></li>
                                                        <li id="menu-item-1607" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-1607"><Link to="/project">Căn hộ quận Bình Chánh</Link></li>
                                                        <li id="menu-item-2003" className="menu-item menu-item-type-taxonomy menu-item-object-project_cat menu-item-2003"><Link to="/project">Căn hộ quận Tân Bình</Link></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-1325" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1325 dropdown"><a>Tin tức <span className="caret" /></a>
                                                    <ul role="menu" className=" dropdown-menu">
                                                        <li id="menu-item-438" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-438"><Link to="/news">Tin Tức BDS</Link></li>
                                                        <li id="menu-item-435" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-435"><Link to="/news">Phân Tích – Nhận Định</Link></li>
                                                        <li id="menu-item-635" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-635"><Link to="/news">Nhật Ký Nghề Sales</Link></li>
                                                    </ul>
                                                </li>
                                                <li id="menu-item-2157" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2157"><Link to="/">TUYỂN DỤNG</Link></li>
                                                <li id="menu-item-820" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-820"><Link to="/">Hoạt Động Gia Hưng Land</Link></li>
                                                <li id="menu-item-42" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-42"><Link to="/contact">Liên hệ</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </section>
                    </header>
                    {/* Container */}
                    {this.showContentMenus(routes)}
                    {/* End */}
                    <section className="footers">
                        <div className="container footers">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="textwidget">
                                        <p><Link to="/"><img className="alignnone wp-image-2167 " src={logo} alt="" width={309} height={88} /></Link></p>
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
                                        <p>Gia Hưng Land đã đăng ký bản quyền về nội dung, khi muốn sao chép, hãy để lại rõ ràng trong bài viết cùng đường dẫn ''Nguồn: giahungland.vn''<br /> <a style={{ margin: '10px 0', display: 'block' }} className="dmca-badge" title="DMCA.com Protection Status" href="http://www.dmca.com/Protection/Status.aspx?ID=038edc96-cd33-4bc8-af31-4b5fdad0d1b5"> <img src="../images.dmca.com/Badges/dmca_protected_sml_120hbf19.png?ID=038edc96-cd33-4bc8-af31-4b5fdad0d1b5" alt="DMCA.com Protection Status" /></a>
                                            <br /> <a href="chinh-sach-bao-mat-gia-hung-land/index.html"><i className="fa fa-caret-right" aria-hidden="true" /> Chính sách bảo mật - Privacy Policy</a></p>
                                    </div>
                                </div>
                                <div className="col-md-4"><h3 className="widget-title-f">BẠN CẦN TÌM CĂN HỘ THEO QUẬN?</h3>
                                    <div className="textwidget">
                                        <ul>
                                            <li><Link to="/project">căn hộ quận 2</Link></li>
                                            <li><Link to="/project">căn hộ quận 4</Link></li>
                                            <li><Link to="/project">căn hộ quận 6</Link></li>
                                            <li><Link to="/project">căn hộ quận 7</Link></li>
                                            <li><Link to="/project">căn hộ quận 8</Link></li>
                                            <li><Link to="/project">căn hộ quận 9</Link></li>
                                            <li><Link to="/project">căn hộ quận 10</Link></li>
                                            <li><Link to="/project">căn hộ quận 12</Link></li>
                                            <li><Link to="/project">căn hộ quận thủ đức</Link></li>
                                            <li><Link to="/project">căn hộ quận bình thạnh</Link></li>
                                            <li><Link to="/project">căn hộ quận bình tân</Link></li>
                                            <li><Link to="/project">căn hộ quận tân bình</Link></li>
                                            <li><Link to="/project">căn hộ tại bình chánh</Link></li>
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
                            <div className="pull-right"> Copyright © 2018 by <Link to="/">Gia Hưng Land</Link>.</div>
                        </div>
                    </footer>
                    <noscript>
                        &lt;div style="display:inline;"&gt; &lt;img height="1" width="1" style="border-style:none;" alt="" src="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/875562315/?guid=ON&amp;amp;script=0"/&gt;&lt;/div&gt;
        </noscript>
                </div>
            </HashRouter>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;