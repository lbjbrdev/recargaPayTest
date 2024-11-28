import { AxiosPromise, AxiosRequestConfig } from 'axios';

import { api } from '@/app/configs/axios';

import { EMethodTypes } from '@/app/enums/methodTypes';
import { ITransaction } from '@/app/models/transaction';

export class TransactiosnApiServer {
    getTransactions = (): AxiosPromise<ITransaction[]> => {
        const config: AxiosRequestConfig = {
            method: EMethodTypes.get,
            url: '/transactions',
        };

        return api(config);
    };

    getTransactionsHistory = (): AxiosPromise<ITransaction[]> => {
        const config: AxiosRequestConfig= {
            method: EMethodTypes.get,
            url: '/transactions-history',
        };

        return api(config);
    };
};