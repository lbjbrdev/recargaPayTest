import styled from 'styled-components/native';

export const Container = styled.View`
    width: 280px;
    height: 270px;

    margin: 45px;

    border-radius: 10px;
    border: 3px solid #FFB86C;

    background-color: #fff;

    align-items: flex-start;
`;

export const TitleContainer = styled.View`
    align-items: center;
    justify-content: center;
    
    width: 100%;
`;

export const Title = styled.Text`
    margin: 10px;

    font-size: 21px;
    font-weight: bold;
`;

export const Divider = styled.View`
    width: 100%;
    height: 2px;

    background-color: #FFB86C;
`;

export const InfoContainer = styled.View`
    align-items: center;
    flex-direction: row;
    gap: 20px;

    margin-top: 15px;
    margin-left: 10px;
`;

export const Label = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Value = styled.Text`
    font-weight: bold;
`;