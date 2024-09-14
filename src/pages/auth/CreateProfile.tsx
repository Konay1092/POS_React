import { CardShared } from "@/components/shared/CardShared";
import useResponsive from "@/utils/useResponsive";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AuthBg } from "@/components/shared/AuthBg";
import { AuthLogo } from "@/components/shared/AuthLogo";
import { ArrowLeft } from "lucide-react";

const CreateProfileForm = () => {
  return (
    <>
      <Input type="text" placeholder="Full Name" className="bg-gray-100" />
      <Button type="button" className="w-full">
        Confirm
      </Button>
    </>
  );
};

const MobileCreateProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <p
        className="absolute top-5 left-5 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
      </p>
      <div className="h-full py-10">
        <AuthLogo width={80} height={80} mobile={true} />
        <div className="text-center">
          <h1 className="text-black text-2xl font-bold my-5">Create Profile</h1>
          <p className="my-4 text-sm">
            Please enter your user name to set up your profile
          </p>
        </div>
        <div className="w-[100%] sm:max-w-[40%] sm:min-w-[40%] px-4 pt-4 sm:px-0 h-[40%] flex flex-col justify-between mx-auto">
          <CreateProfileForm />
        </div>
      </div>
    </div>
  );
};

const DesktopCreateProfile = () => {
  return (
    <AuthBg>
      <CardShared
        cardClassName="py-10"
        logo={<AuthLogo />}
        cardContent={
          <Card className="shadow-lg rounded-lg  border border-gray-100">
            <CardContent className="p-5 h-full flex flex-col justify-between text-center">
              <div className="flex flex-col gap-y-5">
                <h1 className="text-2xl font-bold">Create Profile</h1>
                <p> Please enter your user name to set up your profile</p>
              </div>
              <CreateProfileForm />
            </CardContent>
          </Card>
        }
      />
    </AuthBg>
  );
};

const CreateProfile = () => {
  const { desktopResponsive, mobileResponsive, tabletResponsive } =
    useResponsive();

  return (
    <>
      {desktopResponsive && <DesktopCreateProfile />}
      {(tabletResponsive || mobileResponsive) && <MobileCreateProfile />}
    </>
  );
};

export default CreateProfile;
