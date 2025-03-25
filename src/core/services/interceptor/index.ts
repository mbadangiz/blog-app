import axios from "axios";
import toast from "react-hot-toast";

const baseURL = "http://localhost:3000";

const http = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response: any) => {
  return response.data;
};

const onError = (err: any) => {
  if (err?.response?.status >= 400 && err.response.status < 500) {
    toast.error("client error: " + err.response.status);
  }

  if (err?.response?.status === 401) {
    window.location.href = "/login";
  }

  return Promise.reject(err);
};

http.interceptors.response.use(onSuccess, onError);

http.interceptors.request.use((opt) => {
  const token = localStorage.getItem("token");
  if (token) {
    const headers = { ...opt.headers, Authorization: `Bearer ${token}` };
    opt.headers = new axios.AxiosHeaders(headers);
  }
  return opt;
});

export default http;
