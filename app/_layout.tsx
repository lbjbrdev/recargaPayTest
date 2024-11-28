import { Stack } from 'expo-router';

import { CurrentTransferDetailsSelectedProvider } from './contexts/CurrentTransferDetailsSelected';

export default function RootLayout() {
    return (
        <CurrentTransferDetailsSelectedProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </CurrentTransferDetailsSelectedProvider>
    );
}
