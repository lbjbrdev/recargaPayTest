import { useContext } from 'react';

import { CurrentTransferDetailsSelectedContext } from '@/app/contexts/CurrentTransferDetailsSelected';

import { formatDate } from '@/app/utils/formatDate';
import { formatCurrency } from '@/app/utils/formatCurrency';

import { Container, TitleContainer, Title, Divider, InfoContainer, Label, Value } from './styles';

export function TransferDetailCard() {
    const { transaction } = useContext(CurrentTransferDetailsSelectedContext);

    return (
        <Container>
            <TitleContainer>
                <Title>{transaction.description}</Title>
            </TitleContainer>

            <Divider />

            <InfoContainer>
                <Label>Método:</Label>
                <Value>{transaction.creditCard?.brand || '-'}</Value>
            </InfoContainer>

            <InfoContainer>
                <Label>Tipo:</Label>
                <Value>{transaction.type}</Value>
            </InfoContainer>

            <InfoContainer>
                <Label>Status:</Label>
                <Value>{transaction.status}</Value>
            </InfoContainer>

            <InfoContainer>
                <Label>Data:</Label>
                <Value>{formatDate(transaction.date)}</Value>
            </InfoContainer>

            <InfoContainer>
                <Label>Valor:</Label>
                <Value>{transaction.currency} {formatCurrency(transaction.amount)}</Value>
            </InfoContainer>
        </Container>
    );
};