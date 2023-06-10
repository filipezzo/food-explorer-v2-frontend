import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-backend-v2.onrender.com',
})
