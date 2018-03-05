import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    render() {
        if (!this.props.appState.get('authenticated')) {
            return (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: this.props.location}
                    }} />
            );
        }

        return (
            <div style={{textAlign: 'center', fontSize: '40px', marginTop: '45px'}}>
                👋🏻
            </div>
        );
    }
}

function propProvider(reduxState) {
    const { appState } = reduxState;

    return {
        appState
    };
}

export default connect(propProvider)(Home);

