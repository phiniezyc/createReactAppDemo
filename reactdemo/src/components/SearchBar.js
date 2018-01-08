import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            // Can set specific default values also!
            input: "The text you type will show up here!",
        };
    }
    render() {
        return (
            <div className="search">
                {/* we can use this.state.input to reference but don't use to set!use setState */}
                <h1> {this.state.input} </h1> 
                <input onChange={event => this.setState({input: event.target.value})}/> 
                
            </div>
        );
    }
}


export default SearchBar;