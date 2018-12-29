import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchNewsRequest } from './../../actions/index';

class News extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.onGetNews();
    };
    render() {
        var { news } = this.props;
        return (
            <div>
                <div className="post-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <legend> <span><i className="fa fa-caret-right" aria-hidden="true" /> Tin Tức BDS <i className="fa fa-caret-left" aria-hidden="true" /></span></legend>
                                {this.showNews(news)}
                                <div className="clearfix" />
                                <div className="page-nav">
                                    <div className="pages clearfix">
                                        <ul className="pagination">
                                            <li className="paginated_link active"><span aria-current="page" className="page-numbers current">1</span></li>
                                            <li className="paginated_link"><a className="page-numbers" href="page/2/index.html">2</a></li>
                                            <li className="paginated_link"><a className="page-numbers" href="page/3/index.html">3</a></li>
                                            <li className="paginated_link"><span className="page-numbers dots">…</span></li>
                                            <li className="paginated_link"><a className="page-numbers" href="page/7/index.html">7</a></li>
                                            <li className="paginated_link"><a className="next page-numbers" href="page/2/index.html">»</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showNews = (news) => {
        var result = [];
        if (news.length > 0) {
            result = news.map((ne, index) => {
                return (
                    <div className="post-block media" key={index}>
                        <div className="media-left">
                            <Link to={`/newsitem/${ne.id}`} rel="bookmark">
                                <img style={{ maxWidth: 210 }} className="media-object img-thumbnail" src={require("./../App/wp-content/uploads/2018/07/phoi-canh-cong-hoa-garden-210x150.jpg")} />
                            </Link>
                        </div>
                        <div className="media-body"><h3>
                            <Link to={`/newsitem/${ne.id}`} rel="bookmark">{ne.title}</Link></h3>
                            <p>Chủ đâu tư của dự án khu căn hộ Cộng Hòa Garden là ai? Đánh giá sự ảnh hưởng thời hạn sử dụng 42 năm tới bài toán về hiệu quả khai thác bất động sản. Có nên mua dự án Cộng Hòa Garden? Chủ đầu tư Cộng Hòa Garden? […]</p>
                            <div className="social-loop" style={{ float: 'left', margin: 0 }}>
                                <a target="_blank" href="https://www.facebook.com">
                                    <i className="fa fa-facebook" aria-hidden="true" /></a>
                            </div>
                            <Link to={`/newsitem/${ne.id}`} rel="bookmark" className="btn giahung-btn pull-right">Xem tiếp
                            <i className="fa fa-arrow-right" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                );
            });
        };
        return result;
    }
}

const mapStateToProps = state => {
    return {
        news: state.news
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetNews: () => {
            dispatch(actFetchNewsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);