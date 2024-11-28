import { useState, useEffect } from 'react';

import { BalanceOrchestrator } from '../services/balance/orchestrator';

export function useBalanceCard() {
    const [showBalance, setShowBalance] = useState<boolean>(false);
    const [currentBalance, setCurrentBalance] = useState<number>(0);

    useEffect(() => {
        fetchCurrentBalance();
    }, []);

    const fetchCurrentBalance = async () => {
        const balanceOrchestrator = new BalanceOrchestrator();

        try {
            const response = await balanceOrchestrator.getCurrentBalance();

            setCurrentBalance(response.balance);
        } catch (error) {
            console.error('fetchCurrentBalance request error: ', error);
        }
    };

    const handleChangeShowBalance = () => setShowBalance(!showBalance);

    return {
        showBalance,
        currentBalance,
        handleChangeShowBalance,
    };
};