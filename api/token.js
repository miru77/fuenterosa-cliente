import {TOKEN} from "../utils/constants"
import jwDecode from "jwt-decode"

export function setToken(token) {
    localStorage.setItem(TOKEN, token)
}

export function getToken() {
  return  localStorage.getItem(TOKEN)
}


export function removeToken(token) {
  localStorage.removeItem(TOKEN)
}

export function hasExpiredToken(token) {
  const tokenDecode = jwDecode(token)
  const expireDate = tokenDecode.exp * 1000
  const currentDate = new Date().getTime()
  if(currentDate > expireDate) {
    return true
  }
  return false
}


