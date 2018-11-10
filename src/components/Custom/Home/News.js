import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchNewsRequest } from './../../../actions/index';

class News extends Component {
    componentDidMount() {
        this.props.onGetNews();
    };

    render() {
        var { news } = this.props;

        return (
            <section className="new-posts">
                <div className="container">
                    <legend> <span><i className="fa fa-caret-right" aria-hidden="true" /> BÀI VIẾT MỚI <i className="fa fa-caret-left" aria-hidden="true" /></span></legend>
                    <div className="row">
                        <div className="col-sm-12">
                            <div>
                                <div id="rpwwt-recent-posts-widget-with-thumbnails-2" className="rpwwt-widget">
                                    <h3 className="widget-title-h">TIN TỨC BẤT ĐỘNG SẢN</h3>
                                    <ul>
                                        {this.showNews(news)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    showNews = (news) => {
        var result = [];
        if (news.length > 0) {
            result = news.map((ne, index) => {
                return (
                    <li key={index}>
                        <Link to="/news">
                            <img width={150} height={150} src={require("./../../App/wp-content/uploads/2018/07/phoi-canh-cong-hoa-garden-150x150.jpg")} className="attachment-150x150 size-150x150 wp-post-image" alt="cộng hòa garden" />
                            <span className="rpwwt-post-title">{ne.title}</span>
                        </Link>
                        <div className="rpwwt-post-date">{ne.create_time}</div>
                    </li>
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