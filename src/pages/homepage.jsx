import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
	faMicroblog,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Experience from "../components/homepage/experience";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import Summary from "../components/about/summary";
import Stack from "../components/stack/stack";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="name homepage-name">
									{INFO.homepage.name}
								</div>
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									<div>{INFO.homepage.description}</div>
									<div>{INFO.homepage.description2}</div>
									<div>{INFO.homepage.description3}</div>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faPaperPlane}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.tistory}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMicroblog}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<div className="section-title">Stacks</div>
							<Stack stacks={INFO.stacks} />
						</div>

						<div className="homepage-projects">
							<div className="section-title">Skills</div>
							<Summary />
						</div>

						<div className="homepage-projects">
							<div className="section-title">Projects</div>
							<AllProjects />
						</div>

						<div className="homepage-articles">
							<div className="section-title">Activities</div>
							{myArticles.map((article, index) => (
								<div
									className="homepage-article"
									key={(index + 1).toString()}
								>
									<Experience
										key={(index + 1).toString()}
										date={article().date}
										title={article().title}
										description={article().description}
										link={"/article/" + (index + 1)}
										infos={article().infos}
									/>
								</div>
							))}
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
