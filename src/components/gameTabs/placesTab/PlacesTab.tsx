"use client";

import Card from "@/components/card/Card";
import { IAnnotation } from "@/interfaces/annotation";
import { ICard } from "@/interfaces/card";
import { FC } from "react";

const places: ICard[] = [
  {
    name: "Biblioteca",
    image: {
      src: "/images/places/biblioteca.png",
      alt: "Biblioteca's image",
    },
  },
  {
    name: "Cozinha",
    image: {
      src: "/images/places/cozinha.png",
      alt: "Cozinha's image",
    },
  },
  {
    name: "Escritorio",
    image: {
      src: "/images/places/escritorio.png",
      alt: "Escritorio's image",
    },
  },
  {
    name: "Hall",
    image: {
      src: "/images/places/hall.png",
      alt: "Hall's image",
    },
  },
  {
    name: "Sala",
    image: {
      src: "/images/places/sala.png",
      alt: "Sala's image",
    },
  },
  {
    name: "Sala de Jantar",
    image: {
      src: "/images/places/sala-de-jantar.png",
      alt: "Sala de Jantar's image",
    },
  },
  {
    name: "Sala de Músicas",
    image: {
      src: "/images/places/sala-de-musicas.png",
      alt: "Sala de Músicas's image",
    },
  },
  {
    name: "Salão de Festas",
    image: {
      src: "/images/places/salao-de-festas.png",
      alt: "Salão de Festas's image",
    },
  },
  {
    name: "Salão de Jogos",
    image: {
      src: "/images/places/salao-de-jogos.png",
      alt: "Salão de Jogos's image",
    },
  },
];

interface IProps {
  currentAnnotations: IAnnotation[];
}

const PlacesTab: FC<IProps> = ({ currentAnnotations }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-2 w-full justify-center items-center">
      {places.map((place) => {
        const currentAnnotation = currentAnnotations.find(
          ({ name }) => place.name === name
        );

        return (
          <Card
            key={place.name}
            {...place}
            currentAnnotation={
              currentAnnotation ? currentAnnotation.annotation : null
            }
          />
        );
      })}
    </div>
  );
};

export default PlacesTab;
