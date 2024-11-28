import { IBalance } from '@/app/models/balance';

import { BalanceApiServer } from './apiService';

export class BalanceOrchestrator {
    balanceApiService = new BalanceApiServer();

    getCurrentBalance = async (): Promise<IBalance> => {
        try {
            const response = await this.balanceApiService.getCurrentBalance();

            if (response.status !== 200) throw response;

            return response.data;
        } catch (error) {
            console.error('getCurrentBalance orchestrator method error: ', error);
            throw error;
        }
    };
};