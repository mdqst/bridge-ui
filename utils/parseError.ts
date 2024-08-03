const genericErrorMessage = 'Something went wrong!'


export function parseError(error: unknown): string {
    console.error(error)
    const errorMessageString: string = error instanceof Error ? error.message :
        typeof error === 'string' ? error : "";
    if (!errorMessageString) {
        return genericErrorMessage;
    }
    if (errorMessageString.match(/Cancelled/i)) {
        return "You have rejected the transaction on your connected wallet.";
    }
    if (errorMessageString.match(/Connect a Eth account/i)) {
        return "Connect an Ethereum account to proceed.";
    }
    if (errorMessageString.match(/Connect a Avail account/i)) {
        return "Connect an Avail account to proceed.";
    }
    if (errorMessageString.match(/exceeds balance/i)) {
        return "Transfer amount is more than amount available in your wallet.";
    } if (errorMessageString.match(/denied network switch/i)) {
        return "You denied the network switch. Please allow the switching to continue.";
    } if (errorMessageString.match(/walletConnect network switch not supported/i)) {
        return "You may need to manually switch it to the correct network.";
    } if (errorMessageString.match(/No account selected/i)) {
        return "Please connect your accounts";
    }
    if (errorMessageString.match(/Failed to fetch proofs from api/i)) {
        return "Failed to fetch proofs from API. Contact Support";
    }
    if (errorMessageString.match(/invalid network/i)) {
        return "Network not supported. Please switch to the correct network.";
    }
    if (errorMessageString.match(/Network not supported/i)) {
        return "Network not supported, switching to the correct network. Retry the transaction.";
    }
    if (
        errorMessageString.match(/denied transaction/i) || // Metamask browser message
        errorMessageString.match(/User rejected the transaction/i) || // Metamask mobile message
        errorMessageString.match(/User rejected the request/i) || // Rabby message
        errorMessageString.match(/user rejected transaction/i)
    ) {
        return "You have rejected the transaction on your connected wallet.";
    } if (errorMessageString.match(/intrinsic gas too low/i)) {
        return "Provided gas is too low to complete this deposit, please allow suggested gas amount";
    } if (errorMessageString.match(/transaction underpriced/i)) {
        return "Provided gas is too low to complete this deposit, please allow suggested gas amount";
    } if (errorMessageString.match(/EXIT_ALREADY_PROCESSED/i)) {
        return "Exit already processed";
    } if (errorMessageString.match(/nonce too low/i)) {
        return "Please clear the queue of your previous transactions on your wallet before proceeding with this transaction.";
    } if (errorMessageString.match(/Incorrect Burn tx or Event Signature!/i)) {
        return "Please check if it is the current burn transaction hash and correct network/bridge selected. If the issue persists, please contact support.";
    } if (errorMessageString.match(/error fetching allowance/i)) {
        return "Error fetching allowance.";
    } if (errorMessageString.match(/insufficient balance/i)) {
        return "You do not have sufficient balance.";
    }
    if (typeof error === 'string') {
        return error;
    }

    return genericErrorMessage;

}
