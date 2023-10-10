// import { useState } from "react";
import data from "./data.json";
import { useParams } from "react-router-dom";
import React from "react";
import TypeResultContent from "./TypeResultContent";
import GetPic from "./Result/GetPic";
import "./TypeResult.css";

export default function TypeResult(props) {
  const params = useParams();
  const clickedtype = data.typeList.find(({ type }) => type === params.id);

  return (
    <div
      className="TypeResult"
      style={{ display: "flex", gap: "10px", width: "100%" }}
    >
      <div className="typeResult-left" style={{ width: "30%", gap: "10px" }}>
        <div className="type">
          <img src={GetPic(clickedtype.type)} alt={clickedtype.type} />
        </div>
        <div className="typeBar">{clickedtype.type}</div>
      </div>
      <div className="typeResult-right" style={{ width: "70%", gap: "10px" }}>
        <TypeResultContent showingtype={clickedtype} />
      </div>
    </div>
  );
}
