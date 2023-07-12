import React from "react";

const jumbotronStyle = {
  padding: "10px",

}

const Jumbotron = (props) => {

  return (
    <div className="container alert alert-secondary" role="alert">
      <div className="jumbotron">
        <h1 className="display-4 text-black">A Warm Welcome!</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores praesentium quas natus unde deleniti. Ducimus veniam rem nesciunt aliquam non consequuntur sequi quos eius reiciendis nobis? Non, quam incidunt.</p>
        <button type="button" className="btn btn-primary ">Call to Action!</button>
      </div>
    </div>
  )


}




export default Jumbotron;