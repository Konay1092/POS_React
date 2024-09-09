import { Eye, EyeOff } from "lucide-react";

export const openCloseEyesPassword = (password: boolean) => {
  return (
    <>
      {password ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
    </>
  );
};
