import axios, { AxiosError } from "axios";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const WritePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const token = localStorage.getItem("access-token");

  // url
  const url = `http://localhost:3000/post`;

  // request body
  const body = {
    title: form.title,
    content: form.content,
    file: file,
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      // 데이터 전송
      const res = await axios.post(url, body, { headers });
      console.log(res);
      if (res.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "글 작성이 완료되었습니다.",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/");
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
    <div className="w-full h-full position: fixed">
      <div className="min-h-screen bg-red-200 flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-yellow-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block animate-bounce"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-yellow-400 -bottom-6 -right-10 transform rotate-12 hidden md:block animate-bounce"></div>
        <form
          className="rounded-xl border p-5 shadow-md w-5/6 bg-white z-20"
          onSubmit={submit}
        >
          <h1 className="text-center text-3xl font-bold mb-4">글 작성</h1>
          <div className="space-y-2">
            <div>
              <div>
                <label className="font-semibold mx-1">제목</label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="제목"
                  onChange={(event) =>
                    setForm({ ...form, title: event.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div>
              <label className="font-semibold mx-1">내용</label>
              <textarea
                id="first_name"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-56"
                placeholder="내용을 입력해주세요"
                onChange={(event) =>
                  setForm({ ...form, content: event.target.value })
                }
                required
              ></textarea>
            </div>
            <div>
              <label className="font-semibold mx-1 mb-2">파일</label>
              <input
                type="file"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const target = event.currentTarget;
                  const files = (target.files as FileList)[0];

                  if (files === undefined) {
                    return;
                  }

                  setFile(files);
                }}
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 mx-auto block rounded-md text-lg font-bold text-white bg-purple-400 hover:bg-red-200"
            >
              작성완료!
            </button>
          </div>
        </form>
        <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block animate-bounce"></div>
        <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block animate-bounce"></div>
      </div>
    </div>
  );
};
export default WritePost;
