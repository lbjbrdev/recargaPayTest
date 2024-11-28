export const userDataMock = {
    "balance": {
        "balance": 2500.50,
        "currency": "R$"
    },
    "transactions-history": [
        {
            "id": "txn_001",
            "date": "2024-10-25T10:15:00Z",
            "type": "deposit",
            "amount": 100.00,
            "currency": "R$",
            "status": "completed",
            "description": "Salary deposit"
        },
        {
            "id": "txn_002",
            "date": "2024-10-26T14:25:00Z",
            "type": "withdrawal",
            "amount": 50.00,
            "currency": "R$",
            "status": "completed",
            "description": "ATM withdrawal"
        },
        {
            "id": "txn_004",
            "date": "2024-10-28T12:00:00Z",
            "type": "deposit",
            "amount": 200.00,
            "currency": "R$",
            "status": "completed",
            "description": "Freelance payment"
        },
        {
            "id": "txn_003",
            "date": "2024-10-27T09:45:00Z",
            "type": "transfer",
            "amount": 150.00,
            "currency": "R$",
            "status": "pending",
            "description": "Transfer to Jane Smith"
        },
        {
            "id": "txn_005",
            "date": "2024-10-29T08:30:00Z",
            "type": "payment",
            "amount": 75.00,
            "currency": "R$",
            "status": "completed",
            "description": "Subscription payment",
            "creditCard": {
                "number": "4539876543211234",
                "brand": "VISA"
            }
        },
        {
            "id": "txn_006",
            "date": "2024-10-30T14:40:00Z",
            "type": "transfer",
            "amount": 120.00,
            "currency": "R$",
            "status": "failed",
            "description": "Transfer to Mark Green"
        },
        {
            "id": "txn_007",
            "date": "2024-11-01T11:20:00Z",
            "type": "withdrawal",
            "amount": 40.00,
            "currency": "R$",
            "status": "completed",
            "description": "Cash withdrawal"
        },
        {
            "id": "txn_008",
            "date": "2024-11-02T15:10:00Z",
            "type": "deposit",
            "amount": 300.00,
            "currency": "R$",
            "status": "completed",
            "description": "Bonus payment"
        },
        {
            "id": "txn_009",
            "date": "2024-11-03T17:30:00Z",
            "type": "payment",
            "amount": 90.00,
            "currency": "R$",
            "status": "completed",
            "description": "Electricity bill",
            "creditCard": {
                "number": "5409876543219876",
                "brand": "Mastercard"
            }
        },
        {
            "id": "txn_010",
            "date": "2024-11-04T13:00:00Z",
            "type": "transfer",
            "amount": 200.00,
            "currency": "R$",
            "status": "pending",
            "description": "Transfer to Sarah Brown"
        }
    ],
    "transactions": [
        {
            "id": "txn_001",
            "date": "2024-10-25T10:15:00Z",
            "type": "deposit",
            "amount": 100.00,
            "currency": "R$",
            "status": "completed",
            "description": "Salary deposit",
            "fromAccount": {
                "name": "Company Inc",
                "accountNumber": "ACC000123456"
            },
            "toAccount": {
                "name": "John Doe",
                "accountNumber": "ACC123456789"
            },
            "fee": 0.00
        },
        {
            "id": "txn_002",
            "date": "2024-10-26T14:25:00Z",
            "type": "withdrawal",
            "amount": 50.00,
            "currency": "R$",
            "status": "completed",
            "description": "ATM withdrawal",
            "fromAccount": {
                "name": "John Doe",
                "accountNumber": "ACC123456789"
            },
            "toAccount": {
                "name": "ATM Operator",
                "accountNumber": "ATM123"
            },
            "fee": 1.00
        },
        {
            "id": "txn_003",
            "date": "2024-10-27T09:45:00Z",
            "type": "transfer",
            "amount": 150.00,
            "currency": "R$",
            "status": "pending",
            "description": "Transfer to Jane Smith",
            "fromAccount": {
                "name": "John Doe",
                "accountNumber": "ACC123456789"
            },
            "toAccount": {
                "name": "Jane Smith",
                "accountNumber": "ACC987654321"
            },
            "fee": 2.00
        },
        {
            "id": "txn_004",
            "date": "2024-10-28T12:00:00Z",
            "type": "deposit",
            "amount": 200.00,
            "currency": "R$",
            "status": "completed",
            "description": "Freelance payment",
            "fromAccount": {
                "name": "Client",
                "accountNumber": "ACC444555666"
            },
            "toAccount": {
                "name": "John Doe",
                "accountNumber": "ACC123456789"
            },
            "fee": 0.00
        },
        {
            "id": "txn_005",
            "date": "2024-10-29T08:30:00Z",
            "type": "payment",
            "amount": 75.00,
            "currency": "R$",
            "status": "completed",
            "description": "Subscription payment",
            "fromAccount": {
                "name": "John Doe",
                "accountNumber": "ACC123456789"
            },
            "toAccount": {
                "name": "Streaming Service",
                "accountNumber": "ACC777888999"
            },
            "fee": 1.50,
            "creditCard": {
                "number": "4539876543211234",
                "brand": "VISA"
            }
        },
        {
            "id": "txn_006",
            "date": "2024-10-30T14:40:00Z",
            "type": "transfer",
            "amount": 120.00,
            "currency": "R$",
            "status": "failed",
            "description": "Transfer to Mark Green",
            "fromAccount": {
                "name": "John Doe",
                "accountNumber": "ACC123456789"
            },
            "toAccount": {
                "name": "Mark Green",
                "accountNumber": "ACC555666777"
            },
            "fee": 0.00
        },
        {
            "id": "txn_007",
            "date": "2024-11-01T11:20:00Z",
            "type": "withdrawal",
            "amount": 40.00,
            "currency": "R$",
            "status": "completed",
            "description": "Cash withdrawal",
            "fromAccount": {
                "name": "John Doe",
                "accountNumber": "ACC123456789"
            },
            "toAccount": {
                "name": "ATM Operator",
                "accountNumber": "ATM123"
            },
            "fee": 1.00
        },
        {
            "id": "txn_008",
            "date": "2024-11-02T15:10:00Z",
            "type": "deposit",
            "amount": 300.00,
            "currency": "R$",
            "status": "completed",
            "description": "Bonus payment",
            "fromAccount": {
                "name": "Employer Inc",
                "accountNumber": "ACC888999000"
            },
            "toAccount": {
                "name": "John Doe",
                "accountNumber": "ACC123456789"
            },
            "fee": 0.00
        },
        {
            "id": "txn_009",
            "date": "2024-11-03T17:30:00Z",
            "type": "payment",
            "amount": 90.00,
            "currency": "R$",
            "status": "completed",
            "description": "Electricity bill",
            "fromAccount": {
                "name": "John Doe",
                "accountNumber": "ACC123456789"
            },
            "toAccount": {
                "name": "Electric Company",
                "accountNumber": "ACC111222333"
            },
            "fee": 1.75,
            "creditCard": {
                "number": "5409876543219876",
                "brand": "Mastercard"
            }
        },
        {
            "id": "txn_010",
            "date": "2024-11-04T13:00:00Z",
            "type": "transfer",
            "amount": 200.00,
            "currency": "R$",
            "status": "pending",
            "description": "Transfer to Sarah Brown",
            "fromAccount": {
                "name": "John Doe",
                "accountNumber": "ACC123456789"
            },
            "toAccount": {
                "name": "Sarah Brown",
                "accountNumber": "ACC222333444"
            },
            "fee": 2.50
        }
    ]
}