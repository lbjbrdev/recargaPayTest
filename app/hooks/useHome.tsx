import { useState } from 'react';
import { MaterialIcons, FontAwesome6 } from '@expo/vector-icons';

import { ICardOptions } from '../models/cardOptions';
import { ITransaction } from '../models/transaction';

import { TransactionsOrchestrator } from '../services/transactions/orchestrator';

export function useHome() {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    const [cardOptions, setCardOptions] = useState<Array<ICardOptions>>([
        { icon: <MaterialIcons name='attach-money' size={35} />, label: 'Realizar depósito', routeName: 'NewDeposit' },
        { icon: <FontAwesome6 name='money-bill-trend-up' size={35} />, label: 'Seu histórico', routeName: 'TransferHistory' },
        { icon: <FontAwesome6 name='money-bill-transfer' size={35} />, label: 'Transferir fundos', routeName: 'TransferFunds' },
        { icon: <MaterialIcons name='money' size={35} />, label: 'Levantar fundos', routeName: 'RaisingFunds' },
        { icon: <FontAwesome6 name='clipboard-user' size={35} />, label: 'Seus Dados', routeName: 'UserInfo' },
        { icon: <FontAwesome6 name='gear' size={35} />, label: 'Configurações', routeName: 'Configs' },
    ]);

    const fetchTransactions = async () => {
        const transactionsOrchestrator = new TransactionsOrchestrator();

        try {
            const response = await  transactionsOrchestrator.getTransactionsHistory();

            setTransactions(response);
        } catch (error) {
            console.error('fetchTransactions Home view request error: ', error);
        };
    };
    
    return { cardOptions, transactions, fetchTransactions };
};