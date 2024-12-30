"use server";

import { cookies } from "next/headers";

export default async function resetAnnotationsCookie() {
  const cookieStore = await cookies();

  cookieStore.set("annotations", JSON.stringify([]));
}
