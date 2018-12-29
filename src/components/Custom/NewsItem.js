import React, { Component } from 'react';
import { actGetNewsRequest } from './../../actions/index';
import { connect } from 'react-redux';
import ProjectNew from './ProjectNew';

class NewsItem extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
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
                            <div style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 10, fontSize: 15 }} className="social-content">
                                <b>LIKE ĐỘNG VIÊN:
                                <b /></b></div><b><b>
                                <div style={{ display: 'inline-block', verticalAlign: 'middle', position: 'relative' }} className="social-wrapper">
                                    <div style={{ position: 'absolute', top: '-2px', right: '-50px' }} className="fb-like" data-href="https://giahungland.vn/chu-dau-tu-du-an-cong-hoa-garden/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="false" />
                                </div>
                                <div className="post-info" />
                                <hr />
                            </b></b></div><b><b>
                            </b></b></div><b><b>
                                <div className="row">
                                    <ProjectNew />
                                </div>
                            </b></b></div><b><b>
                            </b></b>
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