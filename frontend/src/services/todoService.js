import axios from 'axios';

// Use relative URL; Vite dev server proxies to backend.
const API_URL = '/api/todos';

const todoService = {
  getAll: async () => {
    const response = await axios.get(API_URL);
    return response.data.data;
  },

  getById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data;
  },

  create: async (todo) => {
    const response = await axios.post(API_URL, todo);
    return response.data.data;
  },

  update: async (id, todo) => {
    const response = await axios.put(`${API_URL}/${id}`, todo);
    return response.data.data;
  },

  delete: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  }
};

export default todoService;
