import { Decimal } from "@prisma/client/runtime/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert typed objects to POJOs
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const convertToPlainObject = (value: any): any => {
  const jsonString = JSON.stringify(value);
  const returnValue = JSON.parse(jsonString);

  return returnValue;
};

// Format error(s) as an unordered list
export const formatErrorsAsUnorderedListElement = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
): Promise<HTMLUListElement> => {
  console.log(error);

  const returnValue: HTMLUListElement = document.createElement("ul");

  if (error.name === "ZodError") {
    const fieldErrors = Object.keys(error.errors).map(
      (field) => error.errors[field].message
    );

    for (let i = 0; i < fieldErrors.length; i++) {
      const li: HTMLLIElement = document.createElement("li");
      li.textContent = fieldErrors[0];
      returnValue.appendChild(li);
    }
  } else if (
    error.name === "PrismaClientKnownRequestError" &&
    error.code === "P2002"
  ) {
    const field = error.meta?.target
      ? error.meta.target[0].charAt(0).toUpperCase() +
        error.meta.target[0].splice(1)
      : "Field";
    const li: HTMLLIElement = document.createElement("li");
    li.textContent = field + " already exists";
    returnValue.appendChild(li);
  } else {
    const message =
      typeof error.message === "string"
        ? error.message
        : JSON.stringify(error.message);
    const li: HTMLLIElement = document.createElement("li");
    li.textContent = message;
    returnValue.appendChild(li);
  }

  return returnValue;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatErrorsAsString = async (error: any): Promise<string> => {
  const ul = await formatErrorsAsUnorderedListElement(error);

  let returnValue: string = "";
  for (const li of ul.children) {
    returnValue += li.textContent + ". ";
  }

  return returnValue;
};

export function round2(value: number | string) {
  if (typeof value === "number") {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  } else if (typeof value === "string") {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
  } else {
    throw new Error("Value is not a number or string");
  }
}
