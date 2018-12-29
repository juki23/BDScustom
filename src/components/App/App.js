import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchDistrictRequest } from './../../actions/index';
import routes from './routes';
import Header from './Header';
import Footer from './Footer';

import './wp-content/cache/autoptimize/css/autoptimize.css';
import './wp-content/cache/autoptimize/js/autoptimize';

class App extends Component {
    componentDidMount() {
        this.props.onGetDistrict();
    };

    render() {
        var { district } = this.props;

        return (
            <HashRouter>
                <div className="home page-template page-template-page-home page-template-page-home-php page page-id-1330 wp-custom-logo">
                    <div id="fb-root" />
                    <Header district={district} />
                    {/* Container */}
                    {this.showContentMenus(routes)}
                    {/* End */}
                    <Footer district={district} />
                </div>
            </HashRouter>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

const mapStateToProps = state => {
    return {
        district: state.district
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetDistrict: (district) => {
            dispatch(actFetchDistrictRequest(district));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);