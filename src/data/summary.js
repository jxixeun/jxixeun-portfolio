import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

function summary() {
	return {
		body: (
			<React.Fragment>
				<div className="summary-title">
					<span className="summary-name">Backend Engineering</span>
				</div>
				<div className="summary">
					<li>
						4개의 팀 프로젝트 개발 경험 (팀원 6명x3, 팀원 2명x1,
						Spring Boot 프로젝트)
					</li>
					<li>Spring Boot를 이용한 REST API 개발 경험</li>
					<li>
						Spring MVC 프로젝트 개발 경험{" "}
						<a href="https://xntifrxgile.tistory.com/67">
							<FontAwesomeIcon icon={faLink} /> (공부하며 정리한
							글)
						</a>
					</li>
					<li>
						MSA 개발 경험, RabbitMQ + Feign Cdivent를 이용해
						MicroService간 통신 경험
					</li>
					<li>
						MyBatis, Spring Data JPA, JPQL을 이용해 리포지토리 구현
						경험 (MySQL, MariaDB, MongoDB 사용)
					</li>
					<li>
						Docker와 Jenkins를 이용해 파이프라인 구축, AWS EC2에
						서버 배포 경험
					</li>
					<li>
						Amazon S3와 멀티파트를 이용한 파일 업로드 기능 개발 경험
					</li>
					<li>FCM을 이용한 알림 기능 개발 경험</li>
				</div>
				<div className="summary-title">
					<span className="summary-name">Software Development</span>
				</div>
				<div className="summary">
					<li>인수 테스트 주도 개발 경험 (ATDD)</li>
					<li>
						Junit, Mockito, Rest Assured, Jmeter를 이용해 테스트
						수행 경험
					</li>
					<li>
						SonarQube와 Jacoco를 이용해 정적 코드 분석 및 코드
						커버리지 측정 경험 (커버리지 목표 80%)
					</li>
					<li>
						애자일한 개발 경험 (스프린트 1주), 유저 피드백을 이용해
						기능 추가해 배포 후 업데이트 3번 진행 경험
					</li>
					<li>
						Jira를 이용해 프로젝트 관리, Github, Gitlab 사용 경험
					</li>
				</div>
				<div className="summary-title">
					<span className="summary-name">Frontend Engineering</span>
				</div>
				<div className="summary">
					<li>
						Vue.js를 이용한 팀 프로젝트를 통해 프론트엔드 개발 경험{" "}
						<a href="https://github.com/OvTrip/OvTrip_Frontend">
							<FontAwesomeIcon icon={faLink} /> [Github 링크]
						</a>
					</li>
				</div>
			</React.Fragment>
		),
	};
}

const mySummary = summary;

export default mySummary;
