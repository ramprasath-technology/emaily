import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';

const Landing = () => { return <div> Landing </div> }
const Survey = () => { return <div> Survey </div> }

class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" component={Landing} />
                        <Route exact path="/surveys" component={Survey} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);