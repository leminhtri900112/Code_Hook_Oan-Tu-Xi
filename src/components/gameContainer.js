import React, { useEffect, useState } from "react";
import KetQua from "./KetQua";
import OanTuXi from "./OanTuXi";
import bgGame from "../assets/img/bgGame.png";
import { randomIntFromInterval } from "../utils/randomNumber";

export default function GameContainer() {
  let [selectPlayer, setSelectPlayer] = useState("keo");
  let [selectComputer, setSelectComputer] = useState("keo");
  let [soLuotChoi, setSoLuotChoi] = useState(0);
  let [soLuotThang, setSoLuotThang] = useState(0);
  let [ketQua, setKetQua] = useState(null);
  console.log("render");
  const playGame = () => {
    setSoLuotChoi(soLuotChoi + 1);
    switch (randomIntFromInterval(1, 3)) {
      case 1:
        setSelectComputer("keo");
        console.log("keo");

        break;
      case 2:
        setSelectComputer("bua");
        console.log("bua");
        break;
      case 3:
        setSelectComputer("bao");
        console.log("bao");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log("useeffect");
    if (selectPlayer === selectComputer) {
      setKetQua("Hòa");
    } else if (selectPlayer === "keo" && selectComputer === "bua") {
      setKetQua("Thua");
    } else if (selectPlayer === "keo" && selectComputer === "bao") {
      setKetQua("Thắng");
      setSoLuotThang(soLuotThang + 1);
    } else if (selectPlayer === "bua" && selectComputer === "keo") {
      setKetQua("Thắng");
      setSoLuotThang(soLuotThang + 1);
    } else if (selectPlayer === "bua" && selectComputer === "bao") {
      setKetQua("Thua");
    } else if (selectPlayer === "bao" && selectComputer === "keo") {
      setKetQua("Thua");
    } else if (selectPlayer === "bao" && selectComputer === "bua") {
      setKetQua("Thắng");
      setSoLuotThang(soLuotThang + 1);
    }
  }, [selectComputer]);

  return (
    <div
      className=" bg-game h-screen w-screen bg-contain bg-bottom"
      style={{
        backgroundImage: `url(${bgGame})`,
      }}
    >
      <OanTuXi
        selectPlayer={selectPlayer}
        setSelectPlayer={setSelectPlayer}
        playGame={playGame}
        ketQua={ketQua}
        selectComputer={selectComputer}
      />
      <KetQua soLuotChoi={soLuotChoi} soLuotThang={soLuotThang} />
    </div>
  );
}
