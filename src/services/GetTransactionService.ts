import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionsAndBalance {
  transactions: Transaction[];
  balance: Balance;
}

class GetTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): TransactionsAndBalance {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();
    return { transactions, balance };
  }
}

export default GetTransactionService;
