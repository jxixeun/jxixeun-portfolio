import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myProjects from "../data/projects";

import "./styles/readProject.css";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

let ArticleStyle = styled.div``;

const ReadProject = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myProjects[slug - 1];

	const StyledLink = styled.a`
		padding-left: 5px;
		font-size: 16px;
		font-weight: 600;
		text-decoration-line: none;
		color: #52525b;
		display: inline;
		box-shadow: inset 0 -10px 0 ${article().linkcolor};

		&:hover {
			color: ${article().hovercolor}; // hover 상태의 색상
			transition: color 0.3s ease-in-out;
		}
	`;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	ArticleStyle = styled.div`
		${article().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-wrapper">
							<div className="title read-article-title">
								{article().title}
							</div>
							<div className="read-article-info-container">
								<div className="read-article-date">
									{article().period}
								</div>
								<div className="read-article-date">
									{article().team}
								</div>
								<div className="read-article-date">
									{article().role}
								</div>
							</div>
							<div className="read-article-body">
								<img
									src={article().thumbnail_image}
									alt="project thumbnail"
									class="project-image"
								/>
								<div class="links">
									{article().links.map((data, index) => (
										<div>
											<StyledLink href={data.url}>
												<FontAwesomeIcon
													icon={faLink}
												/>{" "}
												{data.info}
											</StyledLink>
										</div>
									))}
								</div>

								<div class="project-description">
									{article().long_description}
								</div>
								<h2>🛠️ 기술 스택</h2>
								<div class="stacks">
									{article().stacks.map((data, index) => (
										<li>{data}</li>
									))}
								</div>
								<h2>👨‍🔧 아키텍처 다이어그램</h2>
								<img
									class="architecture-image"
									src={article().architecture_image}
								/>
								<h2>🙋‍♀️ 맡은 역할</h2>
								{article().develop_role.map((data, index) => (
									<li>{data}</li>
								))}
								<h2>💻 개발 내용</h2>
								<ArticleStyle>
									{article().develop_content}
								</ArticleStyle>
								<h2>✍️ 회고</h2>
								<ArticleStyle>{article().review}</ArticleStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadProject;
