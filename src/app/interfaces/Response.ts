export interface IResponse<T> {
  page?: number,
  results: T;
}