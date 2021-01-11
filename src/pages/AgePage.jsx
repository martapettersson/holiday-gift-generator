import React, { useContext } from "react";
import { UserInputContext } from "../contexts/UserInputContext";
import { CMSKit } from "../data/CMSKit";
import PageGenerator from "../components/PageGenerator";

export default function AgePage() {
	const { age, setAge } = useContext(UserInputContext);
	const data = CMSKit.age;

	return (
		<div>
			<PageGenerator data={data} stateGetter={age} stateSetter={setAge} />
		</div>
	);
}

{
	/* <div className="form-check">
	<input
		className="form-check-input"
		type="radio"
		name="age"
		id="a"
		value="a"
		onChange={handleOnChange}
		defaultChecked={age === "a"}
	/>
	<label className="form-check-label" htmlFor="a">
		Younger than 25
	</label>
</div>; */
}
