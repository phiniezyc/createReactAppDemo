import React, {Component} from "react";

class Body extends Component {
    render() {
        // console.log(this);
        return (
            <div className="container">
                <div className="bodyText row">
                    <div>
                        <h1 className="flow-text">TEST: {this.props.test}</h1>

                    </div>

                </div>
            </div>
        );
    }
}

export default Body;