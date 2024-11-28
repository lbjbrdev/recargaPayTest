import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface IProps {
    hasError: boolean;
};

export const Container = styled.View`
    background-color: #6272A4;

    height: 100%;

    align-items: center;
`;

export const Form = styled.View`
    align-items: center;
    justify-content: center;

    height: 100%;
`;

export const Title = styled.Text`
    margin-left: 1px;

    color: #fff;

    font-weight: bold;
    font-size: 20px;
`;

export const Input = styled.TextInput`
    width: ${Dimensions.get('screen').width * 0.68};
    height: 50px;

    border-radius: 5px;
    border: ${(props: IProps) => props.hasError && '2px solid red'};

    background-color: #fff;

    text-align: center;

    font-size: 23px;

    margin-top: 30px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #282A36;

    padding: 10px;

    width: ${Dimensions.get('screen').width * 0.50};

    align-items: center;

    margin-top: 40px;

    border-radius: 8px;
`;

export const ButtonLabel = styled.Text`
    color: #fff;
`;

export const ErrorLabel = styled.Text`
    color: red;

    font-weight: bold;
    font-size: 16px;

    margin-top: 8px;
`;