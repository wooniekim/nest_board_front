import React, { SyntheticEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // url
  const url = `http://localhost:3000/auth/login`;

  // request body
  const body = {
    email: form.email,
    password: form.password,
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const headers = { "Content-Type": "application/json" };
    try {
      // 데이터 전송
      const res = await axios.post(url, body, { headers });
      console.log(res);
      const access_token = res.data?.accessToken;
      console.log(access_token);
      localStorage.setItem("access-token", access_token);
      if (access_token != null) {
        if (res.status === 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "메인페이지로 이동합니다.",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/");
        }
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        Swal.fire({
          icon: "error",
          title: error.response?.data.message,
          text: "관리자에게 문의해주세요.",
          showConfirmButton: false,
          timer: 2000,
        });
        window.location.replace("/login");
      }
    }
  };

  return (
    <>
      <div className="w-full h-full position: fixed">
        <div className="min-h-screen bg-red-200 flex justify-center items-center">
          <div className="absolute w-60 h-60 rounded-xl bg-yellow-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block animate-bounce"></div>
          <div className="absolute w-48 h-48 rounded-xl bg-yellow-400 -bottom-6 -right-10 transform rotate-12 hidden md:block animate-bounce"></div>
          <form
            className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20"
            onSubmit={submit}
          >
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                로그인
              </h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                영진갤에서 당신의 필력을 펼쳐보세요!
              </p>
            </div>
            <div className="space-y-4">
              <div className="my-2">
                <label className="text-sm font-semibold mx-1">이메일</label>
                <input
                  type="email"
                  placeholder="이메일"
                  className="block text-sm p-3 rounded-lg w-full border outline-none"
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  required
                />
              </div>
              <div className="my-2">
                <label className="text-sm font-semibold mx-1">비밀번호</label>
                <div
                  className="flex items-center justify-between rounded-md p-3 border"
                  x-data="{ show: true }"
                  x-clock
                >
                  <input
                    placeholder="비밀번호"
                    type="password"
                    id="password"
                    className="bg-transparent text-sm text-gray-900 focus:outline-none rounded-lg"
                    onChange={(event) =>
                      setForm({ ...form, password: event.target.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl font-bold"
              >
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
          </form>
          <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block animate-bounce"></div>
          <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block animate-bounce"></div>
        </div>
      </div>
    </>
  );
};
export default Login;
