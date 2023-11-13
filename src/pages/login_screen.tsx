import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full h-full position: fixed">
        <div className="min-h-screen bg-red-200 flex justify-center items-center">
          <div className="absolute w-60 h-60 rounded-xl bg-yellow-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
          <div className="absolute w-48 h-48 rounded-xl bg-yellow-400 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                로그인
              </h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                영진갤에서 당신의 필력을 펼쳐보세요!
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold">이메일</label>
                <input
                  type="text"
                  placeholder="이메일"
                  className="block text-sm p-3 rounded-lg w-full border outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">비밀번호</label>
                <div
                  className="flex items-center justify-between rounded-md p-3 border"
                  x-data="{ show: true }"
                  x-clock
                >
                  <input
                    placeholder="비밀번호"
                    className="bg-transparent text-sm text-gray-900 focus:outline-none rounded-lg"
                  />
                  <button className="block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      className="text-xl"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl font-bold">
                로그인
              </button>
              <p className="mt-4 text-sm">
                아직 계정이 없으신가요?{" "}
                <Link
                  to={"/register"}
                  className="underline cursor-pointer font-bold"
                >
                  회원가입
                </Link>
              </p>
            </div>
          </div>
          <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
          <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
        </div>
      </div>
    </>
  );
};
export default Login;
