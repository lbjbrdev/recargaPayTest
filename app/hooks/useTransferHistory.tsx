import { useState } from 'react';

import { ITransaction } from '../models/transaction';

import { TransactionsOrchestrator } from '../services/transactions/orchestrator';

export function useTransferHistoryController() {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    const fetchTransactions = async () => {
        const transactionsOrchestrator = new TransactionsOrchestrator();

        try {
            const response = await transactionsOrchestrator.getTransactionsHistory();

            setTransactions(response);
        } catch (error) {
            console.error('fetchTransactions TransferHistory view request error: ', error);
        }
    };

    return { transactions, fetchTransactions };
};