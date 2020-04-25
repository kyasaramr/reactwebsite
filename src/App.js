import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Header from './Components/HeaderComp/Header';
import Footer from './Components/FooterComp/Footer';
import MainPage from './Components/MainPage/MainPage';
import Blog1 from './Components/MainPage/Blog1';
import Blog2 from './Components/MainPage/Blog2';
import Blog3 from './Components/MainPage/Blog3';
import main from './Components/main';

import './JSX/Home.css';

class App extends Component {
    render() {
        return (
            <Router>

                <main/>
                <div className = "MainBody">
                    <Header/>
                    <hr/>
                    <Route exact path='/' component = {MainPage} />

                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
