//this file should connect to the backend server

import sendRequest from "./send-request";

const BASE_URL = 'http://localhost:3005/api'

export function signUp(userInput) {
    return sendRequest(`${BASE_URL}/users`, 'POST', userInput)
}

export function login(userInput) {
    return sendRequest(`${BASE_URL}/users/sign-in`,'POST', userInput)
}