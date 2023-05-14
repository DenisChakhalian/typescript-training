interface IPayment {
    sum: number,
    from: number,
    to: number,
}

interface IServerRequest extends IPayment {
}

enum PaymentStatus {
    Success = "success",
    Failed = "failed",
}

interface IResponseSuccess {
    status: PaymentStatus.Success,
    data: {
        sum: number;
        from: number;
        to: number;
        databaseId: number
    }
}

interface IResponseError {
    status: PaymentStatus.Failed,
    data: {
        errorMessage: string,
        errorCode: number,
    }
}

// Request
// {
//     "sum": 10000,
//     "from": 2,
//     "to": 4
// }
// Response
// {
//     "status": "success",
//     "data": {
//     "databaseId": 567,
//         "sum": 10000,
//         "from": 2,
//         "to": 4
// }
// },
// {
//     "status": "failed",
//     "data": {
//     "errorMessage": "Not enough money",
//         "errorCode": 4
// }
// }