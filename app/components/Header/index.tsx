import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import * as S from './styles';

interface IProps {
    title?: string;
    showBackButton?: boolean;
    showLogOutButton?: boolean;
};

export function Header({ title, showBackButton, showLogOutButton }: IProps) {
    const router = useRouter();

    return (
        <S.Container>
            {showBackButton && (
                <S.BackButtonContainer onPress={() => router.back()}>
                    <AntDesign
                        name='back'
                        color='#fff'
                        size={23}
                    />

                    <S.BackButtonLabel>Voltar</S.BackButtonLabel>
                </S.BackButtonContainer>
            )}
            <S.Label showBackButton={showBackButton}>{title || 'Seja Bem Vindo'}</S.Label>

            {showLogOutButton && (
                <S.LogOutButton onPress={() => router.push('/')}>
                    <AntDesign name='poweroff' size={18} color='#fff' />
                    <S.LogOutButtonLabel>Sair</S.LogOutButtonLabel>
                </S.LogOutButton>
            )}
        </S.Container>
    );
};