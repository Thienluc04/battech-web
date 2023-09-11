export interface ResponseSuccess<T> {
  message: string;
  data?: T;
}

export interface ResponseError {
  statusCode: number;
  messageError: string;
}
