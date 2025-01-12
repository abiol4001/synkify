import React, { useState } from "react";
import { Period, MobileNav, Navbar } from "../../Components/ComingSoon";
import { heroImage, facebook, twitter, synkifyText, logo } from "../../assets";
import Countdown from "../../Components/countdown/Countdown";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);

  const success = () =>
    toast.success("Thanks for your interest in Synkify", {
      position: toast.POSITION.TOP_CENTER,
    });

  const emailValidation = () => {
    const regex = /\S+@\S+\.\S+/;

    if (regex.test(email)) {
      setValid(true);
      setMessage("Email is valid");
    } else if (email === "") {
      setValid(false);
      console.log(setMessage("Input your email address"));
    } else if (!regex.test(email)) {
      setValid(false);
      setMessage("Email is invalid");
    } else {
      setMessage("");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Posting email to the API
  const handleSubmit = async (e) => {
    const myData = {
      email: email,
    };
    e.preventDefault();
    if (valid) {
      const result = await fetch(
        "https://synkify-api.onrender.com/api/v1/newsletters",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(myData),
        }
      );

      success();
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="w-full">
      <Navbar />
      <ToastContainer
        autoClose={2000} style={{
          text: "center"
        }} />
      <div className="py-[50px]">
        <div className="max-w-[1400px] w-[90%] mx-auto">
          <div className="grid grid-rows-2 md:grid-rows-1 gap-8 md:gap-0 md:grid-cols-3 mb-[50px] place-items-center">
            {/* <div className="grid grid-rows-2 md:grid-rows-1 gap-8 md:gap-0 md:grid-cols-3 md:h-[50px] mb-[50px]"> */}
            <div className="hidden md:block"></div>
            <div className="flex justify-center">
              {/* <div className="bg-[#346265] w-[50%] grid place-items-center">
                <h1 className="text-white text-2xl md:text-4xl font-bold">
                  Logo
                </h1>
              </div> */}
              <img src={logo} alt="Logo" className="h-[120px] w-[450px]" />
            </div>
            <div className="flex justify-center h-[50px]">
              <img src={synkifyText} alt="" />
            </div>
          </div>
          <div className="w-[80%] md:w-[60%] mx-auto py-3">
            <h1 className="text-[#346265] text-4xl md:text-5xl text-center font-bold font-sans leading-tight">
              Synkify is coming to you soon!
            </h1>
            <div className="md:w-[85%] mx-auto">
              <p className="text-lg md:text-[18px] text-black text-center md:text-start leading-loose md:leading-relaxed mt-4">
                Never loose your consumers’ attention with Synkify. Engage with
                more audience, respond promptly, and share relevant contents
                from our Platform. Subscribe to our Newsletter to get full
                updates when the website launches
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-[90%] md:w-[80%] mx-auto my-8 relative grid grid-rows-2 md:grid-rows-1 gap-12 md:gap-0 md:grid-cols-3"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email Address"
                className="p-4 md:col-span-2 text-xl border border-[#5B9EA5] rounded-lg"
              />
              <button
                onClick={emailValidation}
                className="bg-[#013B3F] text-white p-2 mx-4 rounded-lg text-xl hover:scale-90 transition duration-500"
              >
                NOTIFY ME
              </button>
              <div className="absolute ml-4 md:-bottom-6 top-16">
                <span
                  className={`${valid ? "text-green-600" : "text-red-400"
                    } text-sm`}
                >
                  {message}
                </span>
              </div>
            </form>
          </div>
          <div className="w-[70%] mx-auto my-[60px] flex justify-center">
            <img src={heroImage} className="object-cover h-full" />
          </div>
          <section>
            <h3 className="text-[#1A4F52] text-xl md:text-3xl text-center font-bold font-sans leading-tight">
              Hang on! we’ve got something exciting for you here. Let the
              count-down begin
            </h3>
            {/* <div className="my-8 grid place-items-center grid-rows-1">
              <div className="flex gap-2">
                <Period number="28" text="Days" />
                <Period number="45" text="Hours" />
                <Period number="56" text="Minutes" />
                <Period number="32" text="Seconds" />
              </div>
            </div> */}
            <Countdown />
            <div className="flex justify-between md:w-[70%] mx-auto">
              <h3 className="text-[#1A4F52] text-xl md:text-[28px] font-bold font-sans leading-tight w-[60%]">
                We post trends and challenges on our social media handle, follow
                us on
              </h3>
              <div className="flex justify-end w-[30%] gap-5 md:gap-10 ">
                <a
                  href="https://www.facebook.com/profile.php?id=100089188536675"
                  target="_blank"
                >
                  <img
                    src={facebook}
                    className="h-[40px] md:h-[60px] hover:scale-125 transition duration-500"
                  />
                </a>
                <a href="https://twitter.com/synkify_" target="_blank">
                  <img
                    src={twitter}
                    className="h-[40px] md:h-[60px] hover:scale-125 transition duration-500"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
