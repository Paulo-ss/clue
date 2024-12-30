"use client";

import Card from "@/components/card/Card";
import { IAnnotation } from "@/interfaces/annotation";
import { ICard } from "@/interfaces/card";
import { FC } from "react";

const weapons: ICard[] = [
  {
    name: "Cano",
    image: {
      src: "/images/weapons/cano.png",
      alt: "Cano's image",
    },
  },
  {
    name: "Faca",
    image: {
      src: "/images/weapons/faca.png",
      alt: "Mayor Green's image",
    },
  },
  {
    name: "Castical",
    image: {
      src: "/images/weapons/castical.png",
      alt: "Miss Scarlet's image",
    },
  },
  {
    name: "Chave Inglesa",
    image: {
      src: "/images/weapons/chave-inglesa.png",
      alt: "Mustard's image",
    },
  },
  {
    name: "Corda",
    image: {
      src: "/images/weapons/corda.png",
      alt: "Prof Plum's image",
    },
  },
  {
    name: "Pistola",
    image: {
      src: "/images/weapons/pistola.png",
      alt: "Solicitor Peacock's image",
    },
  },
];

interface IProps {
  currentAnnotations: IAnnotation[];
}

const WeaponsTab: FC<IProps> = ({ currentAnnotations }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-2 w-full justify-center items-center">
      {weapons.map((weapon) => {
        const currentAnnotation = currentAnnotations.find(
          ({ name }) => weapon.name === name
        );

        return (
          <Card
            key={weapon.name}
            {...weapon}
            currentAnnotation={
              currentAnnotation ? currentAnnotation.annotation : null
            }
          />
        );
      })}
    </div>
  );
};

export default WeaponsTab;
