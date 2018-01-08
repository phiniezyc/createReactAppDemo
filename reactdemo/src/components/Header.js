import React, { Component } from 'react';
import logo from '../logo.svg';




class Header extends Component {
    render() {
        return (
            <div className='headerDiv'>
                <header className="App-header" >
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {/* <p>{this.props.test}</p> */}
            </div>
        );
    }
}



export default Header;