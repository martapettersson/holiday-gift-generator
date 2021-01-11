import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { UserInputContext } from "./contexts/UserInputContext";
import AgePage from "./pages/AgePage";
import Homepage from "./pages/Homepage";
import InterestPage from "./pages/InterestPage";
import RelationshipPage from "./pages/RelationshipPage";
import ResultPage from "./pages/ResultPage";

function App() {
	const [age, setAge] = useState("");
	const [interest, setInterest] = useState("");
	const [relationship, setRelationship] = useState("");

	const userInputContextValue = {
		age,
		setAge,
		interest,
		setInterest,
		relationship,
		setRelationship,
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1>Holiday Gift Generator</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<UserInputContext.Provider value={userInputContextValue}>
						<Switch>
							<Route path="/result">
								<ResultPage />
							</Route>
							<Route path="/relationship">
								<RelationshipPage />
							</Route>
							<Route path="/interest">
								<InterestPage />
							</Route>
							<Route path="/age">
								<AgePage />
							</Route>
							<Route path="/">
								<Homepage />
							</Route>
						</Switch>
					</UserInputContext.Provider>
				</div>
			</div>
		</div>
	);
}

export default App;
