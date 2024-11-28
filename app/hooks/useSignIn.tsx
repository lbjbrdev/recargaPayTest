import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useFirstAccessController() {
    const [currentPinValue, setCurrentPinValue] = useState<string>('');
    const [isInvalidCredential, setIsInvalidCredential] = useState<boolean>(false);
    const [currentErrorLabel, setCurrentErrorLabel] = useState<string>('');

    const router = useRouter();

    const handleSubmitForm = async () => {
        if (!currentPinValue || currentPinValue === '') {
            setIsInvalidCredential(true);
            setCurrentErrorLabel('Informe seu PIN de acesso!');

            return;
        }

        if (currentPinValue.length < 5) {
            setIsInvalidCredential(true);
            setCurrentErrorLabel('Informe os 5 dígitos do seu PIN de acesso!');

            return;
        }

        try {
            await AsyncStorage.setItem('userPinAccess', currentPinValue);

            setIsInvalidCredential(false);

            router.push('/screens/Home');
        } catch (error) {
            console.error('Failed to save the PIN:', error);
        }
    };

    return {
        currentPinValue,
        setCurrentPinValue,
        isInvalidCredential,
        currentErrorLabel,
        handleSubmitForm,
    }
};

export function useSignInController() {
    const [currentPinValue, setCurrentPinValue] = useState<string>('');
    const [isInvalidCredential, setIsInvalidCredential] = useState<boolean>(false);
    const [currentErrorLabel, setCurrentErrorLabel] = useState<string>('');

    const router = useRouter();

    const handleSubmitForm = async () => {
        if (!currentPinValue || currentPinValue === '') {
            setIsInvalidCredential(true);
            setCurrentErrorLabel('Informe seu PIN de acesso!');

            return;
        }

        if (currentPinValue.length < 5) {
            setIsInvalidCredential(true);
            setCurrentErrorLabel('Informe os 5 dígitos do seu PIN de acesso!');

            return;
        }

        try {
            const storedPinValue = await AsyncStorage.getItem('userPinAccess');

            if (!storedPinValue) {
                setIsInvalidCredential(true);

                return;
            }

            if (currentPinValue !== storedPinValue) {
                console.log(storedPinValue);
                setIsInvalidCredential(true);
                setCurrentErrorLabel('O PIN informado não é válido!');
                return;
            }
        } catch (error) {
            console.error('Failed to find the AsyncStorage PIN: ', error);
            setIsInvalidCredential(true);
        }

        setIsInvalidCredential(false);
        router.push('/screens/Home');
    };

    return {
        currentPinValue,
        setCurrentPinValue,
        isInvalidCredential,
        currentErrorLabel,
        handleSubmitForm,
    };
};