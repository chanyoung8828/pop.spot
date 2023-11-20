"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./components/searchBar/SearchBar";
import ModalBackGround from "./components/modalBackGround/modalBackGround";
import FilterModal from "./components/filterModal/FilterModal";
import "./Header.scss";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  function openModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <div className="header">
      {visible && <ModalBackGround closeModal={closeModal} />}
      {visible && <FilterModal closeModal={closeModal} />}
      <img
        className="logo"
        src="https://user-images.githubusercontent.com/126956430/282671069-a09c630b-27dd-4089-9cdc-a2117ca9c132.png"
        alt="로고이미지"
        onClick={() => router.push("/")}
      />
      <SearchBar />
      <div className="btnWrapper">
        <div
          className="loginBtn"
          onClick={() => {
            router.push("/login");
          }}
        >
          LOGIN
        </div>
        <div
          className="signUpBtn"
          onClick={() => {
            router.push("/signup");
          }}
        >
          SIGN UP
        </div>
        <div className="findBtnWrapper" onClick={openModal}>
          <FontAwesomeIcon className="icon" icon={faSliders} />
          <div className="text">FIND</div>
        </div>
      </div>
    </div>
  );
}
