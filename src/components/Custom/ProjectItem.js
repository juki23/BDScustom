import React, { Component } from 'react';
import { actGetProjectRequest } from './../../actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProjectItem extends Component {
    componentDidMount() {
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            this.props.onGetProject(id);
        };
    };
    
    render() {
        var {projectItem}= this.props;
        return (
            <div>
                <div className="container">
                    <section className="theme-slider">
                        <div id="carousel-example-generic">
                            <div className="carousel-inner" role="listbox">
                                <div className="item active"> <img width={768} height={501} src="../../wp-content/uploads/2018/10/green-mark-dat-gia-quan-12.jpg" className="img-responsive wp-post-image" alt srcSet="https://giahungland.vn/wp-content/uploads/2018/10/green-mark-dat-gia-quan-12.jpg 768w, https://giahungland.vn/wp-content/uploads/2018/10/green-mark-dat-gia-quan-12-512x334.jpg 512w" sizes="(max-width: 768px) 100vw, 768px" />
                                    <div className="slide-caption">
                                        <div className="container">
                                            <div className="slide-caption-details">
                                                <h3>{projectItem.project_name}</h3>
                                                <div className="summary">Nhận Booking dự án khu căn hộ Green Mark Quận 12 - chủ đầu tư Đạt Gia, giá chỉ 1 tỷ cho căn hộ 1PN</div>
                                                <div><b>Giá: {projectItem.price}</b></div>
                                                <div><b>Vị trí:</b> {projectItem.address}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-mask" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div style={{ display: 'inline-block', verticalAlign: 'middle', position: 'relative', marginTop: 20 }} className="social-wrapper">
                        <div className="fb-like" data-href="https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="false" style={{ marginBottom: 5, marginTop: '-10px' }} />
                    </div>
                </div>
                <section className="page-section" style={{ marginTop: 40 }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="detail-content">
                                    <div className="single-post">
                                        <div className="post-content">
                                            <article dangerouslySetInnerHTML={{__html: projectItem.description}}>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="single-info" style={{ marginTop: 60 }}>
                    <section className="cta">
                        <div className="well well-lg" style={{ background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../../wp-content/uploads/2017/06/hoc-nganh-kien-truc-o-dau-htt-edu-vn.jpg)', backgroundAttachment: 'fixed' }}>
                            <div className="container">
                                <div className="cta-content">Liên lạc ngay với nhân viên kinh doanh để được hỗ trợ nhanh nhất!</div>
                                <div className="cta-phone"><a href="tel:0907015588">0907 01 55 88</a></div>
                                <center style={{ marginTop: 30 }}><a href="#contact"><button style={{ background: 'none', color: 'inherit !important', border: 'none' }} className="btn giahung-btn">Form đăng ký nhận bảng giá <i className="fa fa-chevron-down" aria-hidden="true" /></button></a></center>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 10, fontSize: 15 }} className="social-content"><b>LIKE ĐỘNG VIÊN: <b /></b></div><div style={{ display: 'inline-block', verticalAlign: 'middle', position: 'relative' }} className="social-wrapper"><div className="fb-like" data-href="https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="false" style={{ marginBottom: 5, marginTop: '-10px' }} /></div><div className="post-info" /><hr /><b><b><legend> <span><i className="fa fa-caret-right" aria-hidden="true" /><a style={{ color: '#445064' }} href="../index.html"> CÁC DỰ ÁN MỚI </a><i className="fa fa-caret-left" aria-hidden="true" /></span></legend></b></b></div><div className="col-md-4 col-sm-6"><div className="duan-loop"><div className="loop-img-wrapper"><b><b> <a style={{ textAlign: 'center' }} href="index.html"><div className="mask" /> <img width={338} height={228} src="../../wp-content/uploads/2018/10/green-mark-dat-gia-quan-12-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="green mark quan 12" /> </a></b></b></div><div className="info-wrapper"><div className="info-inner"><b><b> <a href="index.html"><h2 className="duan-title">Mở bán dự án khu căn hộ Green Mark quận 12 – CDT Đạt Gia</h2></a><div className="info-loop"><b>Giá:</b> <span>22tr/m2</span></div>
                                    <div className="info-loop"><b>Vị trí:</b> Lê Thị Riêng, Quận 12</div>
                                    <div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/%20-%20M%e1%bb%9f%20b%c3%a1n%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20Green%20Mark%20qu%e1%ba%adn%2012%20%e2%80%93%20CDT%20%c4%90%e1%ba%a1t%20Gia"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/&media=https://giahungland.vn/wp-content/uploads/2018/10/green-mark-dat-gia-quan-12.jpg&description=M%e1%bb%9f%20b%c3%a1n%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20Green%20Mark%20qu%e1%ba%adn%2012%20%e2%80%93%20CDT%20%c4%90%e1%ba%a1t%20Gia"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <a href="index.html"><div className="read-btn">CHI TIẾT</div></a>
                                </b></b></div><b><b>
                                </b></b></div><b><b>
                                </b></b></div><b><b>
                                </b></b></div><b><b>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="duan-loop">
                                            <div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="../dat-gia-apartment-quan-12/index.html"><div className="mask" /> <img width={338} height={228} src="../../wp-content/uploads/2018/10/D%e1%bb%b1-%c3%a1n-c%c4%83n-h%e1%bb%99-%c4%90%e1%ba%a1t-Gia-Aparment-qu%e1%ba%adn-12-2-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt /> </a></div>
                                            <div className="info-wrapper">
                                                <div className="info-inner"> <a href="../dat-gia-apartment-quan-12/index.html"><h2 className="duan-title">Booking dự án khu căn hộ Đạt Gia Apartment Quận 12 – CDT Đạt Gia</h2></a>
                                                    <div className="info-loop"><b>Giá:</b> <span>22tr/m2</span></div>
                                                    <div className="info-loop"><b>Vị trí:</b> khu Lê Thị Riêng, Quận 12</div>
                                                    <div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/dat-gia-apartment-quan-12/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/dat-gia-apartment-quan-12/%20-%20Booking%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20%c4%90%e1%ba%a1t%20Gia%20Apartment%20Qu%e1%ba%adn%2012%20%e2%80%93%20CDT%20%c4%90%e1%ba%a1t%20Gia"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/dat-gia-apartment-quan-12/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/dat-gia-apartment-quan-12/&media=https://giahungland.vn/wp-content/uploads/2018/10/D%e1%bb%b1-%c3%a1n-c%c4%83n-h%e1%bb%99-%c4%90%e1%ba%a1t-Gia-Aparment-qu%e1%ba%adn-12-2.jpg&description=Booking%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20%c4%90%e1%ba%a1t%20Gia%20Apartment%20Qu%e1%ba%adn%2012%20%e2%80%93%20CDT%20%c4%90%e1%ba%a1t%20Gia"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <a href="../dat-gia-apartment-quan-12/index.html"><div className="read-btn">CHI TIẾT</div></a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                </b></b></div><b><b>
                                </b></b></div><b><b>
                                </b></b></section><b><b>
                                </b></b>
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
		projectItem: state.projectItem
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onGetProject: (id) => {
			dispatch(actGetProjectRequest(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);