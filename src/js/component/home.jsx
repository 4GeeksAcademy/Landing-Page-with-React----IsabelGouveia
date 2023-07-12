import React from "react";
import NavBar from "./navBar";
import Jumbotron from "./Jumbotron";
import Card from "./cards";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div id="myDiv">
			<NavBar />
			<div className="container-fluid justify-content-center w-75">
				<Jumbotron />
				<div className="container">
					<Card description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore maxime odit error, accusantium cupiditate dolores exercitationem animi optio harum assumenda, nostrum quis iure! Qui consequuntur itaque voluptatum impedit cum?"/>
					<Card description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...accusantium cupiditate dolores exercitationem animi optio harum assumenda nostrum quis iure! Qui consequuntur itaque voluptatum impedit cum?"/>
					<Card description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore maxime odit error, accusantium cupiditate dolores exercitationem animi optio harum assumenda, nostrum quis iure! Qui consequuntur itaque voluptatum impedit cum?"/>
					<Card description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...accusantium cupiditate dolores exercitationem animi optio harum assumenda nostrum quis iure! Qui consequuntur itaque voluptatum impedit cum?"/>
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;
