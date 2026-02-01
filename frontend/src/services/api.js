import axios from 'axios';

// Use environment variable for API URL, fallback to relative path for local development
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Menu API
export const menuApi = {
  getAllItems: () => api.get('/menu'),
  getByCategory: (category) => api.get(`/menu/category/${category}`),
  getByCategories: () => api.get('/menu/categories'),
  getVegetarian: () => api.get('/menu/vegetarian'),
};

// Reservation API
export const reservationApi = {
  create: (data) => api.post('/reservations', data),
  getAll: () => api.get('/reservations'),
  getById: (id) => api.get(`/reservations/${id}`),
  delete: (id) => api.delete(`/reservations/${id}`),
};

// Contact API
export const contactApi = {
  submit: (data) => api.post('/contact', data),
};

export default api;
