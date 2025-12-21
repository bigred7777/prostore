import { Decimal } from "@prisma/client/runtime/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert typed objects to POJOs
export const convertToPlainObject = <T>(value: T): T => {
  const returnValue = JSON.parse(JSON.stringify(value));

  console.log("convertToPlainObject", returnValue);
  return returnValue;
};
