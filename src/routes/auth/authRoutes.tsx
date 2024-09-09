import type { Routes } from "@/types/routes";
import {
  LazyLogin,
  LazyRegister,
  LazyChangePassword,
  LazyResetPassword,
  LazyWelcome,
  LazyOtpValidate,
  LazyCreateProfile,
} from "../lazy";

const authRoutes: Routes = [
  {
    key: "login",
    path: "/login",
    element: <LazyLogin />,
  },
  {
    key: "register",
    path: "/register",
    element: <LazyRegister />,
  },
  {
    key: "change-password",
    path: "/change-password",
    element: <LazyChangePassword />,
  },
  {
    key: "otp-validation",
    path: "/change-password/otp-validation",
    element: <LazyOtpValidate />,
  },
  {
    key: "reset-password",
    path: "/reset-password",
    element: <LazyResetPassword />,
  },
  {
    key: "welcome",
    path: "/welcome",
    element: <LazyWelcome />,
  },
  {
    key: "create-profile",
    path: "/create-profile",
    element: <LazyCreateProfile />,
  },
];

export default authRoutes;
