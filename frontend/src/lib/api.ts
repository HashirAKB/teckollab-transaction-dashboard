// lib/api.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://192.168.1.3:3000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTransactions = async ({
  page,
  limit,
  search,
}: {
  page: number;
  limit: number;
  search?: string;
}) => {
  // @ts-ignore
  const response = await api.get('/transactions', { params: { page, limit, search } });
  console.log(response);
  return response.data;
};