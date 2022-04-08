import React from "react";

export default function KetQua(props) {
  return (
    <div className="container mx-auto text-center bg-white mt-48 rounded-xl w-2/3">
      <div className="text-4xl  py-4">
        Số lượt thắng: <span className="text-red-600">{props.soLuotThang}</span>
      </div>
      <div className="text-4xl py-4">
        Số lượt chơi: <span className="text-green-600">{props.soLuotChoi}</span>
      </div>
    </div>
  );
}
