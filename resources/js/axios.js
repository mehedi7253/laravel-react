import axios from "axios";

export default axios.create({
    baseURL: "http://laravel-react.test/api/", // your Laravel API URL
    headers: { "Content-Type": "application/json" },
});
