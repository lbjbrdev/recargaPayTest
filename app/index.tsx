import React, { Fragment, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FirsAccess } from './screens/SignIn';
import { SignIn } from './screens/SignIn';

export default function RootLayout() {
    const [isStoredPin, setIsStoredPin] = useState<boolean | null>(null);

    useEffect(() => {
        const checkStoredPin = async () => {
            const storedPin = await AsyncStorage.getItem('userPinAccess');
            setIsStoredPin(!!storedPin); 
        };

        checkStoredPin();
    }, []);

    return (
        <Fragment>
            <StatusBar backgroundColor='#282A36' />
            
            {isStoredPin ? <SignIn /> : <FirsAccess />}
        </Fragment>
    );
}
