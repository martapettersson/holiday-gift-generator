import React, { useContext } from "react";
import { UserInputContext } from "../contexts/UserInputContext";
import { CMSKit } from "../data/CMSKit";
import PageGenerator from "../components/PageGenerator";

export default function InterestPage() {
	const { interest, setInterest } = useContext(UserInputContext);
	const data = CMSKit.interest;

	return (
		<div>
			<PageGenerator
				data={data}
				stateGetter={interest}
				stateSetter={setInterest}
			/>
		</div>
	);
}
