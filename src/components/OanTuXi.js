import React from "react";

export default function OanTuXi(props) {
  const { selectPlayer, setSelectPlayer, playGame, ketQua, selectComputer } =
    props;
  return (
    <div className="container mx-auto grid grid-cols-3">
      <div>
        <h3 className="text-4xl text-center text-red-600 py-5">Player</h3>
        <img
          className="w-20 mx-auto bg-blue-600"
          src={`./img/${selectPlayer}.png`}
        />
        <img className="w-44 mx-auto" src="./img/player.png" />
        <div className="flex">
          <img
            onClick={() => {
              setSelectPlayer("keo");
            }}
            className="w-20 mx-auto border-4 border-red-500"
            src="./img/keo.png"
          />
          <img
            onClick={() => {
              setSelectPlayer("bua");
            }}
            className="w-20 mx-auto border-4 border-red-500"
            src="./img/bua.png"
          />
          <img
            onClick={() => {
              setSelectPlayer("bao");
            }}
            className="w-20 mx-auto border-4 border-red-500"
            src="./img/bao.png"
          />
        </div>
      </div>
      <div className="text-center text-white text-6xl">
        <div className="bg-green-600 p-6 rounded-lg border-4">Oán Tù Xì</div>
        <div className="text-green-600 text-4xl mt-14">Kết quả</div>
        <div className="text-red-600 mt-8 text-6xl">{ketQua}</div>
        <button
          onClick={() => {
            playGame();
          }}
          className="bg-green-600 text-white py-2 px-4 text-2xl mt-14 rounded-xl"
        >
          Play Game
        </button>
      </div>
      <div>
        <h3 className=" text-4xl text-center text-red-600  py-5">Bot</h3>
        <img
          className="w-20 mx-auto bg-blue-600"
          src={`./img/${selectComputer}.png`}
        />
        <img className="w-44 mx-auto" src="./img/playerComputer.png" />
      </div>
    </div>
  );
}
