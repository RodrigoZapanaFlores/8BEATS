import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true
});

export function getUsers() {
  return http.get("/users").then((res) => res.data);
}

export function getUser(id) {
  return http.get(`/users/${id}`).then((res) => res.data);
}

export function createUser(user){
  return http.post('/users', user).then((res) => res.data);

}
export function login(data) {
  return http.post("/authenticate", data).then((res) => res.data);
}

export function logout() {
  return http.delete("/logout");
}
