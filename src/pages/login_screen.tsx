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
                <input
                  type="text"
                  placeholder="비밀번호"
                  className="block text-sm p-3 rounded-lg w-full border outline-none"
                />
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
