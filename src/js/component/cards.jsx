import React from "react";
import PropTypes from 'prop-types';

const cardStyle = {
    textAlign: "center",
    width: "230px",
    border: "none",
    borderRadius: "0",
}

const Card = (props) => {
    return (
        <div className="card d-inline-block mx-1" style={cardStyle}>
            <img className="card-img-top" src="https://via.placeholder.com/500x325.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    description: PropTypes.string,

}



export default Card;
