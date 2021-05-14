import React from "react";
import checkIcon from "../images/icon-check.svg";

class Pricing extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			discount: false,
			price: 16.00,
			views: "100K"
		};
	}

	handleChange(e) {
		var value = e.target.value;

		if (value >= 1 && value < 13) {
			// e.target.value = 1
			this.setState({ 
				price: 8.00,
				views: "10K" 
			})
		} 
		else if (value >= 13 && value < 37) {
			// e.target.value = 25
			this.setState({ 
				price: 12.00,
				views: "50K"
			})
		} 
		else if (value >= 37 && value < 62) {
			// e.target.value = 50
			this.setState({ 
				price: 16.00,
				views: "100K"
			})
		} 
		else if (value >= 62 && value <= 87) {
			// e.target.value = 75
			this.setState({ 
				price: 24.00,
				views: "500K"
			})
		} 
		else if (value >= 87) {
			// e.target.value = 100
			this.setState({
				price: 36.00,
				views: "1M"
			})
		}

		var color = "linear-gradient(90deg, var(--soft-cyan)"
			+ value + "%, var(--light-grayish-blue-slider)" + value + "%)";
		e.target.style.background = color;
	}

	toggleDiscount() {
		if (this.state.discount === false) {
			this.setState({ discount: true })
		} else {
			this.setState({ discount: false })
		}
	}

	render() {
		return (
			<div className="card container">
				<div className="pricing">
					<div className="container">

						<div className="row">
							<p className="pricing__views">
							<span className="slider-views"></span> 
							{this.state.views} PAGEVIEWS
							</p>

							<div className="slider-dollars__container--desktop">
								<span className="slider-dollars">
								{this.state.discount
									? `$${(this.state.price * 0.75).toFixed(2)}`
									: `$${this.state.price.toFixed(2)}` }
								</span>
								<p className="slider-dollars__month">/ month</p>
							</div>
						</div>
						
						<div className="slider-container">
							<input 
							type="range"
							min="1"
							max="100"
							defaultValue="50"
							className="slider"		
							onChange={(e) => this.handleChange(e) } 
							/>
						</div>

						<div className="slider-dollars__container--mobile">
							<span className="slider-dollars">
							{this.state.discount
								? `$${(this.state.price * 0.75).toFixed(2)}`
								: `$${this.state.price.toFixed(2)}` }
							</span>
							<p className="slider-dollars__month">/ month</p>
						</div>

						<div className="billing">
							<p className="billing__text">
							Monthly Billing
							</p>
							<label className="switch">
							  <input 
							  type="checkbox" 
							  onClick={() => this.toggleDiscount() }/>
							  <span className="toggle round"></span>
							</label>
							<p className="billing__text">
							Yearly Billing
							</p>
							<p className="billing__discount billing__discount--mobile">
							-25%
							</p>
							<p className="billing__discount billing__discount--desktop">
							25% discount
							</p>
						</div>

					</div>
				</div>



				<div className="action-call">
					<div className="container">
						<div className="action-call__column">
							
							<div className="action-call__bullets">
								<div className="action-call__item">
									<img 
									className="action-call__check"
									src={checkIcon}
									alt="check" />
									<p className="action-call__text">
									Unlimited websites
									</p>
								</div>

								<div className="action-call__item">
									<img 
									className="action-call__check"
									src={checkIcon}
									alt="check" />
									<p className="action-call__text">
									100% data ownership
									</p>
								</div>

								<div className="action-call__item">
									<img 
									className="action-call__check"
									src={checkIcon}
									alt="check" />
									<p className="action-call__text">
									Email reports
									</p>
								</div>
							</div>

							<button className="btn">
							Start my trial
							</button>
						
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default Pricing