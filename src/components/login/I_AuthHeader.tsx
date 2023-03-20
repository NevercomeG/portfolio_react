import Cookie from 'js-cookie';

interface I_AuthHeader {
  headers: {
    Authorization: string;
  };
}

const getTokenFromCookies = () => {
  // Get the token from the cookie
  const token = Cookie.get('token');
  return token;
};

export const authHeader = (): I_AuthHeader => {
  const token = getTokenFromCookies();
  return {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
};
