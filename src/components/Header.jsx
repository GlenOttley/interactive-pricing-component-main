import React from "react";
import circlesImage from "../images/pattern-circles.svg";

class Header extends React.Component {
	render() {
		return (
			<header 
			className="header container"
			style={{
				backgroundImage: "url(" + circlesImage + ")",
				backgroundPosition: 'center 15px',
				backgroundSize: 'auto',
				backgroundRepeat: 'no-repeat'
			}}
			>
				<h3>Simple, traffic-based pricing</h3>
				<div className="header__text">
					<p>Sign-up for our 30-day trial.</p>
					<p>No credit card required.</p>
				</div>
			</header>
		)
	}
}

export default Header