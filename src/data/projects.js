import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

function article_1() {
	return {
		period: "2023.07 ~ 2023.08 (7주)",
		title: "💌 POPPING",
		description: "시간이 지나면 사라지는 익명 메시지 서비스",
		linkcolor: "#d6f0ff",
		hovercolor: "#6cb5f9",
		links: [
			{
				info: "영상 URL",
				url: "https://youtu.be/fMUzQTPCpe8",
			},
			{
				info: "Github URL",
				url: "https://github.com/jxixeun/Popping",
			},
			{
				info: "배포 URL",
				url: "https://www.pop-ping.com/",
			},
			{
				info: "김지은의 POPPING 페이지 (로그인 없이 사용 가능)",
				url: "https://www.pop-ping.com/main/1655152638",
			},
		],
		stacks: [
			"Java, Spring Boot, Gradle",
			"MariaDB, Redis, Spring Data JPA",
			"Amazon EC2, Docker, Jenkins, Nginx, Git, Gitlab, Jira",
		],
		develop_role: [
			"데이터베이스 설계 참여",
			"메시지 기능 구현",
			"회원 즐겨찾기 기능 구현",
			"회원 탈퇴 처리 구현",
			"전역 에러 처리, XSS 방어",
			"Jenkins와 Docker를 이용해 배포 진행",
		],
		keywords: [
			"Spring Boot",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		role: "팀장, 백엔드 개발, 인프라",
		team: "팀 프로젝트 (BE 4, FE 2)",
		thumbnail_image: "../popping-thumbnail.png",
		architecture_image:
			"https://user-images.githubusercontent.com/55385934/261164920-9267b639-36ae-4c70-8dc1-ae8e7054497e.png",
		long_description:
			"POPPING은 유저에게 익명 메시지를 보내며 소통하는 웹 서비스입니다. 모든 접속자가 유저의 메시지를 확인할 수 있는 기존 서비스의 한계를 뛰어넘어 수신자만 메시지를 확인할 수 있도록 해 발신자 친화적인 서비스를 구현하고자 하였습니다. POPPING에서 유저는 만료 시간을 지정하여 메시지를 보낼 수 있고 만료된 메시지는 열람 불가능합니다.",
		develop_content: (
			<React.Fragment>
				<h3>■ AS IS</h3>
				<ul>
					<li>
						Business
						<ul>
							<li>
								애자일하게 개발을 진행합니다. 유동적으로 기능이
								수정될 수 있습니다.
							</li>
						</ul>
						<ul>
							<li>
								사용자는 만료 시간을 지정하여 원하는 닉네임으로
								메시지를 전송할 수 있습니다.
							</li>
						</ul>
						<ul>
							<li>
								사용자는 자신이 보낸 메시지를 확인할 수
								있습니다.
							</li>
						</ul>
						<ul>
							<li>사용자는 탈퇴를 할 수 있습니다.</li>
						</ul>
					</li>
				</ul>
				<ul>
					<li>
						피드백 이후 추가된 기능
						<ul>
							<li s>사용자는 상태메시지를 설정할 수 있습니다.</li>
						</ul>
						<ul>
							<li>
								사용자는 받은 메시지에 답장을 할 수 있습니다.{" "}
								<ul>
									<li>
										답장을 주고 받을 때는, 처음 설정한
										닉네임으로 고정되어야합니다.
									</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li>
								사용자는 다른 유저를 즐겨찾기 할 수 있으며,
								즐겨찾기 목록을 조회할 수 있습니다.
							</li>
						</ul>
						<ul>
							<li>
								탈퇴 요청 후 회원 정보가 즉시 삭제 되지 않고, 한
								달 후 데이터베이스에서 삭제되어야 합니다. (회원
								정보 보관 기간 1달)
							</li>
						</ul>
					</li>
				</ul>
				<ul>
					<li>
						Tech
						<ul>
							<li>REST API로 구현합니다.</li>
						</ul>
						<ul>
							<li>AWS EC2로 배포하며 도메인을 연결합니다.</li>
						</ul>
						<ul>
							<li>
								서버는 Docker와 Jenkins를 사용해 Github의
								브랜치에 push시 자동으로 배포되도록 합니다.
							</li>
						</ul>
						<ul>
							<li>
								localStorage에 토큰을 저장하기 때문에 XSS 방어를
								진행합니다.
							</li>
						</ul>
					</li>
				</ul>
				<h3>■ Challenge</h3>
				<ul>
					<li>Spring Boot를 이용해 REST API를 구현</li>
				</ul>
				<h3>■ TO BE</h3>
				<ul>
					<li>
						삼성 청년 SW 아카데미 프로젝트 경진대회 우수상을
						받았습니다. (10팀 중 1등)
					</li>
					<li>배포 첫날 약 140명의 유저를 기록했습니다.</li>
					<li>
						유저 피드백을 통해 기능을 추가하여 1.0.1, 1.1.0, 1.1.1
						버전 배포를 진행했습니다.
					</li>
					<li>
						4차 배포 후 총 회원 수 약 300명, 사용자들이 보낸 메시지
						수는 약 2300개를 기록했습니다.
					</li>
				</ul>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>프로젝트 관리와 커뮤니케이션, 코드 리뷰</h3>
				<p>
					팀장을 맡아 PM 역할 수업을 수강했고 Jira의 사용법을 익히며
					프로젝트 관리 방법을 학습하였습니다. 그라운드 룰을 정하고,
					데일리 스크럼을 지속적으로 수행하여 팀원들과 상호 신뢰를
					쌓고 프로젝트가 문제없이 진행되도록 노력했습니다. 브랜치에
					Merge하기 전 MR을 올려서 전체 BE 팀원들의 코드 리뷰를 받아야
					했기 때문에 그 과정에서 퀄리티 있고 깔끔한 코드 작성법에
					대해서 배울 수 있었습니다.
				</p>
				<h3>예상치 못한 에러의 만남</h3>
				<p>
					실제로 사용자를 받아 서비스를 운영해보니, 예상치 못한 문제가
					계속해서 발생했습니다.  가장 대표적인 것이 이모지
					처리입니다. 개발 환경에서 테스트를 진행할 때, 팀원 모두
					메시지에 이모지를 보낼 생각을 하지 못해서 해당 에러를
					인식하지 못했습니다. 이러한 경험을 통해 기능을 구현할 때
					더욱 테스트 코드를 꼼꼼히 작성하고 로직을 꼼꼼하게
					짜야한다는 것을 깨달았습니다.
				</p>
				<h3>애자일한 개발 경험</h3>
				<p>
					워터폴 방식으로만 개발하고, 애자일하게 개발한 경험은
					처음인데 매우 뜻깊었습니다. <br />
					기본 기능만 구현하고, 사용자의 피드백을 통해 기능을 구현해
					나가는 과정이 마치 게임 미션과 같이 느껴져 재밌었습니다.
					<br />
					사용자의 피드백을 통해 서비스를 완성해 나가면서, 사용자가
					정말 원하는 서비스를 개발하게 되어 매우 뿌듯했습니다.
				</p>
				<h3>실제 유저가 이용하는 서비스</h3>
				<p>
					실제 사용자를 받았기에 운영하며 맞닥뜨리는 문제에 대한 대응
					방식을 학습할 수 있었습니다.
					<br />
					적지만 300명 가까이 되는 유저를 받고 운영해보니 감회가
					남달랐습니다. 주변 사람들이 서비스를 실제로 사용해서
					인스타 스토리에 인증글을 올리는 모습을 보니 말할 수 없는
					감정이 밀려왔습니다. 더 많은 사용자가 이용하는 서비스를
					개발하는 경험을 해보고 싶습니다.
				</p>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		period: "2023.08 ~ 2023.10 (7주)",
		title: "💸 Emotion Bank",
		description: "감정을 금액으로 수치화해 보관하는 은행 서비스",
		linkcolor: "#fdc3c4",
		hovercolor: "#FF533B",
		links: [
			{
				info: "영상 URL",
				url: "https://youtu.be/6WSHhNuqmHE",
			},
			{
				info: "Github URL",
				url: "https://github.com/jxixeun/EmotionBank",
			},
		],
		stacks: [
			"Java, Spring Boot, Gradle",
			"MySQL, MongoDB, Spring Data JPA",
			"Amazon EC2, Docker, Jenkins, SonarQube, FCM, Git, Github, Jira",
		],
		develop_role: [
			"데이터베이스 설계 참여",
			"계좌 생성 및 잔액 조회, 계좌명 수정",
			"일별 기분 저장 및 년월 단위로 조회",
			"알림 생성 및 발송, 저장",
			"Jenkins와 Docker를 이용해 배포 진행",
			"SonarQube 적용",
		],
		keywords: [
			"Spring Boot",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		role: "팀장, 백엔드 개발, 인프라",
		team: "팀 프로젝트 (BE 4, FE 2)",
		thumbnail_image: "../emotionbank-thumbnail.png",
		architecture_image:
			"https://github.com/EmotionBank/EmotionBank/assets/102013524/fdd47292-8d05-40da-b12c-a2d9d0655eb7",
		long_description:
			"Emotion Bank는 유저가 자신의 감정을 금액으로 환산해 입출금할 수 있는 서비스입니다. 금융 서비스와 SNS를 접목시켜 돈이 아닌 감정을 입출금하고 이체를 통해 친구와 공유하는 서비스를 개발했습니다. 유저는 감정을 Emotion Bank에 저장할 수 있습니다. 자신의 감정을 친구에게 이체를 통해 전달할 수 있으며 긍정적인 감정은 입금, 부정적인 감정은 출금이 됩니다.",
		develop_content: (
			<React.Fragment>
				<h3>■ AS IS</h3>
				<ul>
					<li>
						Business
						<ul>
							<li>
								사용자는 자신의 입출금 계좌를 1개 개설할 수
								있습니다.
								<ul>
									<li>
										계좌 개설 시 계좌번호가 생성되며, 다른
										회원의 계좌 번호와 중복되지
										않아야합니다.
									</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li>
								사용자의 일별 대표 기분을 월 단위로 조회할 수
								있습니다.
							</li>
						</ul>
						<ul>
							<li>
								사용자는 자신이 로그인한 모든 기기에서 알림을
								받을 수 있습니다.
								<ul>
									<li>
										알림은 전체 알림과 개인 알림 두 종류가
										존재합니다.
									</li>
									<li>
										전체 알림 생성은 관리자만 할 수
										있습니다.
									</li>
									<li>
										알림의 양식은 보내는 종류에 따라
										다릅니다.
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
				<ul>
					<li>
						Tech
						<ul>
							<li>REST API로 구현합니다.</li>
						</ul>
						<ul>
							<li>
								전체 알림 생성은 ‘ADMIN’ 타입의 회원만
								가능합니다.
							</li>
						</ul>
						<ul>
							<li>AWS EC2로 배포합니다.</li>
						</ul>
						<ul>
							<li>
								서버는 Docker와 Jenkins를 사용해 Github의
								브랜치에 push시 자동으로 배포되도록 합니다.
							</li>
						</ul>
						<ul>
							<li>
								SonarQube를 사용해 정적 코드 분석을 진행합니다.
							</li>
						</ul>
						<ul>
							<li>
								localStorage에 토큰을 저장하기 때문에 XSS 방어를
								진행합니다.
							</li>
						</ul>
					</li>
				</ul>
				<h3>■ Challenge</h3>
				<ul>
					<li>Spring Boot를 이용해 REST API를 구현</li>
				</ul>
				<ul>
					<li>
						계좌 번호가 겹치지 않게 하기 위해 생성 시간의
						timestamp를 이용해 생성
					</li>
				</ul>
				<ul>
					<li>
						데이터 베이스의 경우
						<ul>
							<li>계좌와 일별 기분 데이터는 MySQL에 저장</li>
						</ul>
						<ul>
							<li>
								양식이 없고 종류마다 다른 알림 데이터의 경우
								MongoDB에 저장
							</li>
						</ul>
						<ul>
							<li>JPA를 이용해 데이터베이스 조회</li>
						</ul>
					</li>
				</ul>
				<ul>
					<li>
						알림 서비스를 위해 Firebase Cloud Messaging 사용
						<ul>
							<li>
								로그인 할 때마다 디바이스 토큰을 저장하도록 함 →
								유저의 모든 기기에 알림이 가도록 함
							</li>
						</ul>
						<ul>
							<li>
								새로운 토큰을 저장할 때, 전체 알림을 위해 notice
								Topic을 구독하도록 설정
							</li>
						</ul>
						<ul>
							<li>
								개인 알림의 경우 디바이스 토큰을 이용해서 발송,
								전체 알림의 경우 notice topic을 구독하고 있는
								토큰에게 전송회
							</li>
						</ul>
					</li>
				</ul>
				<ul>
					<li>
						Github의 Webhook을 이용해 브랜치에 push시 자동으로
						배포되도록 Jenkins pipeline 작성
						<ul>
							<li>
								Dockerfile을 이용해 이미지 빌드 후 배포 진행
							</li>
						</ul>
					</li>
				</ul>
				<ul>
					<li>
						pipeline의 build 단계 이후 SonarQube 정적 코드 분석 진행
					</li>
				</ul>
				<ul>
					<li>
						Naver의 lucy xss filter를 이용해 XSS 방어 설정
						<ul>
							<li>
								MessageConverter에 처리할 문자열이 설정되어있는
								Object Mapper를 등록해 JSON 데이터의 XSS 방어
								설정 진행
							</li>
						</ul>
					</li>
				</ul>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>데이터 저장 방법에 대한 토론</h3>
				<p>
					팀원들과 함께 이체의 경우 데이터를 어떻게 저장할지에 대해
					토론을 했습니다. 생각한 방법은
					<br />
					1. 이체라는 타입을 만들어서 저장. <br />
					2. 입금/출금 두 가지로 나뉘어서 저장. <br />
					3. 입금/출금 두가지로 나눠서도 저장하고 이체도 저장해서 총
					3번의 데이터 저장. <br />
					시중 은행 개발자분을 만나 데이터베이스 설계에 대해 자문을
					구했으며, 많은 고민 끝에 거래내역 조회와 같은 부분에서
					편리하게 하기 위해 2번의 방법을 선택했습니다.
				</p>
				<h3>겹치지 않게 하기 위해 Timestamp를 사용</h3>
				<p>
					UUID를 사용할수도 있지만, 계좌 번호의 경우 숫자로
					이루어져있는 것이 보편적이기 때문에 숫자로 이루어진 번호를
					생성하고 싶었습니다. <br />
					시중 은행 개발자분께 겹치지 않게 하기 위해선 Timestamp를
					이용하는 것이 좋다는 조언을 듣고, Timestamp를 이용해
					yyMM-ddHH-mmssSSS 형식의 계좌 번호를 생성했습니다.
				</p>
				<h3>비정형 데이터를 저장하기 위해 MongoDB 사용</h3>
				<p>
					RDBMS를 주로 사용하다가 처음으로 MongoDB를 사용해보았습니다.
					RDBMS와 비교했을 때 장단점이 명확하기 때문에 데이터의 특성에
					맞는 DB를 선택해야 된다는 것을 알게되었습니다.
				</p>
				<h3>정적 코드 분석을 위해 SonarQube 사용</h3>
				<p>
					정적 코드 분석 도구인 SonarQube를 연동해서 사용했습니다. 
					코드리뷰를 진행하였지만 백엔드 코드의 경우 CodeSmell이
					200개에 가까운 결과가 나왔습니다.  가독성 있고 유지보수하기
					쉬운 코드를 작성하기 위해 앞으로 더욱 노력해야겠다고
					생각했습니다.
				</p>
				<h3>Github Issue 사용</h3>
				<p>
					Github의 Issue를 사용해서 개발을 진행했습니다. 먼저 개발할
					기능에 대해 Issue를 작성하고, PR에 Issue를 연결하는 방식으로
					진행했습니다. 먼저 Issue를 작성하며 구현할 기능을
					정리함으로써 개발을 좀 더 빠르고 정확하게 할 수 있었습니다.
				</p>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
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
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
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

const myProjects = [article_1, article_2, article_3, article_4];

export default myProjects;
