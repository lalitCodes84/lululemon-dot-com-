import React from "react";
import Button from "./Button";

function ShopMatchingSets() {
  return (
    <div className="mt-46 w-full p-4">
      <div>
        <img
          src="https://images.lululemon.com/is/image/lululemon/na_jan25_wk5_W_Yoga_1_1_Med_MediaAction_D_WhatsNew?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt=""
        />
      </div>
      <h1 className="font-bold text-3xl mt-10">You've landed on cloud 9. </h1>
      <p className="mt-2">
        Iconic Align in new Goodnight Plum—so unbelievably soft, you might just
        pinch yourself.{" "}
      </p>
      <Button label="SHOP MATCHING SETS" className="mt-2"/>
    </div>
  );
}

export default ShopMatchingSets;
