import { Fragment, useContext } from 'react';
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { CurrentTransferDetailsSelectedContext } from '@/app/contexts/CurrentTransferDetailsSelected';

import { ITransaction } from '@/app/models/transaction';

import { formatDate } from '@/app/utils/formatDate';
import { formatCurrency } from '@/app/utils/formatCurrency';

import { userDataMock } from '@/app/mocks/database';

import * as S from './styles';

interface IProps {
    title?: string;
    showAction?: boolean;
    hideAllData?: boolean;
    maxLines?: number;
    transactions: ITransaction[];
};

export function HistoryTimeLine({ title, showAction, maxLines, transactions }: IProps) {
    const router = useRouter();

    const { updateTransaction } = useContext(CurrentTransferDetailsSelectedContext);

    const history = maxLines
        ? transactions.slice(0, maxLines)
        : transactions;

    const handleSelectedTransferDetail = (newTransaction: ITransaction) => {
        updateTransaction(newTransaction);

        router.push('/screens/TransferDetails');
    };

    return (
        <S.Container showAllData={!maxLines}>
            <S.Title>{title || `Seu Histórico (${userDataMock['transactions-history'].length})`}</S.Title>

            <S.Divider />

            <ScrollView showsVerticalScrollIndicator={false}>
                {history.map(item => (
                    <Fragment key={item.id}>
                        <S.HistoryContainer onPress={() => handleSelectedTransferDetail(item as ITransaction)}>
                            <S.Row>
                                <S.HistoryDate>{formatDate(item.date)}</S.HistoryDate>

                                <S.TransactionLabel>{item.description}</S.TransactionLabel>
                                <S.TransactionValue transactionType={item.type}>{item.currency} {formatCurrency(item.amount)}</S.TransactionValue>
                            </S.Row>
                        </S.HistoryContainer>

                        <S.Divider />
                    </Fragment>
                ))}
            </ScrollView>

            {showAction && (
                <S.MoreButon onPress={() => router.push('/screens/TransferHistory')}>
                    <S.MoreButonLabel>Ver mais</S.MoreButonLabel>
                    <Feather name='plus-circle' size={20} />
                </S.MoreButon>
            )}
        </S.Container>
    );
};