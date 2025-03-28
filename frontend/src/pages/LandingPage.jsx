import React from "react";
import WhatsNewThisWeek from "../components/WhatsNewThisWeek";
import ShopMatchingSets from "../components/ShopMatchingSets";
import Button from "../components/Button";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <div>
        <div className="flex justify-end">
          <div className="absolute left-0 top-64 bg-white w-66 p-8">
            <span>
              <img src="lululemonText.png" alt="" className="w-40" />
            </span>
            <div className="flex flex-col h-fit">
              <a href="">Women's What's New</a>
              <br />
              <a href="">Men's What's New</a>
              <br />
              <a href="">All Women's</a>
              <br />
              <a href="">All Men's</a>
              <br />
              <a href="">All Accessories</a>
              <br />
            </div>
          </div>
          <img
            src="na_Mar25_wk4_W_OTM_3_1_D_HP_Static.webp"
            className="w-[88vw] mr-6"
            alt=""
          />
          <Button
            label={"SHOP WHAT'S NEW"}
            className="absolute right-14 bottom-[-120px] bg-white text-black cursor-pointer py-4 px-6 font-bold rounded border-2 hover:bg-black hover:text-white hover:border-black"
          />
        </div>
        <div className="flex justify-between w-[88vw] items-center m-auto ml-32 my-6">
          <h1 className="font-bold text-4xl ">Dressing up is the ocassion</h1>
          <p className="">
            When Wunder Under and Align feel so freeing—why wait for an excuse?
          </p>
        </div>
      </div>
      <WhatsNewThisWeek />
      <ShopMatchingSets />
      <Footer />
    </div>
  );
}

export default LandingPage;
