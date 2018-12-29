import React, { Component } from 'react';
import { actGetProjectRequest } from './../../actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProjectNew from './ProjectNew';

class ProjectItem extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onGetProject(id);
        };
    };

    render() {
        var { projectItem } = this.props;
        return (
            <div>
                <div className="container">
                    <section className="theme-slider">
                        <div id="carousel-example-generic">
                            <div className="carousel-inner" role="listbox">
                                <div className="item active"> <img width={768} height={501} src="../../wp-content/uploads/2018/10/green-mark-dat-gia-quan-12.jpg" className="img-responsive wp-post-image" srcSet="https://giahungland.vn/wp-content/uploads/2018/10/green-mark-dat-gia-quan-12.jpg 768w, https://giahungland.vn/wp-content/uploads/2018/10/green-mark-dat-gia-quan-12-512x334.jpg 512w" sizes="(max-width: 768px) 100vw, 768px" />
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
                                            <article dangerouslySetInnerHTML={{ __html: projectItem.description }}>
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
                                <ProjectNew/>
                            </div>
                        </div><b><b>
                        </b></b>
                    </div><b><b>
                    </b></b>
                </section>
                <b><b>
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