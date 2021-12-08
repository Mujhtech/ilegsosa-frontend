import React from "react";
import {
  styled615,
  ellipse_221,
  chevron_wrapper1,
} from "./Chevron1.module.css";

function Chevron() {
  return (
    <div className={chevron_wrapper1}>
      <img src="/images/ic-arrow-forward-18px-12.svg" className={styled615} />
      <div className={ellipse_221} />
    </div>
  );
}

export default Chevron;
