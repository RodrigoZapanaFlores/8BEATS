import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true
});


export function getBeats() {
  return http.get("/beats/list", );
}

export function getBeat(id) {
  return http.get(`/beat/${id}`)
}

export function createBeat(beat) {
  return http.post("/beats/create", beat);
}

export function updateBeat(id, beat) {
  return http.patch(`/beat/${id}`, beat)
}




