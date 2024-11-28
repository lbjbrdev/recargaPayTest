import { AxiosPromise, AxiosRequestConfig } from 'axios';

import { IBalance } from '@/app/models/balance';
import { EMethodTypes } from '@/app/enums/methodTypes';

import { api } from '@/app/configs/axios';

export class BalanceApiServer {
    getCurrentBalance = (): AxiosPromise<IBalance> => {
        const config: AxiosRequestConfig = {
            method: EMethodTypes.get,
            url: '/balance',
        };

        return api(config);
    };

};