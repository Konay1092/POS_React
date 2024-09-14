import Warejeans from "/assets/auth/forgotpassword.jpg";
import { AuthImage } from "@/components/shared/AuthImage";
import ForgotPasswordForm from "@/components/form-kit/forgotpassword/ForgotPasswordForm";
import useResponsive from "@/utils/useResponsive";

const DestopComp = () => {
  return (
    <div className=" space-y-4 flex items-center h-screen pr-4">
      <div className="flex w-[50%] h-full md:w-[60%] ">
        <div className=" bg-pinkbg h-full w-1/2 z-0"></div>

        <AuthImage logo={Warejeans} />
      </div>
      <div className="flex flex-col items-center justify-center py-10 w-[50%] md:w-[33%] space-y-4 shadow-lg rounded-b-3xl px-4 p-0">
        <div className="w-[85%] space-y-7">
          <h1 className="text-center font-bold text-xl lg:text-2xl">
            Forgot Password?
          </h1>
          <p className="text-sm lg:text-base">
            Don’t worry ! It happens. Please enter the phone number we will send
            the OTP in this phone number.
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

const MobileComp = () => {
  return (
    <div className="flex flex-col space-y-4">
      <AuthImage logo={Warejeans} />
      <div className="flex flex-col items-center justify-center py-10 w-full space-y-4 px-4">
        <div className="w-full space-y-7">
          <h1 className="text-center font-bold text-2xl">Forgot Password?</h1>
          <p className="">
            Don’t worry ! It happens. Please enter the phone number we will send
            the OTP in this phone number.
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

const ResetPassword = () => {
  const { desktopResponsive, tabletResponsive, mobileResponsive } =
    useResponsive();
  return (
    <div>
      {(desktopResponsive || tabletResponsive) && <DestopComp />}
      {mobileResponsive && <MobileComp />}
    </div>
  );
};

export default ResetPassword;
