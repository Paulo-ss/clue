"use server";

import { AnnotationType } from "@/enums/annotationType";
import { cookies } from "next/headers";
import getAnnotationsCookie from "./getAnnotationsCookie";

export default async function setAnnotationsCookie(
  name: string,
  annotation: AnnotationType | null
) {
  const cookieStore = await cookies();
  const currentAnnotations = await getAnnotationsCookie();

  const foundAnnotationIndex = currentAnnotations.findIndex(
    (annotation) => annotation.name === name
  );

  if (foundAnnotationIndex > -1) {
    currentAnnotations[foundAnnotationIndex].annotation = annotation;
  }

  if (foundAnnotationIndex < 0) {
    currentAnnotations.push({ name, annotation });
  }

  cookieStore.set("annotations", JSON.stringify(currentAnnotations));
}
