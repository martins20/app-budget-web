export const TOKEN_KEY = '@Budget_TOKEN';
export const LOGGED_USER = '@Budget_USER';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem(LOGGED_USER);

export const login = (token: string, id: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(LOGGED_USER, id);
};

export const logout = () => {
  localStorage.clear();
};
