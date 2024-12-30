"use client";

import Card from "@/components/card/Card";
import { IAnnotation } from "@/interfaces/annotation";
import { ICard } from "@/interfaces/card";
import { FC } from "react";

const characters: ICard[] = [
  {
    name: "Chef White",
    image: {
      src: "/images/characters/chef-white.png",
      alt: "Chef White's image",
    },
    color: "bg-zinc-50",
  },
  {
    name: "Mayor Green",
    image: {
      src: "/images/characters/mayor-green.png",
      alt: "Mayor Green's image",
    },
    color: "bg-emerald-800",
  },
  {
    name: "Miss Scarlet",
    image: {
      src: "/images/characters/miss-scarlet.png",
      alt: "Miss Scarlet's image",
    },
    color: "bg-red-800",
  },
  {
    name: "Mustard",
    image: {
      src: "/images/characters/mustard.png",
      alt: "Mustard's image",
    },
    color: "bg-yellow-500",
  },
  {
    name: "Prof Plum",
    image: {
      src: "/images/characters/prof-plum.png",
      alt: "Prof Plum's image",
    },
    color: "bg-violet-800",
  },
  {
    name: "Peacock",
    image: {
      src: "/images/characters/solicitor-peacock.png",
      alt: "Solicitor Peacock's image",
    },
    color: "bg-sky-600",
  },
];

interface IProps {
  currentAnnotations: IAnnotation[];
}

const CharactersTabs: FC<IProps> = ({ currentAnnotations }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-2 w-full justify-center items-center">
      {characters.map((character) => {
        const currentAnnotation = currentAnnotations.find(
          ({ name }) => character.name === name
        );

        return (
          <Card
            key={character.name}
            {...character}
            currentAnnotation={
              currentAnnotation ? currentAnnotation.annotation : null
            }
          />
        );
      })}
    </div>
  );
};

export default CharactersTabs;
