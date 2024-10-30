import { PrismaClient } from '@prisma/client';
import { PaginationParams, TransactionResponse } from '../types/transaction.types';

export class TransactionService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getTransactions(params: PaginationParams): Promise<TransactionResponse> {
    const { page, limit, search } = params;
    const skip = (page - 1) * limit;

    // Build search condition if search parameter is provided
    const whereCondition = search
      ? {
          OR: [
            { product: { contains: search } },
            { customer: { contains: search } }
          ]
        }
      : {};

    // Get total count for pagination
    const total = await this.prisma.transaction.count({
      where: whereCondition,
    });

    // Get paginated data
    const data = await this.prisma.transaction.findMany({
      where: whereCondition,
      skip,
      take: limit,
      orderBy: {
        date: 'desc',
      },
    });

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }
}