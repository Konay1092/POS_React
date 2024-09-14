import { CardShared } from "@/components/shared/CardShared";
import { AuthLogo } from "@/components/shared/AuthLogo";
import { AuthBg } from "@/components/shared/AuthBg";
import LoginForm from "@/components/form-kit/login";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import useResponsive from "@/utils/useResponsive";
import { ArrowLeft } from "lucide-react";

const DesktopLoginComp = () => {
  return (
    <Card className="shadow-lg rounded-lg  border border-gray-100 h-[80vh] min-h-[80vh] max-h-[80vh]">
      <CardContent className="p-4 h-full">
        <div className="text-center ">
          <h1 className="text-black text-2xl font-bold">Welcome Back</h1>
          <p className="my-4">
            Please enter your account details to sign in your account
          </p>
        </div>
        <div className="h-full pt-8">
          <LoginForm />
        </div>
      </CardContent>
    </Card>
  );
};

const MobileLoginComp = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen relative px-4">
      <p
        className="absolute top-5 left-5 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
      </p>

      <div className="flex flex-col items-center justify-center h-full">
        <AuthLogo width={80} height={80} />
        <div className="text-center">
          <h1 className="text-black text-lg font-bold">Welcome Back</h1>
          <p className="my-4 text-sm">
            Please enter your account details to sign in your account
          </p>
        </div>
        <div className="w-[80%] md:max-w-[40%]">
          <LoginForm mobile={true} />
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const { desktopResponsive, mobileResponsive, tabletResponsive } =
    useResponsive();
  return (
    <AuthBg>
      {desktopResponsive && (
        <CardShared logo={<AuthLogo />} cardContent={<DesktopLoginComp />} />
      )}

      {(mobileResponsive || tabletResponsive) && <MobileLoginComp />}
    </AuthBg>
  );
};

export default Login;
