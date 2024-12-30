import { AnnotationType } from "@/enums/annotationType";

export interface IAnnotation {
  name: string;
  annotation: AnnotationType | null;
}
