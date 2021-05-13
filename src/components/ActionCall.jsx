import React from "react";
import checkIcon from "../images/icon-check.svg";

class ActionCall extends React.Component {
	render() {
		return (
			<div className="action-call container">

				<div className="row">
					<img 
					className="action-call__check"
					src={checkIcon}
					alt="check" />
					<p>Unlimited websites</p>
				</div>

				<div className="row">
					<img 
					className="action-call__check"
					src={checkIcon}
					alt="check" />
					<p>100% data ownership</p>
				</div>

				<div className="row">
					<img 
					className="action-call__check"
					src={checkIcon}
					alt="check" />
					<p>Email reports</p>
				</div>

				<button className="btn">
				Start my trial
				</button>

			</div>
		)
	}
}

export default ActionCall