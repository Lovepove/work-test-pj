import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from 'js/components/App';

class AppContainer extends Component {
    render() {
        return (
           <App
           /> 
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
