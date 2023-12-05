import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Game = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("1~30 사이의 숫자를 맞춰보세요!");
  const [answer, setAnswer] = useState(0);
  const [tryNum, setTryNum] = useState(0);
  const [successNum, setSuccessNum] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(Math.ceil(Math.random() * 30));

  const returnFunc = (e: SyntheticEvent) => {
    e.preventDefault();
    if (+answer === rightAnswer) {
      console.log(answer);
      setStatus("정답!!!");
      setSuccessNum(successNum + 1);
      if (successNum === 9) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title:
            "사실 당첨금 같은건 없습니다. 인생을 이런 곳에 낭비하지 마십시오.",
          showConfirmButton: false,
          timer: 2800,
        });
        navigate("/");
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${tryNum}번째 시도 끝에 성공하셨습니다. 당첨금 획득까지 ${
            10 - successNum
          }번 남았습니다.`,
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(function () {
          resetFunc();
        }, 2008);
      }
    } else if (answer < rightAnswer) {
      setStatus("업");
    } else {
      setStatus("다운");
    }
    // 재임 리셋 후 또 다른 렌덤 숫자 생성,
    // 택스트 상태 변경
    // 현재 input 초기값 설정
  };
  const resetFunc = () => {
    setRightAnswer(Math.ceil(Math.random() * 30));
    setStatus("한번더! 1~30 사이의 숫자를 맞춰보세요!");
    setAnswer(0);
    setTryNum(0);
  };

  // input 값을 가져올수 있는 함수
  const changeAnswer = (e: any) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="w-full h-full position: fixed">
      <div className="h-screen w-screen bg-[url('./assets/images/kazino3.png')] bg-cover flex justify-center items-center">
        <div className="py-12 px-12 bg-gray-800 rounded-2xl shadow-xl z-20">
          <form className="grid place-items-center" onSubmit={returnFunc}>
            <h1 className="font-extrabold text-3xl mb-8 text-yellow-400">
              Up and Down
            </h1>
            <p className="mb-8 text-lg font-bold text-white">
              당첨금까지 남은 횟수 : {10 - successNum}
            </p>
            <p className="mb-8 text-lg font-bold text-white">{status}</p>
            <p className="mb-8 text-lg font-bold text-white">
              {tryNum}번째 시도
            </p>
            <div className="flex justify-center mb-8">
              <svg
                onClick={() => {
                  setAnswer(answer - 1);
                }}
                className="fill-current text-gray-600 w-6 mr-2"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              <input
                className="mx-2 border-2 border-gray-400 text-center w-20 h-10 rounded-full bg-gray-200 font-extrabold text-xl"
                type="text"
                value={answer}
                onChange={changeAnswer}
              />
              <svg
                onClick={() => {
                  setAnswer(answer + 1);
                }}
                className="fill-current text-gray-600 w-6 ml-2"
                viewBox="0 0 448 512"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <button
              onClick={() => {
                setTryNum(tryNum + 1);
                console.log(rightAnswer);
              }}
              className="py-3 w-64 text-xl bg-yellow-400 rounded-2xl font-extrabold mb-8"
            >
              확인
            </button>
            <p className="font-bold text-white">Sponsored By XmasKjr</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Game;
