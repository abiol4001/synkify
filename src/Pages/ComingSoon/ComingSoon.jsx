import React from "react";
import {Period, MobileNav, Navbar} from "../../Components/ComingSoon";
import {heroImage, facebook, twitter, synkifyText} from "../../assets";

export default function ComingSoon() {
  return (
    <div className="w-full bg-[#EBEAEB]" >
    <Navbar/>
      <div className="py-[50px]">
        <div className="max-w-[1400px] w-[90%] mx-auto">
          <div className="grid grid-rows-2 md:grid-rows-1 gap-8 md:gap-0 md:grid-cols-3 md:h-[50px] mb-[50px]">
            <div className="hidden md:block"></div>
            <div className="flex justify-center">
              <div className="bg-[#346265] w-[50%] grid place-items-center">
                <h1 className="text-white text-2xl md:text-4xl font-bold">
                  Logo
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={synkifyText} alt="" />
            </div>
          </div>
          <div className="w-[80%] md:w-[70%] mx-auto">
            <h1 className="text-[#346265] text-4xl md:text-6xl text-center font-bold font-sans leading-tight">
              This page is coming soon
            </h1>
            <p className="text-lg md:text-2xl text-black text-center leading-loose md:leading-relaxed mt-4">
              Never loose your consumers’ attention with Synkify. Engage with
              more audience, respond promptly, and share relevant contents from
              our Platform. Subscribe to our Newsletter to get full updates when
              the website launches
            </p>
            <div className="w-[90%] md:w-[80%] mx-auto my-8 grid grid-rows-2 md:grid-rows-1 gap-4 md:gap-0 md:grid-cols-3">
              <input
                type="text"
                placeholder="What's your email?"
                className="p-2 md:col-span-2 text-xl border border-[#5B9EA5] rounded-lg"
              />
              <button className="bg-[#013B3F] text-white p-2 mx-4 rounded-lg text-xl">
                NOTIFY ME
              </button>
            </div>
          </div>
          <div className="w-[70%] mx-auto flex justify-center">
            <img src={heroImage} className="object-cover h-full" />
          </div>
          <section>
            <h3 className="text-[#346265] text-xl md:text-3xl font-bold font-sans leading-tight">
              Hang on! we’ve got something for you here.
            </h3>
            <div className="my-8 grid place-items-center grid-rows-1">
              <div className="flex gap-2">
                <Period number="28" text="Days" />
                <Period number="45" text="Hours" />
                <Period number="56" text="Minutes" />
                <Period number="32" text="Seconds" />
              </div>
            </div>
            <div className="flex justify-between">
              <h3 className="text-[#346265] text-xl md:text-3xl font-bold font-sans leading-tight w-[60%]">
                We post trends and challenges on our social media handle, follow
                us on
              </h3>
              <div className="flex justify-end w-[30%] gap-10">
                <img src={facebook} className="h-[40px] md:h-[60px]" />
                <img src={twitter} className="h-[40px] md:h-[60px]" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}