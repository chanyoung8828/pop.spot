import "./waitingCard.scss";
import { useState } from "react";
import CancelModal from "../../cancleWaitingModal/cancleWaitingModal";

export default function WaitingCard(data) {
  const [cancelModal, setCancelModal] = useState(false);

  const openCancelModal = () => {
    setCancelModal(true);
  };

  const closeCancelModal = () => {
    setCancelModal(false);
  };

  return (
    <div className="waitingContainer">
      <div className="popUpStoreName">${data[0]}</div>
      <div className="waitingTimeContainer">
        <div className="waitingInfoWrapper">
          <div className="waitingTeamText">대기중</div>
          <div className="waitingTimeText">${data[1]}팀</div>
        </div>
      </div>
      <div className="waitingInfoButton">
        <button className="waitingButtonText" onClick={openCancelModal}>
          웨이팅 취소
        </button>
      </div>
      <CancelModal isOpen={cancelModal} onClose={closeCancelModal} />
    </div>
  );
}
