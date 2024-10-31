import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { TransactionResponse } from '@/types/transaction';
import { TransactionTableHeader } from './TransactionTableHeader';
import { TransactionDataTable } from './TransactionDataTable';
import PaginationControls from '@/components/ui/PaginationControls';
import { useDebounce } from '@/hooks/useDebounce';
import { TransactionDashboardProps } from '@/types/transaction';
import { theme } from '@/styles/theme';
import { DASHBOARD_CONSTANTS } from '@/lib/constants';
import { TransactionParams } from '@/types/transaction';

export const TransactionDashboard : React.FC<TransactionDashboardProps> = ({
  className = ""
}) => {
  const [page, setPage] = useState<number>(DASHBOARD_CONSTANTS.DEFAULT_PAGE);
  const [limit, setLimit] = useState<number>(DASHBOARD_CONSTANTS.DEFAULT_LIMIT);
  const [search, setSearch] = useState<string | null>(null);
  const debouncedSearch = useDebounce(search, DASHBOARD_CONSTANTS.DEBOUNCE_DELAY);
  
  // States from the former hook
  const [data, setData] = useState<TransactionResponse>({
    data: [],
    total: 0,
    page: 0,
    totalPages: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        console.log(search);
        console.log("search");
        const params: TransactionParams = {
          page,
          limit,
          ...(debouncedSearch && { search: debouncedSearch })
        };

        const response = await api.get('/transactions', {
          params: params
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
  }, [page, limit, debouncedSearch]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(DASHBOARD_CONSTANTS.DEFAULT_PAGE);
  };

  const handleEntriesChange = (value: number) => {
    setLimit(value);
    setPage(DASHBOARD_CONSTANTS.DEFAULT_PAGE);
  };

  const handleAddCustomer = () => {};

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { container, content } = theme.dashboard;

  return (
    <div className={`${container} ${className}`}>
      <TransactionTableHeader
        onSearch={handleSearch}
        onEntriesChange={handleEntriesChange}
        onAddCustomer={handleAddCustomer}
      />
      
      <div className={content.wrapper}>
        <div className={content.table}>
          <TransactionDataTable 
            data={data.data}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
        
        {!isLoading && !isError && data.totalPages > 1 && (
          <div className={content.pagination}>
            <PaginationControls
              currentPage={page}
              totalPages={data.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};