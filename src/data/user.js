const INFO = {
	main: {
		title: "김지은, Portfolio",
		name: "Tharindu N.",
		email: "jxixeun@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/jxixeun",
		tistory: "https://xntifrxgile.tistory.com/"
	},

	homepage: {
		name: "김지은",
		title: "Backend Developer",
		description:
			"기능 요구사항을 명확히 이해하려 노력하며,안정성있는 코드를 위해 테스트 코드 작성에 유의하고 있습니다.",
		description2: "가독성있고 유지보수 쉬운 코드를 작성하기 위해 노력하고 있습니다.",
		description3: "‘함께 일하고 싶은 개발자’가 되는 것을 목표로 하고 있습니다.",
	},

	about: {
		title: "I’m Tharindu N. I live in Sri Lanka, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "EA-RA (어라)",
			team: "팀 프로젝트 (BE 3, FE 3)",
			period: "2023.10 ~ 2023.11 (7주)",
			description:
				"탄소 중립 활동을 하며 환경 보호를 실천하는 서비스",
			logo: "eara.png",
			stack : [
				"Spring Boot", "Spring Cloud", "MariaDB", "RabbitMQ"	
			],
			linkText: "View Project",
			link: "/article/1",
		},

		{
			title: "POPPING",
			team: "팀 프로젝트 (BE 4, FE 2)",
			period: "2023.07 ~ 2023.08 (7주)",
			description:
				"시간이 지나면 사라지는 익명 메시지 서비스",
			logo: "popping.png",
			stack : [
				"Spring Boot", "Spring Cloud", "MariaDB", "RabbitMQ"	
			],
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Emotion Bank",
			team: "팀 프로젝트 (BE 4, FE 2)",
			period: "2023.08 ~ 2023.10 (7주)",
			description:
				"감정을 금액으로 수치화해 보관하는 은행 서비스",
			logo: "emotionbank.png",
			stack : [
				"Spring Boot", "Spring Cloud", "MariaDB", "RabbitMQ"	
			],
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "OvTrip",
			team: "팀 프로젝트 (BE/FE 2)",
			period: "2023.05 (4주)",
			description:
				"간편한 여행 계획 관리 서비스",
			logo: "ovtrip.png",
			stack : [
				"Spring Boot", "Spring Cloud", "MariaDB", "RabbitMQ"	
			],
			linkText: "View Project",
			link: "https://github.com",
		},
	],
};

export default INFO;
