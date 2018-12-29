import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchAboutRequest } from './../../actions/index';

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.onGetAbout();
    };

    render() {
        var { about } = this.props;
        return (
            <div>
                <div className="container">
                    <legend> <span><i className="fa fa-caret-right" aria-hidden="true" /> Liên hệ <i className="fa fa-caret-left" aria-hidden="true" /></span></legend>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <section className="page-section">
                                <div className=" detail-content">
                                    <div className="single-post">
                                        <div className="post-content">
                                            <article><h2>{about.length > 0 ? about[0].title : ""}</h2>
                                                <p>
                                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                                    &nbsp;{about.length > 0 ? about[0].address : ""}<br />
                                                    <i className="fa fa-phone" aria-hidden="true" />
                                                    <a href="tel:0907015588">
                                                    &nbsp;{about.length > 0 ? about[0].phone : ""}</a><br />
                                                    <i className="fa fa-envelope" aria-hidden="true" />
                                                    <a href="mailto:www.giahungland.vn@gmail.com">
                                                    &nbsp;{about.length > 0 ? about[0].email : ""}</a>
                                                </p>
                                                <div>&nbsp;</div>
                                                <div>&nbsp;</div>
                                                <div className="embed-responsive embed-responsive-16by9"><iframe style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.102964649496!2d106.71871931489208!3d10.80342549230317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b3071b32d34b2e2!2zQ3R5IFROSEggxJDhuqd1IFTGsCDEkOG7i2Eg4buQYyBHaWEgSMawbmcgTGFuZA!5e0!3m2!1sen!2s!4v1497687746460" width={800} height={600} frameBorder={0} allowFullScreen="allowfullscreen" /></div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="entry-meta" />
                                    <div id="comments" className="comments-area" />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        about: state.about
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetAbout: () => {
            dispatch(actFetchAboutRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);