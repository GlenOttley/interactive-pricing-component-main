import React from "react";
import Background from "./components/Background";
import Header from "./components/Header";
import Pricing from "./components/Pricing";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Background />
				<main className="main">
					<Header />
					<Pricing />
				</main>
			</div>
		)
	}
}

export default App;
