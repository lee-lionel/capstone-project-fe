import * as usersAPI from './api';

export async function signUp(userData) {
  const {token, role} = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
  return getUser();
}

function isValidToken(token) {
  if (typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !==3){
    return false
  }
  try{
    const decoded = atob(parts[1])
    return true
  }
  catch (error){
    console.log(error);
    return false
  }
 
}


export function getToken() {
  const token = localStorage.getItem('token');
  if (!token || !isValidToken(token)) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ?
    JSON.parse(atob(token.split('.')[1])).user
    :
    null;
}

export function logOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('role')
}

export async function login(credentials) {
  const {token, role} = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);

  const tokenFromLs = localStorage.getItem('token');
  if (!tokenFromLs || !isValidToken(tokenFromLs)){
    return null;
  } 
  const payload = JSON.parse(atob(tokenFromLs.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  if (tokenFromLs==null){
    return null
  }
  const user = JSON.parse(atob(token.split('.')[1])).user

  return user;
}
