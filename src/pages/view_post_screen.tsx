import axios, { AxiosError } from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Post } from "../dto/Post";
import { Comment } from "../dto/Comment";
import Swal from "sweetalert2";
import { tokenToString } from "typescript";

const ViewPost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<Post>();
  const [comment, setComment] = useState("");
  const [change, setChange] = useState(true);
  const [commentList, setCommentList] = useState<Array<Comment>>([]);

  useEffect(() => {
    console.log("낄낄");
  }, [change]);

  let { id } = useParams();
  const postId = id;

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const url = `http://localhost:3000/post/${postId}`;
    try {
      const res = await axios.get(url);
      setPost(res.data);
      setCommentList(res.data.comments);
      console.log(commentList);
      console.log(res.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };
  const deletePost = async () => {
    // 글 삭제 url
    const url_delete = `http://localhost:3000/post/${postId}`;
    try {
      const token = localStorage.getItem("access-token");
      const res = await axios.delete(url_delete, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "삭제가 완료되었습니다.",
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
          text: "관리자에게 문의해 주세요.",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/");
      }
    }
  };
  const WriteComment = async (e: SyntheticEvent) => {
    const WriteCommentUrl = `http://localhost:3000/comment`;
    const body = {
      content: comment,
      parentId: postId,
    };
    const token = localStorage.getItem("access-token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.post(WriteCommentUrl, body, { headers });
      console.log(res);
      if (res.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "댓글 작성이 완료되었습니다.",
          showConfirmButton: false,
          timer: 1000,
        });
        window.location.replace(`/viewpost/${postId}`);
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
      navigate(`/viewpost/${postId}`);
    }
  };

  const UpdateComment = async (id: string) => {
    const WriteCommentUrl = `http://localhost:3000/comment/${id}`;
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });
    const body = {
      content: text,
      commentId: id,
    };
    const token = localStorage.getItem("access-token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.put(WriteCommentUrl, body, { headers });
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "댓글 수정이 완료되었습니다.",
          showConfirmButton: false,
          timer: 1000,
        });
        window.location.replace(`/viewpost/${postId}`);
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
      navigate(`/viewpost/${postId}`);
    }
  };

  const DeleteComment = async (id: string) => {
    const WriteCommentUrl = `http://localhost:3000/comment/${id}`;
    const token = localStorage.getItem("access-token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.delete(WriteCommentUrl, { headers });
      console.log(res);
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "댓글 삭제가  완료되었습니다.",
          showConfirmButton: false,
          timer: 1000,
        });
        window.location.replace(`/viewpost/${postId}`);
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
      navigate(`/viewpost/${postId}`);
    }
  };

  const PostGaechu = async (isRecommand: boolean) => {
    const recommandUrl = `http://localhost:3000/post/${postId}/recommand`;
    const body = {
      postId: postId,
      recommand: isRecommand,
    };
    const token = localStorage.getItem("access-token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const res = await axios.post(recommandUrl, body, { headers });
      console.log(res);
      if (res.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "댓글 작성이 완료되었습니다.",
          showConfirmButton: false,
          timer: 1000,
        });
        window.location.replace(`/viewpost/${postId}`);
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
      navigate(`/viewpost/${postId}`);
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
              <div className="flex flex-nowrap w-full">
                <div className="flex flex-start w-full">
                  <div className="flex flex-wrap pt-12">
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
                      목록으로 돌아가기
                    </Link>
                  </div>
                </div>
                <div className="flex flex-end w-full p-6 mb-2">
                  <div className="flex flex-wrap">
                    <div className="mx-2 mt-1 hover:animate-bounce">
                      <Link
                        to={`/updatepost/${postId}`}
                        className="text-white bg-green-500 font-medium py-2 px-4 rounded-lg tracking-wide mr-1 hover:bg-green-400"
                      >
                        <span>수정</span>
                      </Link>
                    </div>
                    <div className="mx-2">
                      <button
                        onClick={deletePost}
                        className="text-white bg-red-500 font-medium py-1 px-4 rounded-lg tracking-wide mr-1 hover:bg-red-400"
                      >
                        <span className="">삭제</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border p-5 shadow-md w-full bg-white mb-10">
                <div className="flex w-full items-center justify-between border-b pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl font-bold text-slate-700 font-Line-bd">
                      {post?.title}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className=" font-bold mr-1 text-blue-400">개념</div>
                    <div className=" text-neutral-500 mr-3">
                      {post?.recommand}
                    </div>
                    <div className=" font-bold mr-1 text-red-400">비추</div>
                    <div className=" text-neutral-500 mr-3">
                      {post?.unrecommand}
                    </div>
                    <div className=" font-bold mr-3">{post?.nickname}</div>
                    <div className=" font-bold mr-1">작성일</div>
                    <div className=" text-neutral-500">
                      {post?.createdAt.substr(0, 10)}
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-6 items-center justify-center grid place-items-center">
                  {/* <div className="mb-3 text-xl font-bold">{boardDetail.title}</div> */}
                  <div className="text-lg text-neutral-600">
                    {post?.content}
                  </div>
                  <div className="mt-10">
                    <img
                      src="https://i.ibb.co/WsxYcRR/Kakao-Talk-Photo-2023-11-06-20-20-06-removebg-preview.png"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-wrap mt-10">
                    <div className="mx-4">
                      <button
                        onClick={() => PostGaechu(true)}
                        className="text-grey-darkest font-bold py-2 px-4 rounded items-center border shadow-lg grid place-items-center hover:shadow-blue-400"
                      >
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
                      <button
                        onClick={() => PostGaechu(false)}
                        className="text-grey-darkest font-bold py-2 px-4 rounded items-center border shadow-lg grid place-items-center hover:shadow-red-400"
                      >
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
            <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-25 dark:opacity-100" />
            <h1 className="text-2xl mb-4 grid place-items-center font-bold">
              댓글
            </h1>
            <div className="grid place-items-center">
              <div className="w-3/4 rounded-lg p-4">
                {/* 댓글 쓰기 */}
                <div className="flex mx-auto items-center justify-center shadow-lg mb-4 max-w-lg">
                  <div className="w-full max-w-xl border bg-white rounded-lg px-4 pt-2">
                    <div className=" flex flex-wrap -mx-3 mb-6">
                      <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg font-bold">
                        댓글 작성
                      </h2>
                      <div className="w-full md:w-full px-3 mb-2 mt-2">
                        <textarea
                          className="bg-gray-100 rounded border leading-normal resize-none w-full h-20 py-2 px-3 focus:outline-none"
                          name="body"
                          placeholder="댓글을 작성해 주세요"
                          required
                          onChange={(event) => setComment(event.target.value)}
                        ></textarea>
                      </div>
                      <div className="w-full md:w-full flex items-end px-3">
                        <div className="-mr-1">
                          <button
                            onClick={WriteComment}
                            className="bg-purple-400 text-white py-1 px-4 rounded-lg tracking-wide mr-1 hover:bg-purple-300 font-bold"
                          >
                            작성
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 댓글 */}
                <div className="flex bg-white mx-4 md:mx-auto mt-6 max-w-md md:max-w-2xl border-y-2">
                  <div className="flex items-start px-4 py-6 w-full">
                    {commentList?.map((comment) => {
                      return (
                        <div className="w-full">
                          <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-gray-900">
                              {comment.content}
                            </h2>
                            <small className="text-sm text-gray-700">
                              {comment.createdAt.substr(0, 10)}
                            </small>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="grid place-items-end">
                              <div className="text-gray-700 text-sm ml-3">
                                <button
                                  onClick={() => UpdateComment(comment.id)}
                                  className="text-white bg-green-500 font-medium py-1 px-4 rounded-lg tracking-wide mr-1 hover:bg-green-400"
                                >
                                  수정
                                </button>
                                <button
                                  onClick={() => DeleteComment(comment.id)}
                                  className="text-white bg-red-500 font-medium py-1 px-4 rounded-lg tracking-wide mr-1 hover:bg-red-400"
                                >
                                  삭제
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-25 dark:opacity-100" />
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
