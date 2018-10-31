import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <section className="home theme-slider">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-pause="null" data-interval={7000}>
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                            <li data-target="#carousel-example-generic" data-slide-to={1} />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active"> <img width={960} height={540} src="wp-content/uploads/2018/07/z1126168193207_0bbaaebdec32e3dad01f3b0085992b18.jpg" className="img-responsive wp-post-image" alt="" srcSet="https://giahungland.vn/wp-content/uploads/2018/07/z1126168193207_0bbaaebdec32e3dad01f3b0085992b18.jpg 960w, https://giahungland.vn/wp-content/uploads/2018/07/z1126168193207_0bbaaebdec32e3dad01f3b0085992b18-512x288.jpg 512w, https://giahungland.vn/wp-content/uploads/2018/07/z1126168193207_0bbaaebdec32e3dad01f3b0085992b18-768x432.jpg 768w" sizes="(max-width: 960px) 100vw, 960px" />
                                <div className="container slide-caption">
                                    <div className="container">
                                        <div className="slide-caption-details"><h3><a href="gia-hung-ra-quan-du-an-cong-hoa-garden/index.html">Gia Hưng Land ra quân dự án Cộng Hòa Garden</a></h3>
                                            <div className="summary" /> <span className="btn-span"><i className="fa fa-tag" aria-hidden="true" /> </span>
                                            <Link to="/projectItem"><div className="btn giahung-btn">CHI TIẾT</div></Link></div>
                                    </div>
                                </div>
                                <div className="slide-mask" />
                            </div>
                            <div className="item "> <img width={1200} height={667} src="wp-content/uploads/2018/07/phoi-canh-cong-hoa-2.jpg" className="img-responsive wp-post-image" alt="" srcSet="https://giahungland.vn/wp-content/uploads/2018/07/phoi-canh-cong-hoa-2.jpg 1200w, https://giahungland.vn/wp-content/uploads/2018/07/phoi-canh-cong-hoa-2-512x285.jpg 512w, https://giahungland.vn/wp-content/uploads/2018/07/phoi-canh-cong-hoa-2-768x427.jpg 768w, https://giahungland.vn/wp-content/uploads/2018/07/phoi-canh-cong-hoa-2-1024x569.jpg 1024w" sizes="(max-width: 1200px) 100vw, 1200px" />
                                <div className="container slide-caption">
                                    <div className="container">
                                        <div className="slide-caption-details"><h3><a href="du-an/cong-hoa-garden/index.html">Cộng Hòa Garden -bất động sản sân bay chỉ 35tr/m2</a></h3>
                                            <div className="summary">Cộng Hòa Garden -bất động sản sân bay chỉ 35tr/m2</div> <span className="btn-span"><i className="fa fa-tag" aria-hidden="true" /> 35tr/m2</span>
                                            <Link to="/projectItem"><div className="btn giahung-btn">CHI TIẾT</div></Link></div>
                                    </div>
                                </div>
                                <div className="slide-mask" />
                            </div>
                        </div> <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"><i className="fa fa-angle-left" /></span> <span className="sr-only">Previous</span> </a> <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"> <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"><i className="fa fa-angle-right" /></span> <span className="sr-only">Next</span> </a>
                    </div>
                </section>
                <section className="new-duan">
                    <div className="container" style={{ marginTop: 20 }}>
                        <div className="row">
                            <legend> <span><i className="fa fa-caret-right" aria-hidden="true" /> CÁC DỰ ÁN MỚI <i className="fa fa-caret-left" aria-hidden="true" /></span></legend>
                            <div className="col-md-4 col-sm-6">
                                <div className="duan-loop">
                                    <div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="du-an/green-mark-dat-gia-quan-12/index.html"><div className="mask" /> <img width={338} height={228} src="wp-content/uploads/2018/10/green-mark-dat-gia-quan-12-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="green mark quan 12" /> </a></div>
                                    <div className="info-wrapper">
                                        <div className="info-inner"> <a href="du-an/green-mark-dat-gia-quan-12/index.html"><h2 className="duan-title">Mở bán dự án khu căn hộ Green Mark quận 12 – CDT Đạt Gia</h2></a>
                                            <div className="info-loop"><b>Giá:</b> <span>22tr/m2</span></div>
                                            <div className="info-loop"><b>Vị trí:</b> Lê Thị Riêng, Quận 12</div>
                                            <div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/%20-%20M%e1%bb%9f%20b%c3%a1n%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20Green%20Mark%20qu%e1%ba%adn%2012%20%e2%80%93%20CDT%20%c4%90%e1%ba%a1t%20Gia"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/&media=https://giahungland.vn/wp-content/uploads/2018/10/green-mark-dat-gia-quan-12.jpg&description=M%e1%bb%9f%20b%c3%a1n%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20Green%20Mark%20qu%e1%ba%adn%2012%20%e2%80%93%20CDT%20%c4%90%e1%ba%a1t%20Gia"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <Link to="/project"><div className="read-btn">CHI TIẾT</div></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="duan-loop">
                                    <div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="du-an/dat-gia-apartment-quan-12/index.html"><div className="mask" /> <img width={338} height={228} src="wp-content/uploads/2018/10/D%e1%bb%b1-%c3%a1n-c%c4%83n-h%e1%bb%99-%c4%90%e1%ba%a1t-Gia-Aparment-qu%e1%ba%adn-12-2-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="" /> </a></div>
                                    <div className="info-wrapper">
                                        <div className="info-inner"> <a href="du-an/dat-gia-apartment-quan-12/index.html"><h2 className="duan-title">Booking dự án khu căn hộ Đạt Gia Apartment Quận 12 – CDT Đạt Gia</h2></a>
                                            <div className="info-loop"><b>Giá:</b> <span>22tr/m2</span></div>
                                            <div className="info-loop"><b>Vị trí:</b> khu Lê Thị Riêng, Quận 12</div>
                                            <div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/dat-gia-apartment-quan-12/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/dat-gia-apartment-quan-12/%20-%20Booking%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20%c4%90%e1%ba%a1t%20Gia%20Apartment%20Qu%e1%ba%adn%2012%20%e2%80%93%20CDT%20%c4%90%e1%ba%a1t%20Gia"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/dat-gia-apartment-quan-12/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/dat-gia-apartment-quan-12/&media=https://giahungland.vn/wp-content/uploads/2018/10/D%e1%bb%b1-%c3%a1n-c%c4%83n-h%e1%bb%99-%c4%90%e1%ba%a1t-Gia-Aparment-qu%e1%ba%adn-12-2.jpg&description=Booking%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20%c4%90%e1%ba%a1t%20Gia%20Apartment%20Qu%e1%ba%adn%2012%20%e2%80%93%20CDT%20%c4%90%e1%ba%a1t%20Gia"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <a href="du-an/dat-gia-apartment-quan-12/index.html"><div className="read-btn">CHI TIẾT</div></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="duan-loop">
                                    <div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="du-an/ascent-plaza/index.html"><div className="mask" /> <img width={338} height={228} src="wp-content/uploads/2018/09/ascent-plaza-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="the ascent plaza" /> </a></div>
                                    <div className="info-wrapper">
                                        <div className="info-inner"> <a href="du-an/ascent-plaza/index.html"><h2 className="duan-title">Mở bán dự án khu căn hộ Ascent Plaza Nơ Trang Long, Bình Thạnh</h2></a>
                                            <div className="info-loop"><b>Giá:</b> <span>38tr/m2</span></div>
                                            <div className="info-loop"><b>Vị trí:</b> MT Nơ Trang Long, Bình Thạnh</div>
                                            <div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/ascent-plaza/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/ascent-plaza/%20-%20M%e1%bb%9f%20b%c3%a1n%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20Ascent%20Plaza%20N%c6%a1%20Trang%20Long,%20B%c3%acnh%20Th%e1%ba%a1nh"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/ascent-plaza/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/ascent-plaza/&media=https://giahungland.vn/wp-content/uploads/2018/09/ascent-plaza.jpg&description=M%e1%bb%9f%20b%c3%a1n%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20Ascent%20Plaza%20N%c6%a1%20Trang%20Long,%20B%c3%acnh%20Th%e1%ba%a1nh"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <Link to="/project"><div className="read-btn">CHI TIẾT</div></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="duan-loop">
                                    <div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="du-an/can-ho-vo-dinh-apartment/index.html"><div className="mask" />
                                        <img width={338} height={228} src="wp-content/uploads/2018/10/can-ho-vo-dinh-quan-12-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="căn hộ võ đình quận 12" /> </a></div>
                                    <div className="info-wrapper">
                                        <div className="info-inner"> <a href="du-an/can-ho-vo-dinh-apartment/index.html"><h2 className="duan-title">Bảng Giá Căn hộ Võ Đình Apartment Lê Văn Khương Quận 12</h2></a>
                                            <div className="info-loop"><b>Giá:</b> <span>900tr</span></div>
                                            <div className="info-loop"><b>Vị trí:</b> Lê Văn Khương Quận 12</div>
                                            <div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/can-ho-vo-dinh-apartment/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/can-ho-vo-dinh-apartment/%20-%20B%e1%ba%a3ng%20Gi%c3%a1%20C%c4%83n%20h%e1%bb%99%20V%c3%b5%20%c4%90%c3%acnh%20Apartment%20L%c3%aa%20V%c4%83n%20Kh%c6%b0%c6%a1ng%20Qu%e1%ba%adn%2012"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/can-ho-vo-dinh-apartment/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/can-ho-vo-dinh-apartment/&media=https://giahungland.vn/wp-content/uploads/2018/10/can-ho-vo-dinh-quan-12.jpg&description=B%e1%ba%a3ng%20Gi%c3%a1%20C%c4%83n%20h%e1%bb%99%20V%c3%b5%20%c4%90%c3%acnh%20Apartment%20L%c3%aa%20V%c4%83n%20Kh%c6%b0%c6%a1ng%20Qu%e1%ba%adn%2012"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <Link to="/projectItem"><div className="read-btn">CHI TIẾT</div></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="duan-loop">
                                    <div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="du-an/hausalto/index.html"><div className="mask" />
                                        <img width={338} height={228} src="wp-content/uploads/2018/09/du-an-can-ho-hausalto-quan-9-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="khu căn hộ hausalto" srcSet="https://giahungland.vn/wp-content/uploads/2018/09/du-an-can-ho-hausalto-quan-9-338x228.jpg 338w, https://giahungland.vn/wp-content/uploads/2018/09/du-an-can-ho-hausalto-quan-9-512x344.jpg 512w, https://giahungland.vn/wp-content/uploads/2018/09/du-an-can-ho-hausalto-quan-9-768x516.jpg 768w, https://giahungland.vn/wp-content/uploads/2018/09/du-an-can-ho-hausalto-quan-9.jpg 800w" sizes="(max-width: 338px) 100vw, 338px" /> </a></div>
                                    <div className="info-wrapper">
                                        <div className="info-inner"> <a href="du-an/hausalto/index.html"><h2 className="duan-title">Ra mắt khu căn hộ Hausalto Quận 9, một dự án của EZ Land</h2></a>
                                            <div className="info-loop"><b>Giá:</b> <span>25tr/m2</span></div>
                                            <div className="info-loop"><b>Vị trí:</b> Liên Phường, Phú Hữu, Quận 9</div>
                                            <div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/hausalto/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/hausalto/%20-%20Ra%20m%e1%ba%aft%20khu%20c%c4%83n%20h%e1%bb%99%20Hausalto%20Qu%e1%ba%adn%209,%20m%e1%bb%99t%20d%e1%bb%b1%20%c3%a1n%20c%e1%bb%a7a%20EZ%20Land"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/hausalto/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/hausalto/&media=https://giahungland.vn/wp-content/uploads/2018/09/du-an-can-ho-hausalto-quan-9.jpg&description=Ra%20m%e1%ba%aft%20khu%20c%c4%83n%20h%e1%bb%99%20Hausalto%20Qu%e1%ba%adn%209,%20m%e1%bb%99t%20d%e1%bb%b1%20%c3%a1n%20c%e1%bb%a7a%20EZ%20Land"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <Link to="/projectItem"><div className="read-btn">CHI TIẾT</div></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="duan-loop">
                                    <div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="du-an/can-ho-eco-green-quan-7/index.html"><div className="mask" />
                                        <img width={338} height={228} src="wp-content/uploads/2018/07/eco-green-saigon-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="eco green quận 7" /> </a></div>
                                    <div className="info-wrapper">
                                        <div className="info-inner"> <a href="du-an/can-ho-eco-green-quan-7/index.html"><h2 className="duan-title">Khu căn hộ Eco Green Sài Gòn Quận 7 – tổ hợp căn hộ – khách sạn 5 sao</h2></a>
                                            <div className="info-loop"><b>Giá:</b> <span>45tr/m2</span></div>
                                            <div className="info-loop"><b>Vị trí:</b> Nguyễn Văn Linh, Quận 7</div>
                                            <div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/can-ho-eco-green-quan-7/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/can-ho-eco-green-quan-7/%20-%20Khu%20c%c4%83n%20h%e1%bb%99%20Eco%20Green%20S%c3%a0i%20G%c3%b2n%20Qu%e1%ba%adn%207%20%e2%80%93%20t%e1%bb%95%20h%e1%bb%a3p%20c%c4%83n%20h%e1%bb%99%20%e2%80%93%20kh%c3%a1ch%20s%e1%ba%a1n%205%20sao"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/can-ho-eco-green-quan-7/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/can-ho-eco-green-quan-7/&media=https://giahungland.vn/wp-content/uploads/2018/07/eco-green-saigon.jpg&description=Khu%20c%c4%83n%20h%e1%bb%99%20Eco%20Green%20S%c3%a0i%20G%c3%b2n%20Qu%e1%ba%adn%207%20%e2%80%93%20t%e1%bb%95%20h%e1%bb%a3p%20c%c4%83n%20h%e1%bb%99%20%e2%80%93%20kh%c3%a1ch%20s%e1%ba%a1n%205%20sao"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <Link to="/projectItem"><div className="read-btn">CHI TIẾT</div></Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                            <center style={{ marginTop: 10, marginBottom: 70 }}><a href="du-an/index.html"><button className="btn giahung-btn">Xem tất cả dự án <i className="fa fa-chevron-right" aria-hidden="true" /></button></a></center>
                        </div>
                    </div>
                </section>
                <section className="cta">
                    <div className="well well-lg" style={{ background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(wp-content/uploads/2017/06/hoc-nganh-kien-truc-o-dau-htt-edu-vn.jpg)', backgroundAttachment: 'fixed' }}>
                        <div className="container">
                            <div className="cta-content">Liên lạc ngay với nhân viên kinh doanh để được hỗ trợ nhanh nhất!</div>
                            <div className="cta-phone"><a href="tel:0907015588">0907 01 55 88</a></div>
                            <center style={{ marginTop: 30 }}><a href="#contact"><button style={{ background: 'none', color: 'inherit !important', border: 'none' }} className="btn giahung-btn">Form đăng ký nhận bảng giá <i className="fa fa-chevron-down" aria-hidden="true" /></button></a></center>
                        </div>
                    </div>
                </section>
                <section className="new-posts">
                    <div className="container">
                        <legend> <span><i className="fa fa-caret-right" aria-hidden="true" /> BÀI VIẾT MỚI <i className="fa fa-caret-left" aria-hidden="true" /></span></legend>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className>
                                    <div id="rpwwt-recent-posts-widget-with-thumbnails-2" className="rpwwt-widget"><h3 className="widget-title-h">TIN TỨC BẤT ĐỘNG SẢN</h3>
                                        <ul>
                                            <li><a href="chu-dau-tu-du-an-cong-hoa-garden/index.html"><img width={150} height={150} src="wp-content/uploads/2018/07/phoi-canh-cong-hoa-garden-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="cộng hòa garden" /><span className="rpwwt-post-title">Nói về Chủ đầu tư dự án Cộng Hòa Garden?</span></a>
                                                <div className="rpwwt-post-date">17/08/2018</div>
                                            </li>
                                            <li><a href="can-ho-binh-riverside/index.html"><img width={150} height={150} src="wp-content/uploads/2018/05/can-ho-binh-an-riverside-ha-do-quan-8-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="binh an riverside của hà đô" /><span className="rpwwt-post-title">Thông tin căn hộ Bình An Riverside tại quận 8 của tập đoàn Hà Đô</span></a>
                                                <div className="rpwwt-post-date">11/05/2018</div>
                                            </li>
                                            <li><a href="tuyen-dung-nhan-vien-kinh-doanh-bat-dong-san/index.html"><img width={150} height={150} src="wp-content/uploads/2017/07/gia-hung-land-2-12-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="Gia Hưng Land" /><span className="rpwwt-post-title">Tuyển dụng nhân viên kinh doanh bất động sản</span></a>
                                                <div className="rpwwt-post-date">19/04/2018</div>
                                            </li>
                                            <li><a href="mua-ban-cac-can-ho-tra-gop/index.html"><img width={150} height={150} src="wp-content/uploads/2018/02/ban-can-ho-tra-gop-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="bán căn hộ trả góp" /><span className="rpwwt-post-title">Hướng dẫn mua bán căn hộ trả góp tại TP.HCM</span></a>
                                                <div className="rpwwt-post-date">27/02/2018</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className>
                                    <div id="rpwwt-recent-posts-widget-with-thumbnails-3" className="rpwwt-widget"><h3 className="widget-title-h">PHÂN TÍCH – NHẬN ĐỊNH</h3>
                                        <ul>
                                            <li><a href="cau-cat-lai/index.html"><img width={150} height={150} src="wp-content/uploads/2017/07/du-an-cau-cat-lai-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="bất động sản nhơn trạch" /><span className="rpwwt-post-title">Dự án cầu cát lái, kịch bản nào cho bất động sản Nhơn Trạch</span></a>
                                                <div className="rpwwt-post-date">22/07/2017</div>
                                            </li>
                                            <li><a href="duong-vanh-dai-2/index.html"><img width={150} height={150} src="wp-content/uploads/2017/07/vanh-dai-150x150.gif" className="attachment-150x150 size-150x150 wp-post-image" alt="đường vành đai 2" /><span className="rpwwt-post-title">Cập nhật dự án đường vành đai 2 TP.HCM 2017</span></a>
                                                <div className="rpwwt-post-date">20/07/2017</div>
                                            </li>
                                            <li><a href="kinh-doanh-bat-dong-san/index.html"><img width={150} height={150} src="wp-content/uploads/2017/07/nguoi-nuoc-ngoai-mua-ban-nha-dat-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="" /><span className="rpwwt-post-title">Kinh doanh bất động sản</span></a>
                                                <div className="rpwwt-post-date">13/07/2017</div>
                                            </li>
                                            <li><a href="lo-gioi-la-gi-chi-gioi-duong-khi-mua-nha-dat-can-xem-ky/index.html"><img width={150} height={150} src="wp-content/uploads/2017/07/duong-gom-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="lộ giới" /><span className="rpwwt-post-title">Lộ giới là gì? Chỉ Giới Đường Đỏ – Khi mua nhà đất cần xem kỹ</span></a>
                                                <div className="rpwwt-post-date">13/07/2017</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className>
                                    <div id="rpwwt-recent-posts-widget-with-thumbnails-4" className="rpwwt-widget"><h3 className="widget-title-h">HOẠT ĐỘNG GIA HƯNG LAND</h3>
                                        <ul>
                                            <li><a href="gia-hung-ra-quan-du-an-cong-hoa-garden/index.html"><img width={150} height={150} src="wp-content/uploads/2018/10/z1126185878096_d338417b22ae9db600cdee793657706a-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="" /><span className="rpwwt-post-title">Gia Hưng ra quân dự án Cộng Hòa Garden</span></a>
                                                <div className="rpwwt-post-date">18/10/2018</div>
                                            </li>
                                            <li><a href="gia-hung-land-vua-phan-phoi-thanh-cong-du-high-intela-tai-quan-8/index.html"><img width={150} height={150} src="wp-content/uploads/2017/12/phoi-canh-du-an-can-ho-high-intela-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="phối cảnh dự án high intela" /><span className="rpwwt-post-title">Gia Hưng Land vừa phân phối thành công dự án High Intela tại Quận 8</span></a>
                                                <div className="rpwwt-post-date">17/01/2018</div>
                                            </li>
                                            <li><a href="gia-hung-land-han-hanh-lam-don-vi-phan-phoi-chinh-thuc-heaven-city-view/index.html"><img width={150} height={150} src="wp-content/uploads/2017/08/heaven-city-view-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="gia hưng land" /><span className="rpwwt-post-title">Gia Hưng Land hân hạnh làm đơn vị phân phối chính thức Heaven City View</span></a>
                                                <div className="rpwwt-post-date">18/08/2017</div>
                                            </li>
                                            <li><a href="mo-ban-dot-2-du-tara-residence-gia-hung-land/index.html"><img width={150} height={150} src="wp-content/uploads/2017/07/gia-hung-land-2-3-150x150.jpg" className="attachment-150x150 size-150x150 wp-post-image" alt="8h sáng, các Khách Mời đã đến tương đối đông đủ, không khí tại trung tâm hội nghị The Adora, Ngô Gia Tự" /><span className="rpwwt-post-title">Mở bán đợt 2 dự án Tara Residence – Gia Hưng Land</span></a>
                                                <div className="rpwwt-post-date">06/07/2017</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="contact" style={{ background: 'linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(wp-content/uploads/2018/08/cropped-c-Michael-Sch%c3%bctz-fotolia.com_.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <legend> Điền thông tin để nhận báo giá và tư vấn miễn phí</legend>
                            </div>
                            <div className="col-sm-7">
                                <div role="form" className="wpcf7" id="wpcf7-f1341-o1" lang="vi" dir="ltr">
                                    <div className="screen-reader-response" />
                                    <form action="https://giahungland.vn/#wpcf7-f1341-o1" method="post" className="wpcf7-form" noValidate="novalidate">
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

export default App;