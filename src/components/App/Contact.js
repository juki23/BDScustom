import React, { Component } from 'react';
import { actAddContactRequest } from './../../actions/index';
import { connect } from 'react-redux';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtContactName: '',
            txtPhone: '',
            txtEmail: '',
            txtContent: '',
        };
    };

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { txtContactName, txtPhone, txtEmail, txtContent } = this.state;
        var contact = {
            contact_name: txtContactName,
            phone: txtPhone,
            email: txtEmail,
            content: txtContent,
            status: 0,
            create_time: new Date(),
            update_time: null
        };
        this.props.onAddContact(contact);
        alert("Thông tin đã được gửi đi !!!!!!!");
        this.setState({
            txtContactName: '',
            txtPhone: '',
            txtEmail: '',
            txtContent: '',
        })
    };

    render() {
        var { txtContactName, txtPhone, txtEmail, txtContent } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <legend> Điền thông tin để nhận báo giá và tư vấn miễn phí</legend>
                    </div>
                    <div className="col-sm-7">
                        <div role="form" className="wpcf7" id="wpcf7-f1341-o1" lang="vi" dir="ltr">
                            <div className="screen-reader-response" />
                            <form onSubmit={this.onSave} noValidate="novalidate">
                                <p>
                                    <span className="wpcf7-form-control-wrap your-name">
                                        <input
                                            type="text"
                                            size={40}
                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                            placeholder="Họ tên *"
                                            name="txtContactName"
                                            value={txtContactName}
                                            onChange={this.onChange} />
                                    </span>
                                </p>
                                <div className="row" style={{ marginBottom: 10 }}>
                                    <div className="col-sm-6">
                                        <span className="wpcf7-form-control-wrap your-phone">
                                            <input
                                                type="tel"
                                                size={40}
                                                className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control"
                                                placeholder="Số điện thoại *"
                                                name="txtPhone"
                                                value={txtPhone}
                                                onChange={this.onChange} />
                                        </span>
                                    </div>
                                    <div className="col-sm-6">
                                        <span className="wpcf7-form-control-wrap your-email">
                                            <input
                                                type="email"
                                                size={40}
                                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email form-control"
                                                placeholder="Địa chỉ Email"
                                                name="txtEmail"
                                                value={txtEmail}
                                                onChange={this.onChange} />
                                        </span>
                                    </div>
                                </div>
                                <p>
                                    <span className="wpcf7-form-control-wrap your-message">
                                        <textarea
                                            name="your-message"
                                            cols={40}
                                            rows={3}
                                            className="wpcf7-form-control wpcf7-textarea form-control"
                                            placeholder="Nội dung"
                                            name="txtContent"
                                            value={txtContent}
                                            onChange={this.onChange} />
                                    </span>
                                </p>
                                <p><input type="submit" defaultValue="Gửi đi" className="wpcf7-form-control wpcf7-submit btn-warning btn giahung-btn" /></p>
                                <div className="wpcf7-response-output wpcf7-display-none" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddContact: (contact) => {
            dispatch(actAddContactRequest(contact));
        }
    }
}

export default connect(null, mapDispatchToProps)(Contact);
