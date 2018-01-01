import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';

import Body from './components/Body';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

class App extends Component {

    render() {
        return (
            <div>
                {/* <h1 testhead='test head'>Testing </h1> */}
                <Header/>
                <Body test="This is how you pass a variable" /> {/* Must use a parent component to pass to a child component that way! */}
                <SearchBar />
                <Footer footertest ="this is to test our footer" />


            </div>
        );
    }
}

export default App;
