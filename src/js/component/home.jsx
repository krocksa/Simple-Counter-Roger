import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<>
		<div class="row">
		<div class="col-sm-2 clock"><i class="far fa-clock"></i></div>
		<div class="col-sm-2">{props.digit6 % 10}</div>
		<div class="col-sm-2">{props.digit5 % 10}</div>
		<div class="col-sm-2">{props.digit4 % 10}</div>
		<div class="col-sm-2">{props.digit3 % 10}</div>
		<div class="col-sm-2">{props.digit2 % 10}</div>
		<div class="col-sm-2">{props.digit1 % 10}</div>
		</div>
		</>
	);
	Home.propTypes = {
		digit1: PropTypes.number,
		digit2: PropTypes.number,
		digit3: PropTypes.number,
		digit4: PropTypes.number,
		digit5: PropTypes.number,
		digit6: PropTypes.number
    };
};

export default Home;
