import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';

import Body from './components/Body';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Push from './components/Push';
import NavBar from './components/NavBar';
import ModalComponent from './components/Modal';
import JumbotronMaterialize from './components/JumbotronMaterialize';

class App extends Component {

    render() {
        return (
            <div>
                {/* <h1 testhead='test head'>Testing </h1> */}
                <Header/>
                <ModalComponent />
                <NavBar/>
                <Body test="This is how you pass a variable" /> {/* Must use a parent component to pass to a child component that way! */}
                <SearchBar />
                <JumbotronMaterialize />

                <Push />
                <Footer footertest ="this is to test our footer" />


            </div>
        );
    }
}

export default App;
