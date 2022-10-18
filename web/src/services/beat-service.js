import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error?.response?.status === 401) {
      console.error("unauthenticated, redirect to login");
      localStorage.clear();
      window.location.replace("/login");//?????
    }

    return Promise.reject(error);
  }
);

export function Profile() {
  return http.get(`/profile`);
}

export function List() {
  return http.get("/beats/list", );
}

//export function getBeat(id) {
  // TODO
//}

export function create(beat) {
  return http.post("/beats/create", beat);
}

export function authenticate(data) {
  return http.post("/authenticate", data);
}

export function logout() {
  return http.delete("/logout");
}


