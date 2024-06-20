//this file should connect to the backend server

import sendRequest from "./send-request";

const BASE_URL = 'http://localhost:3005/api'

export function signUp(userInput) {
    return sendRequest(`${BASE_URL}/users`, 'POST', userInput)
}

export function login(userInput) {
    return sendRequest(`${BASE_URL}/users/sign-in`,'POST', userInput)
}

export function listTutors() {
    return sendRequest(`${BASE_URL}/users/list-tutors`)
}

export function myDetails(id) {
    return sendRequest(`${BASE_URL}/users/getMe/${id}`)
}

export function updateProfile(userInput,id) {
    return sendRequest(`${BASE_URL}/users/update/${id}`,'PUT',userInput)
}

export function listPosts() {
    return sendRequest(`${BASE_URL}/posts`)
}

export function createPost(userInput) {
    return sendRequest(`${BASE_URL}/posts/create`, 'POST', userInput)
}

export function tutorApplication(postId, applicantId) {
    return sendRequest(`${BASE_URL}/posts/tutor-apply/${postId}`, 'PUT', applicantId)
}

export function getMyPosts(userId) {
    return sendRequest(`${BASE_URL}/posts/my-posts/${userId}`)
}

export function deletePost(postId) {
    return sendRequest(`${BASE_URL}/posts/delete/${postId}`,'DELETE')
}