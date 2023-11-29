import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/experience.css";

const Experience = (props) => {
	const { date, title, description, link, infos } = props;

	return (
		<React.Fragment>
			<div className="experience">
				<div className="experience-left-side">
					<div className="experience-date">{date}</div>
				</div>
				<div>
				<div className="experience-right-side">
						<div className="experience-title">{title}</div>
						<div className="experience-description">{description}</div>
						{infos && <div className="experience-infos">{infos.map((info, index) => (
								<li>{info}</li>
							))}</div>}
						<div className="article-link">
							Read Article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experience;
