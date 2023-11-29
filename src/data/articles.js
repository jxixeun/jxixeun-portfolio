import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

function article_1() {
	return {
		date: "2023.01. ~ 2023.12.",
		title: "삼성 청년 SW 아카데미",
		description:
			"삼성 청년 SW 아카데미 9기 활동",
		infos: ["삼성, 고용노동부 주관 SW 역량 향상 교육 프로그램",
		"Java, 알고리즘, Servlet, Spring framework, Spring Boot, Vue.js, HTML/CSS/JavaScript에 대해서 학습했습니다.",
		"팀 프로젝트를 통한 협업 경험",
		"1학기 프로젝트 우수상, 2학기 프로젝트 우수상 수상",
		"우수 교육생으로 선정되어 삼성 신경영 30주년 국제 학술대회 참여"],
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of sdfsdf 2</h1>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2021.07. ~ 2021.08.",
		title: "HI-ARC",
		infos: ["컴퓨터공학과 소속 알고리즘 학회인 HI-ARC에 가입해 매학기 알고리즘 스터디에 참여했습니다.","C++ 기반 알고리즘 스터디에 참여했습니다."],
		style: ``,
		description:
			"홍익대학교 컴퓨터공학과 소속 알고리즘 학회",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "2020.05. ~ 2020.12.",
		title: "ICPC Sinchon Algorithm Camp",
		infos: ["대학교 프로그래밍 동아리 연합 알고리즘 캠프에 참여하였습니다. ", "C++ 기반 알고리즘 스터디에 참여했습니다."],
		style: ``,
		description:
			"신촌 대학교 프로그래밍 동아리 연합 알고리즘 캠프",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of sdfsdf 2</h1>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "2023.05.09 ~ 2023.05.11",
		title: "Ask Me Anything about Cloud Career",
		style: ``,
		description:
			"AWS 주관 Ask Me Anything about Cloud Career 행사",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of sdfsdf 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
