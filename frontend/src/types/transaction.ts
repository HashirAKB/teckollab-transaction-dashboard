export interface Transaction {
  id: number;
  trackingId: string;
  product: string;
  productImage: string;
  customer: string;
  date: string;
  amount: string;
  paymentMode: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}


export interface TransactionDataTableProps {
  data: Transaction[];
  isLoading?: boolean;
  isError?: boolean;
  className?: string;
}

export interface TransactionTableHeaderProps {
  onSearch: (value: string) => void;
  onEntriesChange: (value: number) => void;
  onAddCustomer: () => void;
  className?: string;
}

export interface TransactionParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface TransactionResponse {
  data: Transaction[];
  total: number;
  page: number;
  totalPages: number;
}

export interface TransactionDashboardProps {
  className?: string;
}

export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}