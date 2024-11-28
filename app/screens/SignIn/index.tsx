import { useFirstAccessController, useSignInController } from '@/app/hooks/useSignIn';

import { Container, Form, Title, Input, Button, ButtonLabel, ErrorLabel } from './styles';

export function FirsAccess() {
    const {
        isInvalidCredential,
        currentPinValue,
        setCurrentPinValue,
        currentErrorLabel,
        handleSubmitForm
    } = useFirstAccessController();

    return (
        <Container>
            <Form>
                <Title>Crie seu PIN de acesso</Title>

                <Input
                    keyboardType='numeric'
                    maxLength={5}
                    hasError={isInvalidCredential}
                    value={currentPinValue}
                    onChangeText={setCurrentPinValue}
                />

                {isInvalidCredential && <ErrorLabel>{currentErrorLabel}</ErrorLabel>}

                <Button onPress={handleSubmitForm}>
                    <ButtonLabel>Entrar</ButtonLabel>
                </Button>
            </Form>
        </Container>
    );
}

export function SignIn() {
    const {
        isInvalidCredential,
        currentPinValue,
        setCurrentPinValue,
        currentErrorLabel,
        handleSubmitForm
    } = useSignInController();

    return (
        <Container>
            <Form>
                <Title>Informe seu PIN de acesso</Title>

                <Input
                    keyboardType='numeric'
                    maxLength={5}
                    hasError={isInvalidCredential}
                    value={currentPinValue}
                    onChangeText={setCurrentPinValue}
                />

                {isInvalidCredential && <ErrorLabel>{currentErrorLabel}</ErrorLabel>}

                <Button onPress={handleSubmitForm}>
                    <ButtonLabel>Entrar</ButtonLabel>
                </Button>
            </Form>
        </Container>
    );
};