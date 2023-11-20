"use client";
import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Auth = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  useEffect(() => {
    axios.post("http://localhost:4000/api/users/auth/kakao", {
      code: code,
    });
  }, []);

  return (
    <div>
      <div>로그인 중입니다.</div>
      <div>code: {code}</div>
    </div>
  );
};
export default Auth;
