// hooks/useTransactions.ts
import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { TransactionResponse } from '@/types/transaction';

export const useTransactions = (page: number, limit: number, search?: string) => {
  const [data, setData] = useState<TransactionResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await api.get('/transactions', {
          params: { page, limit, search }
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, limit, search]); // Re-fetch when these values change

  return { data, isLoading, isError };
};