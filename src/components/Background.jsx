import React from "react";
import backgroundImage from "../images/bg-pattern.svg";

class Background extends React.Component {
	render() {
		return (
			<img
			className="background-image"
			src={backgroundImage}
			alt="" />
		)
	}
}

export default Background