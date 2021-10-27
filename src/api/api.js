import axios from "axios";

export async function register(userData) {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/user/register`,
    data: { userData },
  });
}

export async function login(userData) {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/user/login`,
    data: { userData },
  });
}

export async function uploadFile(fileData) {
  const userToken = localStorage.getItem("token");

  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/meme/upload`,
    data: { fileData },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getAllMemes() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/meme/`,
  });
}

export async function getOnlyMemes() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/meme/memes`,
  });
}

export async function getGifs() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/meme/gifs`,
  });
}

export async function getClassics() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/meme/classics`,
  });
}

export async function getHot() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/meme/hot`,
  });
}

export async function individualMeme(id) {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/meme/${id}`,
  });
}
