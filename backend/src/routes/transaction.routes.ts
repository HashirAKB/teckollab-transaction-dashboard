import { Router } from 'express';
import { TransactionController } from '../controllers/transaction.controller';
import { validateTransactionQuery } from '../middlewares/validation.middleware';

const router = Router();
const transactionController = new TransactionController();

router.get('/', validateTransactionQuery, transactionController.getTransactions);

export default router;