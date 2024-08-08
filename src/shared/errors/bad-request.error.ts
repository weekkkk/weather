export class BadRequestError extends Error {
  readonly keys: string[];
  constructor(message: string, ...keys: string[]) {
    super(message);
    this.name = "BadRequestError";
    this.keys = keys;
  }
}
