export class LoadingError extends Error {
  constructor() {
    super(
      "Этот запрос уже производится, выход из запроса (не ошибка, просто несколько виджетов используют один и тот же метод)"
    );
    this.name = "LoadingError";
  }
}
