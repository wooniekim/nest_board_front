import { useState } from "react";

const WritePost = () => {
  const [PasswordHide, setPasswordHide] = useState(false);

  return (
    <div className="w-full h-full position: fixed">
      <div className="min-h-screen bg-red-200 flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-yellow-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-yellow-400 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
        <div className="rounded-xl border p-5 shadow-md w-5/6 bg-white z-20">
          <h1 className="text-center text-2xl font-bold mb-10">글 작성</h1>
          <div className="space-y-4">
            <div>
              <div>
                <label className="block mb-2 text-sm text-gray-900">제목</label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="제목"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-Line-rg text-gray-900">
                내용
              </label>
              <textarea
                id="first_name"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-56"
                placeholder="내용을 입력해주세요"
                required
              ></textarea>
            </div>
            <div>
              <label className="block mb-2 text-sm font-Line-rg text-gray-900">
                파일
              </label>
              <input
                type="file"
                id="file"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="flex w-full flex-col">
              <div className="flex flex-row">
                <label className="block text-sm text-gray-900 mr-2 mb-2">
                  비밀글 여부
                </label>
                <input
                  className="block text-lg mb-2"
                  type="checkbox"
                  onClick={() => setPasswordHide(!PasswordHide)}
                />
              </div>
              <div className="divider divider-horizontal"></div>
              {PasswordHide ? (
                <div className="flex flex-row">
                  <label className="block text-sm text-gray-900 mt-3 mr-4">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    placeholder="비밀번호"
                    id="password"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5"
                  />
                </div>
              ) : null}
            </div>
            <button className="px-6 py-2 mx-auto block rounded-md text-lg font-bold text-white bg-red-300 hover:bg-red-200">
              작성완료!
            </button>
          </div>
        </div>
        <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </div>
  );
};
export default WritePost;
