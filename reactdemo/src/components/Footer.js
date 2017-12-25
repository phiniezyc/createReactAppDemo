import React from "react";



const Footer = (props) => {
    
    return (
        <div >
            {/* passing the prop this way works because it was passed from App, it's parent Component! */ }
            {/* functional/dumb components don't use this.  Just props. */}
            <h1 className="footer"> {props.footertest}</h1>
        </div>
    );
}
        


export default Footer;


