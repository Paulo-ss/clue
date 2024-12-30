"use server";

import { IAnnotation } from "@/interfaces/annotation";
import { cookies } from "next/headers";

export default async function getAnnotationsCookie() {
  const cookieStore = await cookies();

  const annotations = cookieStore.get("annotations");
  console.log({ annotations });

  if (!annotations) {
    return [];
  }

  return JSON.parse(annotations.value!) as IAnnotation[];
}
