import React from "react";
import Warejeans from "/assets/otpvalidation.png";

import { InputOTPForm } from "@/components/form-kit/otp/OtpForm";
import { Link } from "react-router-dom";

const OtpValidation = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col sm:flex-row items-center justify-center h-screen">
      <div className="flex items-center justify-center ">
        <img src={Warejeans} alt="" />
      </div>
      <div className="space-y-4 px-4 flex flex-col justify-center ">
        <h1 className=" font-bold text-2xl">OTP Verification</h1>
        <p className="">
          Please enter the OTP that was sent to your Email Address.
        </p>
        <InputOTPForm />
        <p className="">
          If you didn’t receive the OTP,{" "}
          <Link to={"/"} className="text-blue-600">
            Resend
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default OtpValidation;
