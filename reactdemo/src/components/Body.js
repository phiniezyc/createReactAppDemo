import React, {Component} from "react";




class Body extends Component {
    render() {
        // console.log(this);
        return (
            <div className="App">
                <div>
                    <h1>TEST: {this.props.test}</h1>
                    
                
                </div>
                
            </div>
        );
    }
}



export default Body;