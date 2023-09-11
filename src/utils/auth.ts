import Cookies from 'js-cookie';

const accessTokenKey = 'battech_access_token';
const refreshTokenKey = 'battech_refresh_token';
const COOKIE_DOMAIN = 'cookie_domain';

export const saveToken = (access_token: string, refresh_token: string) => {
  if (access_token && refresh_token) {
    Cookies.set(accessTokenKey, access_token);
    Cookies.set(refreshTokenKey, refresh_token);
  } else {
    Cookies.remove(accessTokenKey, {
      path: '/',
      domain: COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      path: '/',
      domain: COOKIE_DOMAIN,
    });
  }
};

export const getToken = () => {
  const accessToken = Cookies.get(accessTokenKey);
  const refreshToken = Cookies.get(refreshTokenKey);
  return {
    accessToken,
    refreshToken,
  };
};

export const logOut = () => {
  const access_token = Cookies.get(accessTokenKey);
  if (access_token) {
    Cookies.remove(accessTokenKey);
    Cookies.remove(refreshTokenKey);
  }
};
