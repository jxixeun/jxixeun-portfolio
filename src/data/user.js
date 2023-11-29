const INFO = {
	main: {
		title: "김지은, Portfolio",
		name: "Tharindu N.",
		email: "jxixeun@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/jxixeun",
		tistory: "https://xntifrxgile.tistory.com/",
		linkedin: "https://www.linkedin.com/in/jxixeun-714b55244",
	},

	homepage: {
		name: "김지은",
		title: "Backend Developer",
		description:
			"기능 요구사항을 명확히 이해하려 노력하며,안정성있는 코드를 위해 테스트 코드 작성에 유의하고 있습니다.",
		description2:
			"가독성있고 유지보수 쉬운 코드를 작성하기 위해 노력하고 있습니다.",
		description3:
			"‘함께 일하고 싶은 개발자’가 되는 것을 목표로 하고 있습니다.",
	},

	about: {
		title: "안녕하세요. 김지은입니다.",
		description: [
			"새로운 기술을 배우고 경험하는 것을 즐깁니다.",
			"도전적인 목표를 세우고 성취하는 것에 뿌듯함을 느낍니다.",
			"한 번 시작하면 끝까지 파고드는 기질을 갖고 있습니다.",
			"다양한 사람들을 만나고 소통하며 성장하는 것을 좋아합니다.",
		],
		backend: [
			"4개의 팀 프로젝트 개발 경험 (팀원 6명x3, 팀원 2명x1, Spring Boot 프로젝트)",
			"Spring Boot를 이용한 REST API 개발 경험",
			"Spring MVC 프로젝트 개발 경험 [(공부하며 정리한 글)](https://xntifrxgile.tistory.com/67)",
			"MSA 개발 경험, RabbitMQ + Feign Client를 이용해 MicroService간 통신 경험 (AWS EC2 2대 사용)",
			"MyBatis, Spring Data JPA, JPQL을 이용해 리포지토리 구현 경험 (MySQL, MariaDB, MongoDB 사용)",
			"Docker와 Jenkins를 이용해 파이프라인 구축, AWS EC2에 서버 배포 경험",
			"Amazon S3와 멀티파트를 이용한 파일 업로드 기능 개발 경험",
			"FCM을 이용한 알림 기능 개발 경험",
		],
		software: [
			"인수 테스트 주도 개발 경험 (ATDD)",
			"Junit, Mockito, Rest Assured, Jmeter를 이용해 테스트 수행 경험",
			"SonarQube와 Jacoco를 이용해 정적 코드 분석 및 코드 커버리지 측정 경험 (커버리지 목표 80%)",
			"애자일한 개발 경험 (스프린트 1주), 유저 피드백을 이용해 기능 추가해 배포 후 업데이트 3번 진행 경험",
			"Jira를 이용해 프로젝트 관리, Github, Gitlab 사용 경험",
		],
		frontend: [
			"Vue.js를 이용한 팀 프로젝트를 통해 프론트엔드 개발 경험 [[Github 링크]](https://github.com/OvTrip/OvTrip_Frontend)",
		],
		descridption:
			"dI've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description: [
			"새로운 기술을 배우고 경험하는 것을 즐깁니다.",
			"도전적인 목표를 세우고 성취하는 것에 뿌듯함을 느낍니다.",
			"한 번 시작하면 끝까지 파고드는 기질을 갖고 있습니다.",
			"다양한 사람들을 만나고 소통하며 성장하는 것을 좋아합니다.",
		],
	},

	projects: [
		{
			title: "EA-RA (어라)",
			description: "탄소 중립 활동을 하며 환경 보호를 실천하는 서비스",
			logo: "eara.png",
			stack: ["Spring Boot", "Spring Cloud", "MariaDB", "RabbitMQ"],
			linkText: "View Project",
			link: "/project/4",
		},

		{
			title: "POPPING",
			description: "시간이 지나면 사라지는 익명 메시지 서비스",
			logo: "popping.png",
			stack: ["Spring Boot", "Spring Data JPA", "MariaDB", "Docker"],
			linkText: "View Project",
			link: "/project/1",
		},

		{
			title: "Emotion Bank",
			description: "감정을 금액으로 수치화해 보관하는 은행 서비스",
			logo: "emotionbank.png",
			stack: ["Spring Boot", "MySQL", "MongoDB", "FCM"],
			linkText: "View Project",
			link: "/project/2",
		},

		{
			title: "OvTrip",
			description: "간편한 여행 계획 관리 서비스",
			logo: "ovtrip.png",
			stack: ["Spring Boot", "Spring Cloud", "MyBatis", "Vue.js"],
			linkText: "View Project",
			link: "/project/3",
		},
	],

	stacks: [
		{
			title: "Backend",
			skill: [
				"Spring Boot",
				"Spring Framework",
				"Spring Cloud",
				"JPA, JPQL",
				"MyBatis",
				"MySQL, MariaDB, MongoDB",
				"RabbitMQ",
			],
		},

		{
			title: "Frontend",
			skill: ["HTML, CSS, JavaScript", "Vue.js"],
		},

		{
			title: "DevOps",
			skill: ["Docker", "Jenkins", "SonarQube", "Amazon EC2"],
		},

		{
			title: "Tools",
			skill: ["IntelliJ", "Git, Github, Gitlab", "Jira, Mattermost"],
		},
	],
};

export default INFO;
