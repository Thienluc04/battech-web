export interface User {
  username: string;
  password: string;
  email: string;
  avatar: string;
  role: string;
  refreshToken: string;
}

export interface AuthLogin {
  username: string;
  password: string;
}

export interface TokensResponse {
  accessToken: string;
  refreshToken: string;
}
