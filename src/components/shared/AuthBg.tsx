import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AuthBg = ({ children }: Props) => {
  return (
    <div
      className={`h-screen grid place-items-center lg:bg-[url('/assets/authBg.jpg')] bg-cover bg-no-repeat`}
    >
      {children}
    </div>
  );
};
