import { Request, Response, NextFunction } from 'express';
import { TransactionService } from '../services/transaction.service';
import { PaginationParams } from '../types/transaction.types';

export class TransactionController {
  private transactionService: TransactionService;

  constructor() {
    this.transactionService = new TransactionService();
  }

  getTransactions = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = req.query.search as string;

      const params: PaginationParams = {
        page,
        limit,
        search
      };

      const result = await this.transactionService.getTransactions(params);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
}