import jwt from 'jsonwebtoken';

export const TOKEN_KEY = "@secret-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getSession = () => jwt.decode(localStorage.getItem(TOKEN_KEY));
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};