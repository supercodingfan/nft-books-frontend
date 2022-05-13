import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.status) {
      toast.success(response.data?.message);
    }
    return Promise.resolve(response);
  },
  (error) => {
    const msg = error.response.data?.message || "Request failed!";
    toast.error(msg);
    return Promise.reject(error);
  },
);

const api = {
  getBookList: () => axiosInstance.get("/books"),
  createBook: (formData: FormData) =>
    axiosInstance({
      method: "post",
      url: "/books",
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    }),
  editBook: ({ id, formData }: { id: string; formData: FormData }) =>
    axiosInstance({
      method: "put",
      url: `/books/${id}`,
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    }),
  deleteBook: ({ id, owner }: { id: string; owner: string }) =>
    axiosInstance({
      method: "delete",
      url: `/books/${id}`,
      data: { owner },
    }),
};

export default api;
