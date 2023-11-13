import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Post } from "../dto/Post";

const Main = () => {
  const [postList, setPostList] = useState<Array<any>>([]);

  useEffect(() => {
    getPostList();
  }, []);

  const getPostList = async () => {
    const url = `https://dummyjson.com/posts`;
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.get(url);
      setPostList(res.data?.posts);
      console.log(res.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  return (
    <div className="h-full w-full">
      <div className="min-h-screen bg-red-200 flex justify-center items-center p-12">
        <div className="absolute w-60 h-60 rounded-xl bg-yellow-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-yellow-400 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
        <div className="w-full p-8 bg-white rounded-2xl shadow-xl z-20">
          <div className=" flex items-center justify-between pb-3">
            <div>
              <h2 className="text-gray-600 font-bold text-3xl">영진갤러리</h2>
              <span className="text-xs">당신의 필력을 펼쳐보세요!!</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="lg:ml-40 ml-10 space-x-8">
                <button className="bg-purple-600 hover:bg-purple-400 px-4 py-2 rounded-md text-white font-bold tracking-wide cursor-pointer">
                  글 쓰기
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 sm:px-8 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="py-3 border-b-2 border-gray-200 bg-gray-100 font-bold text-gray-600 tracking-wider">
                        제목
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 font-bold text-gray-600 tracking-wider">
                        글쓴이
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 font-bold text-gray-600 tracking-wider">
                        작성일
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 font-bold text-gray-600 tracking-wider">
                        민주화
                      </th>
                    </tr>
                  </thead>
                  {postList.map((post) => {
                    return (
                      <tbody>
                        <tr>
                          <td className="py-5 border-b border-gray-200 bg-white">
                            <div className="flex items-center justify-center">
                              <p className="text-gray-900">{post?.title}</p>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                            <div className="flex items-center justify-center">
                              <p className="text-gray-900">{post?.userId}</p>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white">
                            <div className="flex items-center justify-center">
                              <p className="text-gray-900">Jan 21, 2020</p>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white">
                            <div className="flex items-center justify-center">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-green-300 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">민주화</span>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-purple-300 bg-purple-600 font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-purple-300 bg-purple-600 font-semibold py-2 px-4 rounded-r">
                      Next
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
  );
};
export default Main;
