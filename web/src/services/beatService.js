import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export function getBeats() {
  return http.get("/beats/list").then((res) => res.data);
}

export function getBeat(id) {
  return http.get(`/beat/${id}`).then((res) => res.data);
}

export function createBeat(beat) {
  return http.post("/beats/create", beat).then((res) => res.data);
}

export function updateBeat(id, beat) {
  return http.patch(`/beat/${id}`, beat)
}




