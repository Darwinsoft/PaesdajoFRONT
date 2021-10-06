import axios from "axios";

export const api = axios.create({
    baseURL: 'https://paesdajo-dev.herokuapp.com'
})