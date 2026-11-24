import type { IFile } from "../interfaces";

export function doesFileExist(arr: IFile[], id: string) {
  return arr.some((object) => object.id === id);
}
