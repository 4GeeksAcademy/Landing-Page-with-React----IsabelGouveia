import React from "react";

const footerStyle = {
    color: "white",
    textAlign: "center"
}

const Footer = (props) => {
    return (
        <div className="card bg-dark">
            <div className="card-body">
                <p className="card-text" style= {footerStyle}>Copyright © Your Website 2023</p>
            </div>
        </div>
    )
}

export default Footer;