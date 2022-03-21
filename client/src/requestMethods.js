import axios from "axios"

const BASE_URL = "http://localhost:5000/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydGVtQGdtYWlsMi5jb20iLCJpZCI6NSwicm9sZXMiOlt7ImlkIjoyLCJ2YWx1ZSI6IlVTRVIiLCJkZXNjcmlwdGlvbiI6InVzZXIifV0sImlhdCI6MTY0NzU5NzU3MywiZXhwIjoxNjQ3NjQwNzczfQ.OvzoWdHcflulPyZ_K3zPNamxkyqGZi0eOJWxRZLnNio"
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken);
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})