import { ReactNode, createContext, useState } from 'react';

import { ITransaction } from '../models/transaction';

interface ICurrentTransferDetailsSelectedContextType {
    transaction: ITransaction;
    updateTransaction: (newTransaction: any) => void;
};

interface ICurrentTransferDetailsSelectedProviderProps {
    children: ReactNode;
};

export const CurrentTransferDetailsSelectedContext = createContext({} as ICurrentTransferDetailsSelectedContextType);

export function CurrentTransferDetailsSelectedProvider({ children }: ICurrentTransferDetailsSelectedProviderProps) {
    const [transaction, setTransaction] = useState<ITransaction>({} as ITransaction);

    const updateTransaction = (newTransaction: ITransaction) => setTransaction(newTransaction); 

    return (
        <CurrentTransferDetailsSelectedContext.Provider value={{ transaction, updateTransaction }}>
            {children}
        </CurrentTransferDetailsSelectedContext.Provider>
    );
};