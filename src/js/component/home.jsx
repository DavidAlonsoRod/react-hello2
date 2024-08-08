import React from "react";

//include images into your bundle
import Nav from "./nav";
import Jumbotron from "./jumbotron";
import Card from "./card";

//create your first component
const Home = () => {
	return (
		<>


			<div className="text-center justify-content-center">
				<Nav />
				<Jumbotron />
				{/* <div className="d-flex justify-content-around "> */}
				<div className="row card-row justify-content-center">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			{/* </div > */}

		</>
	);
};

export default Home;
