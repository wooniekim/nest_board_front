import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Post } from "../dto/Post";

const ViewPost = () => {
  const [post, setPost] = useState<Post>();

  let { id } = useParams();
  const postId = id;

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const url = `https://dummyjson.com/posts/${postId}`;
    try {
      const res = await axios.get(url);
      setPost(res.data);
      console.log(res.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="min-w-screen min-h-screen">
        <div className="min-h-screen bg-red-200 flex justify-center items-center">
          <div className="absolute w-60 h-60 rounded-xl bg-yellow-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block animate-bounce"></div>
          <div className="absolute w-48 h-48 rounded-xl bg-yellow-400 -bottom-6 -right-10 transform rotate-12 hidden md:block animate-bounce"></div>
          <div className="w-5/6 h-5/6 my-10 bg-white rounded-2xl shadow-xl z-20">
            <div className="items-center justify-center grid place-items-center">
              <div className="grid place-items-left w-full my-8 ml-20">
                <Link
                  className="font-bold flex flex-wrap hover:underline"
                  to={"/"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="mt-1 mr-2"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                  북딱 메인으로 돌아가기
                </Link>
              </div>
              <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white mb-10">
                <div className="flex w-full items-center justify-between border-b pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl font-bold text-slate-700 font-Line-bd">
                      {post?.title}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className=" font-bold mr-1 text-blue-400">개념</div>
                    <div className=" text-neutral-500 mr-3">1</div>
                    <div className=" font-bold mr-1 text-red-400">비추</div>
                    <div className=" text-neutral-500 mr-3">1</div>
                    <div className=" font-bold mr-1">조회수</div>
                    <div className=" text-neutral-500 mr-3">523</div>
                    <div className=" font-bold mr-3">{post?.userId}</div>
                    <div className=" font-bold mr-1">작성일</div>
                    <div className=" text-neutral-500">2000.05.23</div>
                  </div>
                </div>
                <div className="mt-4 mb-6 items-center justify-center grid place-items-center">
                  {/* <div className="mb-3 text-xl font-bold">{boardDetail.title}</div> */}
                  <div className="text-lg text-neutral-600">{post?.body}</div>
                  <div className="mt-10">
                    <img
                      src="https://i.ibb.co/XxTY0vK/photo-2023-11-13-19-12-47.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-wrap mt-10">
                    <div className="mx-4">
                      <button className="text-grey-darkest font-bold py-2 px-4 rounded items-center border shadow-lg grid place-items-center hover:shadow-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 576 512"
                          className="w-8 h-8 mb-2"
                        >
                          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <span className="">개념</span>
                      </button>
                    </div>
                    <div className="mx-4">
                      <button className="text-grey-darkest font-bold py-2 px-4 rounded items-center border shadow-lg grid place-items-center hover:shadow-red-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 384 512"
                          className="w-8 h-8 mb-2"
                        >
                          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                        <span>비추</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block animate-bounce"></div>
          <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block animate-bounce"></div>
        </div>
      </div>
    </>
  );
};

export default ViewPost;
