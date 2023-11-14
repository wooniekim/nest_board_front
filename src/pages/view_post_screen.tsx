import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <div className="w-full h-full">
        <div className="min-h-screen bg-red-200 flex justify-center items-center">
          <div className="absolute w-60 h-60 rounded-xl bg-yellow-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
          <div className="absolute w-48 h-48 rounded-xl bg-yellow-400 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
          <div className="w-5/6 h-5/6 py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div className="flex items-center justify-center w-full">
              <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
                <div className="flex w-full items-center justify-between border-b pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl font-bold text-slate-700 font-Line-bd">
                      {post?.title}
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className=" text-neutral-500">{post?.userId}</div>
                    <div className=" text-neutral-500">2000.05.23</div>
                  </div>
                </div>
                <div className="mt-4 mb-6 items-center justify-center grid place-items-center">
                  {/* <div className="mb-3 text-xl font-bold">{boardDetail.title}</div> */}
                  <div className="text-lg text-neutral-600">{post?.body}</div>
                  <div className="mt-6">
                    <img
                      src="https://i.ibb.co/XxTY0vK/photo-2023-11-13-19-12-47.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="mx-2">
                      <button className="text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center border">
                        <svg
                          className="w-4 h-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                        </svg>
                        <span>개념</span>
                      </button>
                    </div>
                    <div className="mx-2">
                      <button className="text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center border">
                        <svg
                          className="w-4 h-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                        </svg>
                        <span>비추</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
          <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
        </div>
      </div>
    </>
  );
};

export default ViewPost;
