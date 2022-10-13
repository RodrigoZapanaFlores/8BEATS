import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1/beats",
});

export function getBeats() {
  return http.get().then(res => res.data)
}

export function getBeat(id) {
  // TODO
}

export function createBeat(beat) {
  return http.post('/', beat).then(res => res.data)
}