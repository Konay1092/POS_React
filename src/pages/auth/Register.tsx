import { ArrowLeft } from "lucide-react";
import { CardShared } from "@/components/shared/CardShared";
import { AuthLogo } from "@/components/shared/AuthLogo";
import { AuthBg } from "@/components/shared/AuthBg";
import RegisterForm from "@/components/form-kit/register";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import useResponsive from "@/utils/useResponsive";

const DesktopRegisterComp = () => {
  return (
    <Card className="shadow-lg rounded-lg  border border-gray-100 h-[80vh] min-h-[80vh] max-h-[80vh]">
      <CardContent className="p-4 h-full">
        <div className="text-center">
          <h1 className="text-black text-2xl font-bold">Create Account</h1>
          <p className="my-4">
            Please create your account to explore all the products
          </p>
        </div>
        <div className="h-full">
          <RegisterForm />
        </div>
      </CardContent>
    </Card>
  );
};

const MobileRegisterComp = () => {
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
        <AuthLogo width={80} height={80} mobile={true} />
        <div className="text-center">
          <h1 className="text-black text-xl font-bold my-3">Create Account</h1>
          <p className="my-4 text-sm">
            Please create your account to explore all the products
          </p>
        </div>
        <div className="w-[80%] md:max-w-[40%]">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

const Register = () => {
  const { desktopResponsive, mobileResponsive, tabletResponsive } =
    useResponsive();
  return (
    <AuthBg>
      {desktopResponsive && (
        <CardShared logo={<AuthLogo />} cardContent={<DesktopRegisterComp />} />
      )}

      {(mobileResponsive || tabletResponsive) && <MobileRegisterComp />}
    </AuthBg>
  );
};

export default Register;
