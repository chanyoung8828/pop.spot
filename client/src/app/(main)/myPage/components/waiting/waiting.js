"use client";
import "./waiting.scss";
import { useEffect, useState } from "react";
import instance from "@/utils/instance";
import WaitingCard from "./components/waitingCard";
// import CancelModal from "../cancleWaitingModal/cancleWaitingModal";

export default function Waiting() {
  // 1. useState 작성
  const [myWaitingData, setMyWaitingData] = useState({ message: "", data: [] });

  const openCancelModal = () => {
    setCancelModal(true);
  };

  const closeCancelModal = () => {
    setCancelModal(false);
  };

  // 2. useEffect 작성 (계속 업데이트 되야 하는 부분)
  useEffect(() => {
    const axiosWaitingStatus = async () => {
      try {
        const response = await instance.get(`/waiting/getWaitingStatus`);

        const waitingData = response.data.data ? response.data.data : undefined;

        // 현장 대기 상태 업데이트
        setMyWaitingData({ message: response.data.message, data: waitingData });

        // 데이터 조회가 정상 동작하는지 test
        console.log(myWaitingData.message);
        console.log(myWaitingData); // [["VANS & BOLT 팝업스토어 : VANS MEETS BOLT", 0]];
        console.log("data[0]: ", waitingData.data[0][0]);
        console.log("data[1]: ", waitingData.data[0][1]);
        // console.log("waitingData.data.length: ", waitingData.data.length);
      } catch (error) {
        console.error(
          "현장 대기한 팝업스토어와 대기팀 데이터 조회를 실패하였습니다.",
          error
        );
        setMyWaitingData({ message: "", data: [] });
      }
    };

    // 현장 대기 조회를 하기 위한 함수 호출
    axiosWaitingStatus();
  }, []);

  return (
    <div className="myWaitingContainer">
      <div className="waitingTitle">나의 현장 대기</div>
      <div className="waitingCardWrapper">
        {myWaitingData.data
          ? myWaitingData.data.map((v) => WaitingCard(v))
          : ""}
      </div>
    </div>
  );
}
