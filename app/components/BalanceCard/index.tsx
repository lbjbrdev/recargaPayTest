import { Feather } from '@expo/vector-icons'

import { useBalanceCard } from '@/app/hooks/useBalanceCard';

import { formatCurrency } from '@/app/utils/formatCurrency';

import * as S from './styles';

export function BalanceCard() {
    const { showBalance, handleChangeShowBalance, currentBalance } = useBalanceCard();

    return (
        <S.Container>
            <S.Row>
                <S.BalanceTitle>Seu saldo atual:</S.BalanceTitle>
                {showBalance
                    ? <S.BalanceValue showBalance={showBalance} currentBalance={currentBalance}>R$ {formatCurrency(currentBalance)}</S.BalanceValue>
                    : <S.BalanceValue showBalance={showBalance} currentBalance={currentBalance}>R$ -</S.BalanceValue>
                }
            </S.Row>

            <S.Divider />

            <S.EnabledBalanceContainer onPress={handleChangeShowBalance}>
                <S.EnableBalanceLabel>{showBalance ? 'Mostrar saldo' : 'Ocultar saldo'}</S.EnableBalanceLabel>
                <Feather name={showBalance ? 'eye' : 'eye-off'} size={18} />
            </S.EnabledBalanceContainer>
        </S.Container>
    );
};