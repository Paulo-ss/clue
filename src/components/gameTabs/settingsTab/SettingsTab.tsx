"use client";

import resetAnnotationsCookie from "@/actions/resetAnnotationsCookie";
import { Button } from "@/components/ui/button/button";
import { IconRefresh } from "@tabler/icons-react";
import { FC } from "react";

interface IProps {
  onTabChange: (tab: string) => void;
}

const SettingsTab: FC<IProps> = ({ onTabChange }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-3 p-2">
      <Button
        variant="outline"
        onClick={() => {
          resetAnnotationsCookie();
          onTabChange("characters");
        }}
      >
        <IconRefresh /> Reiniciar partida
      </Button>
    </div>
  );
};

export default SettingsTab;
