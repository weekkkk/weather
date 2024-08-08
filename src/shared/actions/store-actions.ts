import { makeAutoObservable } from "mobx";

export class LoadingService {
  private stack = new Set<string>();

  constructor() {
    makeAutoObservable(this);
  }

  startLoading = <T extends { name: string }>(func: T) => {
    this.stack.add(func.name);
  };
  stopLoading = <T extends { name: string }>(func: T) => {
    this.stack.delete(func.name);
  };
  getIsLoading = <T extends { name: string }>(func?: T) => {
    return func ? this.stack.has(func.name) : !!this.stack.size;
  };
}
