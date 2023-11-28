"use client";
import "./waiting.scss";
import { useEffect, useState } from "react";
import instance from "@/utils/instance";
import WaitingCard from "./components/waitingCard";
// import CancelModal from "../cancleWaitingModal/cancleWaitingModal";

export default function Waiting() {
  const [myWaitingData, setMyWaitingData] = useState(undefined);

  // 2. useEffect 작성 (계속 업데이트 되야 하는 부분)
  useEffect(() => {
    const axiosWaitingStatus = async () => {
      try {
        const response = await instance.get(`/waiting/getWaitingStatus`);

        const waitingData = response.data.data ? response.data.data : undefined;
        console.log("waitingData : ", waitingData);

        // 현장 대기 상태 업데이트
        await setMyWaitingData(waitingData);

        // 데이터 조회가 정상 동작하는지 test
        console.log("myWaitingData1 : ", waitingData); // [['하겐다즈 X 아우프글렛 팝업스토어', 2]];
        console.log("data[0]: ", waitingData[0][0]); // 하겐다즈 X 아우프글렛 팝업스토어
        console.log("data[1]: ", waitingData[0][1]); // 2
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

  // <li key={index}>{item.name}</li>
  return (
    <div className="myWaitingContainer">
      <div className="waitingTitle">나의 현장 대기</div>
      <div className="waitingCardWrapper">
        {/* {myWaitingData ? myWaitingData.map((v) => WaitingCard(v)) : ""} */}
        {myWaitingData
          ? myWaitingData.map((item, index) => WaitingCard(item, index))
          : ""}
      </div>
    </div>
  );
}
