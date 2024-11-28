import styled from 'styled-components/native';

interface IProps {
    isDisabled?: boolean;
};

export const Container = styled.TouchableOpacity`
    width: 160px;
    height: 200px;

    margin: 10px;

    border: 3px solid #FFB86C;
    border-radius: 10px;

    background-color: #fff;

    align-items: center;
    justify-content: center;

    opacity: ${(props: IProps) => props.isDisabled && .5};
`;

export const Label = styled.Text`
    margin-left: 1px;
    margin-top: 30px;

    font-weight: bold;
    font-size: 17px;

    color: #000;
`;