import { Card, CardContent } from "@/components/ui/card";
import { ButtonAlign } from "./ButtonAlign";
import { WelcomeText } from "./WelcomeText";

export const WelcomeCard = () => {
  return (
    <Card className="shadow-lg rounded-lg  border border-gray-100">
      <CardContent className="p-5">
        <WelcomeText />
        <ButtonAlign />
      </CardContent>
    </Card>
  );
};
