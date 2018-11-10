import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Carousel extends Component {
    render() {
        return (
            <section className="home theme-slider">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-pause="null" data-interval={7000}>
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                            <li data-target="#carousel-example-generic" data-slide-to={1} />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active"> <img width={960} height={540} src={require("./../../App/wp-content/uploads/2018/07/z1126168193207_0bbaaebdec32e3dad01f3b0085992b18.jpg")} className="img-responsive wp-post-image" alt="" sizes="(max-width: 960px) 100vw, 960px" />
                                <div className="container slide-caption">
                                    <div className="container">
                                        <div className="slide-caption-details"><h3><a href="gia-hung-ra-quan-du-an-cong-hoa-garden/index.html">Gia Hưng Land ra quân dự án Cộng Hòa Garden</a></h3>
                                            <div className="summary" /> <span className="btn-span"><i className="fa fa-tag" aria-hidden="true" /> </span>
                                            <Link to="/projectItem"><div className="btn giahung-btn">CHI TIẾT</div></Link></div>
                                    </div>
                                </div>
                                <div className="slide-mask" />
                            </div>
                            <div className="item "> <img width={1200} height={667} src={require("./../../App/wp-content/uploads/2018/07/phoi-canh-cong-hoa-2.jpg")} className="img-responsive wp-post-image" alt="" sizes="(max-width: 1200px) 100vw, 1200px" />
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
        );
    }
}

export default Carousel;