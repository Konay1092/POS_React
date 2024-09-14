export const AuthImage = ({ logo }: { logo: string }) => {
  return (
    <div className="flex items-center justify-center sm:-ml-32 sm:z-10 py-5 sm:py-0 ">
      <img
        src={logo}
        alt=""
        className="w-[300px]  sm:w-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] h-[300px] lg:h-[400px] sm:h-[250px] sm:shadow-lg sm:border-r-hidden sm:rounded-l-3xl"
      />
    </div>
  );
};
