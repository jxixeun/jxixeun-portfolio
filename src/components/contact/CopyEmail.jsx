import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";

import "./copyemail.css";

function CopyToClipboardButton({ textToCopy }) {
	const handleCopy = () => {
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				toast("클립보드에 복사되었습니다!", {
					position: "top-center",
					autoClose: 1000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			})
			.catch((err) => {
				toast.error("복사에 실패했습니다.");
				console.error("복사에 실패했습니다:", err);
			});
	};

	return (
		<div className="copy-email-wrapper">
			<button className="btn-copy-email" onClick={handleCopy}>
				<FontAwesomeIcon icon={faCopy} className="social-icon" />
				<span className="copy-btn-text">이메일 주소 복사하기</span>
			</button>
			<ToastContainer />
		</div>
	);
}

export default CopyToClipboardButton;
