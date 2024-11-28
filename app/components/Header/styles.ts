import styled from 'styled-components/native';

interface IProps {
    showBackButton?: boolean;
    showLogOutButton?: boolean;
};

export const Container = styled.View`
    background-color: #282A36;

    width: 100%;
    height: 80px;

    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    gap: 25px;
`;

export const Label = styled.Text`
    color: #fff;

    font-weight: bold;
    font-size: 19px;

    margin-left: ${(props: IProps) => !props.showBackButton && !props.showLogOutButton && '80px'};
`;

export const BackButtonContainer = styled.TouchableOpacity`
    align-items: center;
    gap: 3px;

`;

export const BackButtonLabel = styled.Text`
    color: #fff;

    font-weight: bold;
`;

export const LogOutButton = styled.TouchableOpacity`
    align-items: center;
    gap: 3px;

    margin-top: 8px;
`;

export const LogOutButtonLabel = styled.Text`
    color: #fff;

    font-weight: bold;
`;