import Warejeans from "/assets/auth/resetpassword.jpg";

import ChangePasswordForm from "@/components/form-kit/changePassword/ChangePasswordForm";

import useResponsive from "@/utils/useResponsive";

import { AuthImage } from "@/components/shared/AuthImage";

const DestopComp = () => {
  return (
    <div className=" space-y-4 flex items-center h-screen pr-4">
      <div className="flex w-[50%] h-full md:w-[60%] ">
        <div className=" bg-pinkbg h-full w-1/2 z-0"></div>

        <AuthImage logo={Warejeans} />
      </div>
      <div className="flex flex-col items-center justify-center py-10 w-[50%] md:w-[33%] space-y-4 shadow-lg rounded-b-3xl">
        <div className="w-[85%] space-y-7">
          <h1 className="text-center font-bold text-xl lg:text-2xl">
            Reset Password
          </h1>
          <p className="text-sm lg:text-base">
            *Password must be 8+ characters, with at least one uppercase letter,
            one lowercase letter, one digit, and one special character.{" "}
          </p>
        </div>
        <ChangePasswordForm />
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
          <h1 className="text-center font-bold text-2xl"> Reset Password</h1>
          <p className="">
            *Password must be 8+ characters, with at least one uppercase letter,
            one lowercase letter, one digit, and one special character.{" "}
          </p>
        </div>
        <ChangePasswordForm />
      </div>
    </div>
  );
};

// const ResetPassword = () => {
//   return (
//     <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 h-screen">
//       <div className="flex items-center justify-center sm:w-1/2">
//         <img src={Warejeans} alt="" width={300} height={300} />
//       </div>
//       <div className="flex flex-col space-y-4 mx-4 py-4 sm:w-1/2">
//         <div className=" space-y-4">
//           <h1 className=" font-bold text-2xl">Reset Password</h1>
//           <p className="">
//             *Password must be 8+ characters, with at least one uppercase letter,
//             one lowercase letter, one digit, and one special character.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
const ForgotPassword = () => {
  const { desktopResponsive, tabletResponsive, mobileResponsive } =
    useResponsive();
  return (
    <div>
      {(desktopResponsive || tabletResponsive) && <DestopComp />}
      {mobileResponsive && <MobileComp />}
    </div>
  );
};

export default ForgotPassword;
