const ViewPost = () => {
  return (
    <>
      <head>
        <link rel="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
      </head>
      <div className="w-full h-full position: fixed">
        <div className="min-h-screen bg-red-200 flex justify-center items-center">
          <div className="absolute w-60 h-60 rounded-xl bg-yellow-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
          <div className="absolute w-48 h-48 rounded-xl bg-yellow-400 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
          <div className="w-5/6 h-5/6 py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div className="flex items-center justify-center w-full">
              <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
                <div className="flex w-full items-center justify-between border-b pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-xl font-bold text-slate-700 font-Line-bd">
                      시발
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className=" text-neutral-500">시발럼</div>
                    <div className=" text-neutral-500">2000.05.23</div>
                  </div>
                </div>

                <div className="mt-4 mb-6">
                  {/* <div className="mb-3 text-xl font-bold">{boardDetail.title}</div> */}
                  <div className="text-lg text-neutral-600">허허허 시발것</div>
                  <div>
                    <img
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.blog.naver.com%2Funivmaum%2F221268820253&psig=AOvVaw0vk6nORv7B2FYzyhjN9CnK&ust=1699932429349000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCxyPaDwIIDFQAAAAAdAAAAABAE"
                      alt=""
                    />
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
