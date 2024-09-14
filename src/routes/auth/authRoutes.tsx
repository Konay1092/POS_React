import type { Routes } from "@/types/routes";
import {
  LazyLogin,
  LazyRegister,
  LazyChangePassword,
  LazyForgotPassword,
  LazyWelcome,
  LazyOtpValidate,
  LazyResetPasswordSuccess,
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
    path: "/otp-validation",
    element: <LazyOtpValidate />,
  },
  {
    key: "forgot-password",
    path: "/forgotpassword",
    element: <LazyForgotPassword />,
  },
  {
    key: "reset-password-success",
    path: "/reset-password-success",
    element: <LazyResetPasswordSuccess />,
  },
  {
    key: "welcome",
    path: "/welcome",
    element: <LazyWelcome />,
  },
];

export default authRoutes;
