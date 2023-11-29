import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/stack.css";

const Stack = (props) => {
	const { stacks } = props;

	return (
		<React.Fragment>
			<div className="all-stack-container">
				{stacks.map((stack, index) => (
					<div className="stack-container">
						<div className="stack-title">
							<span className="stack-name">{stack.title}</span>
						</div>
						<div className="stacklist">
							{stack.skill.map((item, index) => (
								<li>{item}</li>
							))}
						</div>
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export default Stack;
