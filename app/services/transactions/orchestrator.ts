import { ITransaction } from '@/app/models/transaction';

import { TransactiosnApiServer } from './apiService';

export class TransactionsOrchestrator {
    transactionsApiService = new TransactiosnApiServer();

    getTransactions = async (): Promise<ITransaction[]> => {
        try {
            const response = await this.transactionsApiService.getTransactions();

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error('getTransactions orchestrator method error: ', error);
            throw error;
        }
    };

    getTransactionsHistory = async (): Promise<ITransaction[]> => {
        try {
            const response = await this.transactionsApiService.getTransactionsHistory();

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error('getTransactionsHistory orchestrator method error: ', error);
            throw error;
        }
    };
};