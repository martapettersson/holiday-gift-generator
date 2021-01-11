import React, { useContext } from "react";
import { UserInputContext } from "../contexts/UserInputContext";
import { CMSKit } from "../data/CMSKit";
import PageGenerator from "../components/PageGenerator";

export default function RelationshipPage() {
	const { relationship, setRelationship } = useContext(UserInputContext);
	const data = CMSKit.relationship;

	return (
		<div>
			<PageGenerator
				data={data}
				stateGetter={relationship}
				stateSetter={setRelationship}
			/>
		</div>
	);
}
