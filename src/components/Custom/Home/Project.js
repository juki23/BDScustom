import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchProjectRequest } from './../../../actions/index';

class Project extends Component {
    componentDidMount() {
        this.props.onGetProject();
    };

    render() {
        var { project } = this.props;
        return (
            <section className="new-duan">
                <div className="container" style={{ marginTop: 20 }}>
                    <div className="row">
                        <legend> <span>
                            <i className="fa fa-caret-right" aria-hidden="true" /> CÁC DỰ ÁN MỚI
                            <i className="fa fa-caret-left" aria-hidden="true" />
                        </span></legend>
                        {this.showProject(project)}
                        <div className="clearfix" />
                        <center style={{ marginTop: 10, marginBottom: 70 }}>
                            <Link to="/project">
                                <button className="btn giahung-btn">Xem tất cả dự án
                                <i className="fa fa-chevron-right" aria-hidden="true" />
                                </button>
                            </Link>
                        </center>
                    </div>
                </div>
            </section>
        );
    };

    showProject = (project) => {
        var result = [];
        if (project.length <= 0) return result;
        result = project.map((proj, index) => {
            return (
                <div className="col-md-4 col-sm-6" key={index}>
                    <div className="duan-loop">
                        <div className="loop-img-wrapper">
                            <Link to={`/project/item/${proj.id}`} style={{ textAlign: 'center' }}><div className="mask" />
                                <img width={338} height={228} src={require("./../../App/wp-content/uploads/2018/10/green-mark-dat-gia-quan-12-338x228.jpg")} className="attachment-custom-duan size-custom-duan wp-post-image" alt="green mark quan 12" />
                            </Link>
                        </div>
                        <div className="info-wrapper">
                            <div className="info-inner">
                                <Link to={`/project/item/${proj.id}`}>
                                    <h2 className="duan-title">{proj.project_name}</h2>
                                </Link>
                                <div className="info-loop"><b>Giá:</b> <span>{proj.price}</span></div>
                                <div className="info-loop"><b>Vị trí:</b> {proj.address}</div>
                                <div className="social-loop">
                                    <a target="_blank" href="https://www.facebook.com/">
                                        <i className="fa fa-facebook" aria-hidden="true" /></a>
                                </div>
                                <Link to={`/project/item/${proj.id}`}>
                                    <div className="read-btn">CHI TIẾT</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
        return result;
    }
}


const mapStateToProps = state => {
    return {
        project: state.project
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProject: () => {
            dispatch(actFetchProjectRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);