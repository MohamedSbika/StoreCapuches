import React from "react";
import iemail from "../img/iemail.png"
import iphone from "..//img/iphone.png"
import ilocation from "../img/ilocation.png"
import iwebsite from "../img/iwebsite.png"

export default function Contact() {
  return (
    <div>
      <h1 className="text-red-500 pt-10 text-3xl font-bold sm:ml-[13%] mb-8">
        CONTACT NOUS{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full text-center justify-center items-center">

        <div class=" py-3.5 text-base w-[50vw] md:w-[35vw] lg:w-[17vw] m-auto mt-6  h-[130px]  bg-red-500   rounded-3xl ">
          <img src={iemail} className="w-10 h-8 m-auto mb-1"/>
          <div className="col-span-4 text-center ">
            <h3 className="text-white font-bold">E-mail</h3>
            <p className="text-white">email@email.com</p>
          </div>
        </div>

        <div class=" py-3.5 text-base w-[50vw] md:w-[35vw] lg:w-[17vw] m-auto mt-6   h-[130px] bg-red-500  rounded-3xl">
        <img src={iphone} className="w-8 h-8 m-auto mb-1"/>
          <div className="col-span-4 text-center ">
            <h3 className="text-white font-bold">TELEPHONE</h3>
            <p className="text-white ">+216 00 000 000</p>
          </div>
        </div>

        <div class=" py-3.5 text-base w-[50vw] md:w-[35vw] lg:w-[17vw] m-auto mt-6 h-[130px] bg-red-500    rounded-3xl justify-center ">
        <img src={iwebsite} className="w-8 h-8 m-auto mb-1"/>
          <div className="col-span-4 text-center ">
            <h3 className="text-white font-bold">Site Web</h3>
            <p className="text-white">email.com</p>
          </div>
        </div>

        <div class=" py-3.5 text-base  w-[50vw] md:w-[35vw] lg:w-[17vw] m-auto mt-6 h-[130px] bg-red-500    rounded-3xl">
        <img src={ilocation} className="w-8 h-8 m-auto mb-1"/>
          <div className="col-span-4 text-center ">
            <h3 className="text-white font-bold">Adresse</h3>
            <p className="text-white  ">....................., 4000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

