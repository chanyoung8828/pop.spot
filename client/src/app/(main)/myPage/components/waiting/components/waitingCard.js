import "./waitingCard.scss";
import instance from "@/utils/instance";

// import CancelModal from "../../cancleWaitingModal/cancleWaitingModal";

export default function WaitingCard(item, index) {
  //   const [cancelModal, setCancelModal] = useState(false);

  //   const openCancelModal = () => {
  //     setCancelModal(true);
  //   };

  //   const closeCancelModal = () => {
  //     setCancelModal(false);
  //   };

  //   const [popupStoreId, setPopupStoreId] = useState(null);

  console.log("item[0]: ", item[0]);
  console.log("item[1]: ", item[1]);

  const axiosCancelWaiting = async () => {
    try {
      const response = await instance.get(
        `/waiting/popupStores?name=${item[0]}`
      );
      console.log("response: ", response);

      //   if (response.data && response.data.popupStoreId) {
      const popupStoreId = response.data._id;
      console.log("popupStoreId: ", popupStoreId);
      await instance.delete(
        `/waiting/cancelWaiting?popupStoreId=${popupStoreId}`
      );
      console.log("현장 대기 취소 완료");
      //   } else {
      //     console.error("해당 팝업스토어를 찾을 수 없습니다.");
      //   }
    } catch (error) {
      console.error("Failed to cancel waiting:", error);
    }
  };

  return (
    <div className="waitingContainer">
      <div className="popUpStoreName" key={index}>
        {item[0]}
      </div>

      <div className="waitingTimeContainer">
        <div className="waitingInfoWrapper">
          <div className="waitingTeamText">대기중</div>
          <div className="waitingTimeText" key={index}>
            {item[1]}팀
          </div>
        </div>
      </div>
      <div className="waitingInfoButton">
        <button className="waitingButtonText" onClick={axiosCancelWaiting}>
          웨이팅 취소
        </button>
      </div>
      {/* <CancelModal isOpen={cancelModal} onClose={closeCancelModal} /> */}
    </div>
  );
}
