import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const ButtonAlign = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 mt-10">
      <Button variant="welcome" onClick={() => navigate("/login")}>
        Sign In
      </Button>
      <Button variant="none" onClick={() => navigate("/register")}>
        Register
      </Button>
    </div>
  );
};
