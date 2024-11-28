import { TransactionType } from '@/app/models/transactionType';
import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

interface IProps {
    transactionType: TransactionType;
    showAllData: boolean;
};

export const Container = styled.View`
    width: ${Dimensions.get('screen').width * 0.94};
    height: ${(props: IProps) => props.showAllData && Dimensions.get('screen').height * 0.76};

    margin: 10px;

    background-color: #fff;

    border-radius: 10px;
    border: 3px solid #FFB86C;

    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;

    margin-top: 12px;
`;

export const HistoryContainer = styled.TouchableOpacity`
    margin-top: 15px;

    width: 100%;

    padding: 15px;

    align-items: flex-start;
`;

export const HistoryDate = styled.Text`
    font-weight: bold;
    font-size: 15px;
`;

export const HistoryHour = styled.Text`
    font-weight: bold;
    font-size: 15px;
`;

export const TransactionLabel = styled.Text`
    font-weight: bold;
    font-size: 15px;
`;

export const TransactionValue = styled.Text`
    font-weight: bold;
    font-size: 15px;

    color: ${(props: IProps) => props.transactionType === 'deposit' ? '#00a738' : '#ff0000'}
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
`;

export const Column = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const Divider = styled.View`
    width: 100%;
    height: 2px;

    background-color: #FFB86C;

    margin-top: 10px;
`;

export const MoreButon = styled.TouchableOpacity`
    padding: 20px;

    width: 100%;

    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`;

export const MoreButonLabel = styled.Text`
    font-weight: bold;
    font-size: 18px;
`;