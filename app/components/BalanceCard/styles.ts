import styled from 'styled-components/native';

interface IProps {
    currentBalance: number;
    showBalance: boolean;
};

export const Container = styled.View`
    width: 100vw;
    height: 130px;

    background-color: #fff;

    margin: 10px;

    border-radius: 10px;
    border: 3px solid #FFB86C;
`;

export const BalanceTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const BalanceValue = styled.Text`
    font-size: 18px;
    font-weight: bold;

    color: ${(props: IProps) => !props?.showBalance ? '#000' : props.currentBalance >= 0 ? 'green' : 'red'};
`;

export const Divider = styled.View`
    width: 100vw;
    height: 2px;

    background-color: #FFB86C;
`;

export const Row = styled.View`
    height: 75px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

export const EnabledBalanceContainer = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;

    margin-left: 1px;
    margin-top: 13px;
`;

export const EnableBalanceLabel = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;