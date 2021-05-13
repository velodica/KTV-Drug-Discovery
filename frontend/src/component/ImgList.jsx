import React, { useState, useEffect } from "react";
import axios from "axios";
import { Img } from "./Img";
import { RetroSynthesis } from "../pages/retrosynthesis";
import { Spin, Alert } from "antd";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const ImgList = (props) => {
  const resultChem = props.state.resultChem;

  if (resultChem !== "Loading") {
    return props.state.pageStage === "Suggestion" ? (
      numbers.map((number) => (
        <ui>
          {/* {`RX_${number}:    \n`} */}

          <Img
            number={number}
            result={resultChem[number - 1]}
            state={props.state}
            setState={props.setState}
          ></Img>
        </ui>
      ))
    ) : (
      <div>Select Smi</div>
    );
  } else {
    return props.state.pageStage !== "Init" ? (
      <div>
        <Spin tip="Loading..." size="large">
          <Alert message="" description="" type="" />
        </Spin>
      </div>
    ) : (
      <h1>Pls fill smi in the box</h1>
    );
  }
};