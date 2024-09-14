import Warejeans from "/assets/auth/otpvalidation.jpg";

import { InputOTPForm } from "@/components/form-kit/otp/OtpForm";
import { Link } from "react-router-dom";
import { AuthImage } from "@/components/shared/AuthImage";
import useResponsive from "@/utils/useResponsive";

const DestopComp = () => {
  return (
    <div className="flex  space-y-4 items-center h-screen pr-4">
      <div className=" flex h-full  w-[50%] md:w-[60%]">
        <div className=" bg-pinkbg h-full w-1/2 z-0"></div>
        <AuthImage logo={Warejeans} />
      </div>
      <div className="flex flex-col items-center justify-center  py-10 w-[50%] md:w-[45%] xl:w-[30%] space-y-4 shadow-lg rounded-b-3xl px-4 p-0">
        <div className=" w-full px-4 space-y-4">
          <h1 className="font-bold text-xl lg:text-2xl">OTP Verification</h1>
          <p className="text-sm lg:text-base">
            Please enter the OTP that was sent to your Email Address.
          </p>
          <InputOTPForm />
          <p className="text-center">
            If you didn’t receive the OTP,{" "}
            <Link to={"/"} className="text-blue-600">
              Resend
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const MobileComp = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <AuthImage logo={Warejeans} />
      <div className="flex flex-col items-center justify-center py-10 w-full space-y-4 px-4 ">
        <div className="w-full space-y-4">
          <h1 className=" font-bold text-2xl">OTP Verification</h1>
          <p className="">
            Please enter the OTP that was sent to your Email Address.
          </p>
          <InputOTPForm />
          <p className="text-center">
            If you didn’t receive the OTP,{" "}
            <Link to={"/"} className="text-blue-600">
              Resend
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const OtpValidation = () => {
  const { desktopResponsive, tabletResponsive, mobileResponsive } =
    useResponsive();
  return (
    <div>
      {(desktopResponsive || tabletResponsive) && <DestopComp />}
      {mobileResponsive && <MobileComp />}
    </div>
  );
};

export default OtpValidation;
