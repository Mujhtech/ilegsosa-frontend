import React from "react";
import { ellipse_22, styled592, chevron_wrapper } from "./Chevron.module.css";

function Chevron() {
  return (
    <div className={chevron_wrapper}>
      <div className={ellipse_22} />
      <img src="/images/ic-arrow-forward-18px-11.svg" className={styled592} />
    </div>
  );
}

export default Chevron;
