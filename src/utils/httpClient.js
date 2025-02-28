import axios from "axios";
export const httpClient = axios.create({
<<<<<<< HEAD
    baseURL: `http://localhost/ReactCR/admin/api/`,
=======
    baseURL: `http://localhost/REACTCRUD/admin/api/`,
>>>>>>> fb36f2f6ece1477a7523a87cbfa8d2909d4a1a76
    // baseURL: `https://api.indianaloseweight.com/api/`,
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("authToken")}` || null,
    },
});
