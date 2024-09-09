import { lazy } from "react";

// public pages
export const LazyLogin = lazy(() => import("@/pages/auth/Login"));
export const LazyRegister = lazy(() => import("@/pages/auth/Register"));
export const LazyChangePassword = lazy(
  () => import("@/pages/auth/ChangePassword")
);
export const LazyOtpValidate = lazy(() => import("@/pages/auth/OtpValidation"));
export const LazyResetPassword = lazy(
  () => import("@/pages/auth/ResetPassword")
);
export const LazyWelcome = lazy(() => import("@/pages/welcome"));
export const LazyProducts = lazy(() => import("@/pages/products"));
export const LazyProductDetails = lazy(() => import("@/pages/productDetails"));
export const LazyBrands = lazy(() => import("@/pages/brands"));
export const LazyBrandDetails = lazy(() => import("@/pages/brandDetails"));
export const LazyHome = lazy(() => import("@/pages/home"));
export const LazyCreateProfile = lazy(
  () => import("@/pages/auth/CreateProfile")
);

// private pages (add your private page imports here as needed)
export const LazyProfile = lazy(() => import("@/pages/profile"));
export const LazyWishList = lazy(() => import("@/pages/wishList"));
export const LazyCheckOut = lazy(() => import("@/pages/checkout"));
export const LazyAddToCart = lazy(() => import("@/pages/addToCart"));
