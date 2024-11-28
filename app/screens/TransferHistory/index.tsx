import { useEffect } from 'react';

import { HistoryTimeLine } from '@/app/components/HistoryTimeline';
import { Header } from '@/app/components/Header';

import { useTransferHistoryController } from '@/app/hooks/useTransferHistory';

import { Container } from './styles';

export default function TransferHistory() {
    const { transactions, fetchTransactions } = useTransferHistoryController();

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <Container>
            <Header 
                title='Histórico de Transações' 
                showBackButton 
                showLogOutButton 
            />

            <HistoryTimeLine 
                title='Seu Histórico Completo' 
                transactions={transactions} 
            />
        </Container>
    );
};