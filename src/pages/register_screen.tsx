import axios, { AxiosError } from "axios";
import React, { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    nickname: "",
    tel: "",
  });
  const [isSame, setIsSame] = useState(false);

  // url
  const url = `http://localhost:3000/user/register`;

  // request body
  const body = {
    email: form.email,
    password: form.password,
    nickname: form.nickname,
    tel: form.tel,
  };
  // 비밀번호, 비밀번호 확인 일치 여부
  const confirmingPassword = () => {
    if (form.password === form.passwordCheck) {
      setIsSame(true);
      console.log("같다");
    }
  };

  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });
  const [confirmPasswordType, setConfirmPasswordType] = useState({
    type: "password",
    visible: false,
  });
  const handlePasswordType = (e: SyntheticEvent) => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
    console.log(passwordType.type, passwordType.visible);
  };
  const handleConfirmPasswordType = (e: SyntheticEvent) => {
    setConfirmPasswordType(() => {
      if (!confirmPasswordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
    console.log(confirmPasswordType.type, confirmPasswordType.visible);
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const headers = { "Content-Type": "application/json" };
    try {
      // 데이터 전송
      const res = await axios.post(url, body, { headers });
      console.log(res);
      if (res.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "회원가입이 완료되었습니다.",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/login");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        Swal.fire({
          icon: "error",
          title: error.response?.data.message,
          text: "관리자에게 문의해주세요.",
          showConfirmButton: false,
          timer: 1000,
        });
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
            className="p-8 bg-white rounded-2xl shadow-xl z-20"
            onSubmit={submit}
          >
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                회원가입
              </h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                가입해 당신의 필력을 펼쳐보세요!
              </p>
            </div>
            <div className="space-y-2">
              <div>
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
                <div className="flex items-center justify-between rounded-md p-3 border">
                  <input
                    placeholder="비밀번호"
                    type={passwordType.type}
                    id="password"
                    className="bg-transparent text-sm text-gray-900 focus:outline-none rounded-lg"
                    onChange={(event) =>
                      setForm({ ...form, password: event.target.value })
                    }
                    required
                  />
                  {passwordType.visible ? (
                    <button className="block" onClick={handlePasswordType}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 640 512"
                      >
                        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                      </svg>
                    </button>
                  ) : (
                    <button className="block" onClick={handlePasswordType}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 mb-1">
              <label className="text-sm font-semibold mx-1">
                비밀번호 확인
              </label>
              <div className="flex items-center justify-between rounded-md p-3 border">
                <input
                  placeholder="비밀번호"
                  type={confirmPasswordType.type}
                  id="password"
                  className="bg-transparent text-sm text-gray-900 focus:outline-none rounded-lg"
                  onChange={(event) =>
                    setForm({ ...form, passwordCheck: event.target.value })
                  }
                  onBlur={confirmingPassword}
                  required
                />
                {confirmPasswordType.visible ? (
                  <button className="block" onClick={handleConfirmPasswordType}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                    >
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                    </svg>
                  </button>
                ) : (
                  <button className="block" onClick={handleConfirmPasswordType}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div>
              {isSame ? (
                <div className="mb-3 mx-1">
                  <label className="text-sm font-semibold text-green-400">
                    비밀번호가 일치합니다.
                  </label>
                </div>
              ) : (
                <div className="mb-3 mx-1">
                  <label className="text-sm font-semibold text-red-400">
                    비밀번호가 일치하지 않습니다.
                  </label>
                </div>
              )}
              <label className="text-sm font-semibold mx-1">닉네임</label>
              <input
                type="text"
                placeholder="닉네임"
                className="block text-sm p-3 rounded-lg w-full border outline-none"
                onChange={(event) =>
                  setForm({ ...form, nickname: event.target.value })
                }
                required
              />
            </div>
            <div className="my-2">
              <label className="text-sm font-semibold mx-1">전화번호</label>
              <input
                type="text"
                placeholder="-빼고 입력해주세요"
                className="block text-sm p-3 rounded-lg w-full border outline-none"
                onChange={(event) =>
                  setForm({ ...form, tel: event.target.value })
                }
                required
              />
            </div>
            <div className="text-center mt-6">
              {isSame ? (
                <button
                  type="submit"
                  className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl font-bold"
                >
                  회원가입
                </button>
              ) : (
                <button className="py-3 w-64 text-xl text-white bg-gray-400 rounded-2xl font-bold">
                  회원가입
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block animate-bounce"></div>
        <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block animate-bounce"></div>
      </div>
    </>
  );
};
export default Register;
