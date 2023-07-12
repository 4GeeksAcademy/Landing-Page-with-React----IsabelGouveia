import React from "react";

const navStyle = {
    display: "flex",
    justifyContent: "flex-end",

}

const NavBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid w-75">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={navStyle}>
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">About</a>
                        <a className="nav-item nav-link" href="#">Services</a>
                        <a className="nav-item nav-link" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default NavBar;
