import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { BalanceCard } from '../../components/BalanceCard';
import { HistoryTimeLine } from '../../components/HistoryTimeline';

import { useHome } from '../../hooks/useHome';

import { Container, ListContainer } from './styles';

export default function Home() {
    const { cardOptions, transactions, fetchTransactions } = useHome();

    const router = useRouter();

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <Container showsVerticalScrollIndicator={false}>
            <Header showLogOutButton />

            <BalanceCard />

            <HistoryTimeLine 
                maxLines={3} 
                showAction 
                transactions={transactions} 
            />

            <ListContainer>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {cardOptions.map((item, index) => 
                        <Card 
                            key={index} 
                            title={item.label} 
                            icon={item.icon} 
                            isDisabled={item.routeName !== 'TransferHistory'}
                            onAction={() => router.push(`/screens/${item.routeName}`)}
                        />
                    )}
                </ScrollView>
            </ListContainer>
        </Container>
    );
};