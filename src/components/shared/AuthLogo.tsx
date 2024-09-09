import Logo from "/assets/logo/logo.jpg";

export const AuthLogo = ({
  width,
  height,
  mobile,
}: {
  width?: number;
  height?: number;
  mobile?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <div className="flex items-center justify-center">
        <img
          className="mx-auto"
          src={Logo}
          alt=""
          width={width || 180}
          height={height || 180}
        />
      </div>
      {!mobile && (
        <h4 className="text-center font-bold text-2xl lg:text-2xl">
          Nadi Yoon Htike
        </h4>
      )}
    </div>
  );
};
