export interface ResponseSuccess<T> {
  message: string;
  data?: T;
}

export interface ResponseError {
  data: {
    messageError: string;
  };
  statusCode: number;
}
