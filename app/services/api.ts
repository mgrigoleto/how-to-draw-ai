import axios from 'axios';
import { AxiosError } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
});

api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;

      if (status >= 500) {
        console.error('Erro interno do servidor:', status)
      } else if (status === 404) {
        console.error('Recurso não encontrado (404)')
      } else if (status === 401) {
        console.error('Usuário não autorizado (401)')
      } else {
        console.error('Erro de resposta da API:', status)
      }
    } else if (error.request) {
      console.error('Sem resposta do servidor:', error.request)
    } else {
      console.error('Erro ao configurar a requisição:', error.message)
    }

    return Promise.reject(error)
  }
);

export default api;
