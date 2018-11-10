import React, { Component } from 'react';
import { actGetNewsRequest } from './../../actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NewsItem extends Component {
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onGetNews(id);
        };
    };

    render() {
        var { newsItem } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="featured-img" style={{ backgroundImage: 'url(../wp-content/uploads/2018/07/phoi-canh-cong-hoa-garden.jpg)', backgroundAttachment: 'fixed', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                            <div className="page-title">
                                <h1>{newsItem.title}</h1>
                            </div>
                            <div style={{ display: 'inline-block', verticalAlign: 'middle', position: 'relative', marginBottom: 20 }} className="social-wrapper">
                                <div style={{ position: 'absolute', top: '-2px', right: '-50px' }} className="fb-like" data-href="https://giahungland.vn/chu-dau-tu-du-an-cong-hoa-garden/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="false" />
                            </div>
                        </div>
                        <div className="col-md-10 col-md-offset-1">
                            <section className="page-section">
                                <div className="detail-content">
                                    <div className="single-post">
                                        <div className="post-content">
                                            <article dangerouslySetInnerHTML={{ __html: newsItem.description }}>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-md-12" style={{ marginTop: 60 }}>
                            <div style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 10, fontSize: 15 }} className="social-content"><b>LIKE
            ĐỘNG VIÊN: <b /></b></div><b><b>
                                <div style={{ display: 'inline-block', verticalAlign: 'middle', position: 'relative' }} className="social-wrapper">
                                    <div style={{ position: 'absolute', top: '-2px', right: '-50px' }} className="fb-like" data-href="https://giahungland.vn/chu-dau-tu-du-an-cong-hoa-garden/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="false" />
                                </div>
                                <div className="post-info" />
                                <hr />
                            </b></b></div><b><b>
                            </b></b></div><b><b>
                                <div className="row">
                                    <section style={{ marginTop: 80 }}>
                                        <legend> <span><i className="fa fa-caret-right" aria-hidden="true" /><a style={{ color: '#445064' }} href="../du-an/index.html">
                                            CÁC DỰ ÁN MỚI </a><i className="fa fa-caret-left" aria-hidden="true" /></span></legend>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="duan-loop">
                                                <div className="loop-img-wrapper"> <a style={{ textAlign: 'center' }} href="../du-an/green-mark-dat-gia-quan-12/index.html">
                                                    <div className="mask" /> <img width={338} height={228} src="../wp-content/uploads/2018/10/green-mark-dat-gia-quan-12-338x228.jpg" className="attachment-custom-duan size-custom-duan wp-post-image" alt="green mark quan 12" />
                                                </a></div>
                                                <div className="info-wrapper">
                                                    <div className="info-inner"> <a href="../du-an/green-mark-dat-gia-quan-12/index.html">
                                                        <h2 className="duan-title">Mở bán dự án khu căn hộ Green Mark quận 12 – CDT Đạt Gia</h2>
                                                    </a>
                                                        <div className="info-loop"><b>Giá:</b> <span>22tr/m2</span></div>
                                                        <div className="info-loop"><b>Vị trí:</b> Lê Thị Riêng, Quận 12</div>
                                                        <div className="social-loop"> <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/"><i className="fa fa-facebook" aria-hidden="true" /></a> <a target="_blank" href="https://twitter.com/home?status=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/%20-%20M%e1%bb%9f%20b%c3%a1n%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20Green%20Mark%20qu%e1%ba%adn%2012%20%e2%80%93%20CDT%20%c4%90%e1%ba%a1t%20Gia"><i className="fa fa-twitter" aria-hidden="true" /></a> <a target="_blank" href="https://plus.google.com/share?url=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/"><i className="fa fa-google-plus" aria-hidden="true" /></a> <a target="_blank" href="https://pinterest.com/pin/create/button/?url=https://giahungland.vn/du-an/green-mark-dat-gia-quan-12/&media=https://giahungland.vn/wp-content/uploads/2018/10/green-mark-dat-gia-quan-12.jpg&description=M%e1%bb%9f%20b%c3%a1n%20d%e1%bb%b1%20%c3%a1n%20khu%20c%c4%83n%20h%e1%bb%99%20Green%20Mark%20qu%e1%ba%adn%2012%20%e2%80%93%20CDT%20%c4%90%e1%ba%a1t%20Gia"><i className="fa fa-pinterest" aria-hidden="true" /></a></div> <a href="../du-an/green-mark-dat-gia-quan-12/index.html">
                                                            <div className="read-btn">CHI TIẾT</div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                    </section>
                                </div>
                            </b>
                    </b>
                </div><b><b></b></b>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        newsItem: state.newsItem
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetNews: (id) => {
            dispatch(actGetNewsRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);