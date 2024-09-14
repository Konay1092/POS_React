import { LoaderCircle } from "lucide-react";

const MainLoading = () => {
  return (
    <div className="fixed inset-0 bg-black opacity-25 bg-blend-overlay z-50 grid place-content-center">
      <LoaderCircle color="pink" size={50} className="animate-spin " />
    </div>
  );
};

export default MainLoading;
