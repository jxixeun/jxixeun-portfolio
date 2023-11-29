import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// import "./styles/project.css";

import "./styles/summary.css";
import mySummary from "../../data/summary";

const Summary = (props) => {
	const { backend, frontend, software } = props;

	return (
		<React.Fragment>
			<div className="summary">
				<div className="summary-container">{mySummary().body}</div>
			</div>
		</React.Fragment>
	);
};

export default Summary;
