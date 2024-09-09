import React from "react";
import logo from "../img/IMG.jpg"

export default function Card1() {
  return (
    <div className=" grid items-center justify-center" >
      <div className="  grid place-items-center  max-h-full  max-w-[100vw]  sm:pt-20 mx-auto sm:p-32 p-6 font-[sans-serif]">
        <div className="grid md:grid-cols-2 items-center gap-4  ">
          <div className="md:col-span-1">
            <div className="mb-12 sm:max-w-[50vw]">
              <h2 className="text-black text-3xl font-extrabold">
              A PROPOS DE NOUS
              </h2>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur esse itaque, accusamus molestias neque quos aut tempora perspiciatis impedit corrupti sint et voluptatibus alias quae recusandae id qui nemo dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque, maiores incidunt saepe delectus voluptatem distinctio tempora vitae, commodi fuga nostrum. Asperiores ipsam enim explicabo nam debitis aliquid totam a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque commodi, atque explicabo officiis totam. Deserunt facilis corrupti illo ut incidunt exercitationem placeat deleniti ipsam quod, rerum, iste minus blanditiis.</p>
            </div>
          </div>
          <div>
            <img
              src={logo}
              className="grid place-items-center w-[20vw]  sm:ml-64 rounded-3xl "
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
