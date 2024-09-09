import React from "react";
import { Card, CardContent } from "../ui/card";
import classNames from "classnames";

interface CardProps {
  logo: React.ReactNode;
  cardContent: React.ReactNode;
  cardClassName?: string;
  contentClassName?: string;
}

export const CardShared = ({
  logo,
  cardContent,
  cardClassName,
  contentClassName,
}: CardProps) => {
  const defaultCardClassName =
    "bg-white w-[60rem] min-w-[50rem] max-w-[60rem] rounded-3xl overflow-hidden border border-gray-50 shadow-sm";
  const defaultContentClassName = "flex justify-between  p-0";

  return (
    <Card className={classNames(defaultCardClassName, cardClassName)}>
      <CardContent
        className={classNames(defaultContentClassName, contentClassName)}
      >
        <div className="flex items-center justify-center mb-4 ml-40">
          {logo}
        </div>
        {cardContent}
      </CardContent>
    </Card>
  );
};
