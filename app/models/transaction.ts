import { ICreditCard } from './paymentMethod';
import { TransactionType } from './transactionType';

export interface ITransaction {
    id: string;
    date: string;
    type: TransactionType;
    amount: number;
    currency: string;
    status: string;
    description: string;
    creditCard?: ICreditCard;
};