"use client";

import { FC, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs/tabs";
import CharactersTab from "./charactersTab/CharactersTab";
import PlacesTab from "./placesTab/PlacesTab";
import WeaponsTab from "./weaponsTab/WeaponsTab";
import { IAnnotation } from "@/interfaces/annotation";
import { IconSettings } from "@tabler/icons-react";
import SettingsTab from "./settingsTab/SettingsTab";

interface IProps {
  currentAnnotations: IAnnotation[];
}

const GameTabs: FC<IProps> = ({ currentAnnotations }) => {
  const [activeTab, setActiveTab] = useState("characters");

  const onTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full md:w-3/4 p-4">
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="characters">Personagens</TabsTrigger>

          <TabsTrigger value="weapons">Armas</TabsTrigger>

          <TabsTrigger value="places">Lugares</TabsTrigger>

          <TabsTrigger value="settings">
            <IconSettings />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="characters">
          <CharactersTab currentAnnotations={currentAnnotations} />
        </TabsContent>

        <TabsContent value="weapons">
          <WeaponsTab currentAnnotations={currentAnnotations} />
        </TabsContent>

        <TabsContent value="places">
          <PlacesTab currentAnnotations={currentAnnotations} />
        </TabsContent>

        <TabsContent value="settings">
          <SettingsTab onTabChange={onTabChange} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GameTabs;
