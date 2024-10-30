export const TransactionStatus = {
    DELIVERED: 'Delivered',
    PROCESS: 'Process',
    CANCELED: 'Canceled'
  } as const;
  
  export type TransactionStatus = typeof TransactionStatus[keyof typeof TransactionStatus];
  // This will ensure only valid status values can be used in our code

  export interface PaginationParams {
    page: number;
    limit: number;
    search?: string;
  }
  
  export interface TransactionResponse {
    data: any[];
    total: number;
    page: number;
    totalPages: number;
  }