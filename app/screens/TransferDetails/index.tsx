import { Header } from '@/app/components/Header';
import { TransferDetailCard } from '@/app/components/TransferDetailCard';

import { Container } from './styles';

export default function TransferDetails() {
    return (
        <Container>
            <Header 
                title='Detalhes da Transação' 
                showBackButton 
                showLogOutButton 
            />

            <TransferDetailCard />
        </Container>
    );
};