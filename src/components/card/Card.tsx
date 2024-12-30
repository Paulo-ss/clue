"use client";

import { AnnotationType } from "@/enums/annotationType";
import { FC, useState } from "react";
import Modal from "../modal/Modal";
import Image from "next/image";
import { ICard } from "@/interfaces/card";
import { IconCheck, IconQuestionMark, IconX } from "@tabler/icons-react";
import { Button } from "../ui/button/button";
import setAnnotationsCookie from "@/actions/setAnnotationsCookie";

interface IProps {
  currentAnnotation: AnnotationType | null;
}

const Card: FC<ICard & IProps> = ({
  name,
  image,
  color,
  currentAnnotation,
}) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => setIsModalOpened(true);
  const closeModal = () => setIsModalOpened(false);

  const annotationsStyles = {
    [AnnotationType.MAYBE]: {
      color: "bg-yellow-300",
      icon: <IconQuestionMark />,
    },
    [AnnotationType.ELIMINATED]: {
      color: "bg-red-300",
      icon: <IconX />,
    },
    [AnnotationType.CONFIRMED]: {
      color: "bg-emerald-300",
      icon: <IconCheck />,
    },
  };

  return (
    <div className="col-span-1 flex flex-col justify-center items-center">
      <div
        className="relative flex flex-col justify-center items-center border border-zinc-500 rounded-md overflow-hidden max-w-[113] cursor-pointer"
        onClick={openModal}
      >
        {color && (
          <div className="absolute rounded-md top-1 left-1 w-6 h-6 flex justify-center items-center bg-zinc-200">
            <span className={`w-2 h-2 rounded-full ${color}`} />
          </div>
        )}

        <Image
          width={113}
          height={194}
          src={image.src}
          alt={image.alt}
          className="w-[113px] h-[194px]"
        />

        {currentAnnotation && (
          <div
            className={`absolute rounded-md bottom-[2.8rem] right-1 w-8 h-8 flex flex-col justify-center items-center p-2 text-center ${annotationsStyles[currentAnnotation].color}`}
          >
            {annotationsStyles[currentAnnotation].icon}
          </div>
        )}

        <div className="absolute bottom-0 flex flex-col justify-center items-center w-full p-2 text-center bg-zinc-200 h-10 text-sm">
          {name}
        </div>
      </div>

      <Modal isOpened={isModalOpened} onClose={closeModal}>
        <div className="flex flex-col justify-center items-center">
          <div
            className="relative flex flex-col justify-center items-center border border-zinc-500 rounded-md overflow-hidden col-span-1 max-w-[113] cursor-pointer"
            onClick={openModal}
          >
            {color && (
              <div className="absolute rounded-md top-1 left-1 w-6 h-6 flex justify-center items-center bg-zinc-200">
                <span className={`w-2 h-2 rounded-full ${color}`} />
              </div>
            )}

            <Image
              width={113}
              height={194}
              src={image.src}
              alt={image.alt}
              className="w-[113px] h-[194px]"
            />

            {currentAnnotation && (
              <div
                className={`absolute rounded-md bottom-[2.8rem] right-1 w-8 h-8 flex flex-col justify-center items-center p-2 text-center ${annotationsStyles[currentAnnotation].color}`}
              >
                {annotationsStyles[currentAnnotation].icon}
              </div>
            )}

            <div className="absolute bottom-0 flex flex-col justify-center items-center w-full p-2 text-center bg-zinc-200 h-10 text-sm">
              {name}
            </div>
          </div>

          <div className="flex gap-2 mt-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setAnnotationsCookie(name, AnnotationType.CONFIRMED)
              }
            >
              <IconCheck />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setAnnotationsCookie(name, AnnotationType.ELIMINATED)
              }
            >
              <IconX />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setAnnotationsCookie(name, AnnotationType.MAYBE)}
            >
              <IconQuestionMark />
            </Button>
          </div>

          <div className="flex flex-col gap-2 mt-2 w-full">
            <Button
              variant="outline"
              onClick={() => setAnnotationsCookie(name, null)}
              className="w-full"
            >
              Limpar
            </Button>

            <Button variant="outline" onClick={closeModal} className="w-full">
              Voltar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
