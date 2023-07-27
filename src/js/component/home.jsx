import React from "react";
import Proptypes from "prop-types"
import SimpleCounter from "./simpleCounter";
//create your first component

const Home = ({counter}) => {

	function calculateSeconds (aCounter, placeValue){
		return Math.floor(aCounter / placeValue) %10
	}

	return (
		<>
				<SimpleCounter
				hundredThousandsDigit={calculateSeconds(counter, 100000)}
				tenThousandsDigit={calculateSeconds(counter, 10000)}
				thousandsDigit={calculateSeconds(counter, 1000)}
				hundredsDigit={calculateSeconds(counter, 100)}
				tensDigit={calculateSeconds(counter, 10)}
				onesDigit={calculateSeconds(counter, 1)}/>

			
		</>

	);
};
Home.Proptypes = {
	counter: Proptypes.number
}

export default Home;
