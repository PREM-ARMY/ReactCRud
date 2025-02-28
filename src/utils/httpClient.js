import axios from "axios";
export const httpClient = axios.create({
    baseURL: `http://localhost/REACTCRUD/admin/api/`,
    // baseURL: `https://api.indianaloseweight.com/api/`,
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("authToken")}` || null,
    },
});
