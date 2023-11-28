"use client";
import "./cancleWaitingModal.scss";
import instance from "@/utils/instance";

export default function CancleWaitingModal({ isOpen, onClose }) {
  return (
    <div
      className="updateCancelContainer"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <button className="closeButton" onClick={onClose}>
        X
      </button>
      <div className="cancelText">현장 대기를 취소합니다.</div>
      <div className="cancelButton">
        <button onClick={isCancel}>예</button>
        <button onClick={onClose}>아니요</button>
      </div>
    </div>
  );
}
