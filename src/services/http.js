import axios from 'axios'

const http = axios.create({
  baseURL: '​https://storage.googleapis.com/dito-questions/events.json',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

export default http
