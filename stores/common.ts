
import { Chain } from "@/types/common";
import { ApiPromise } from "avail-js-sdk";
import { create } from "zustand";

interface CommonStore {
    fromChain: Chain
    setFromChain: (fromChain: Chain) => void
    dollarAmount: number
    setDollarAmount: (dollarAmount: number) => void
    toChain: Chain
    setToChain: (toChain: Chain) => void
    fromChainBalance: number | undefined
    setFromChainBalance: (fromChainBalance: number | undefined) => void
    toChainBalance: number | undefined
    setToChainBalance: (toChainBalance: number | undefined) => void
    api: ApiPromise
    setApi: (api: ApiPromise) => void
    pendingTransactionsNumber: number
    setPendingTransactionsNumber: (pendingTransactions: number) => void
    readyToClaimTransactionsNumber: number
    setReadyToClaimTransactionsNumber: (readyToClaimTransactions: number) => void
    fromAmount: number
    setFromAmount: (fromAmount: number) => void
    toAddress: string | undefined
    setToAddress: (toAddress: string) => void
    fetchingExternalTransactions: boolean
    setFetchingExternalTransactions: (fetchingExternalTransactions: boolean) => void
}

export const useCommonStore = create<CommonStore>((set) => ({
    fromChain: Chain.AVAIL,
    setFromChain: (fromChain) => set({ fromChain }),
    dollarAmount: 0,
    setDollarAmount: (dollarAmount) => set({ dollarAmount }),
    toChain: Chain.ETH,
    setToChain: (toChain) => set({ toChain }),
    fromChainBalance: undefined,
    setFromChainBalance: (fromChainBalance) => set({ fromChainBalance }),
    toChainBalance: undefined,
    setToChainBalance: (toChainBalance) => set({ toChainBalance }),
    api: {} as ApiPromise,
    setApi: (api) => set({ api }),
    pendingTransactionsNumber: 0,
    setPendingTransactionsNumber: (pendingTransactionsNumber) => set({ pendingTransactionsNumber }),
    readyToClaimTransactionsNumber: 0,
    setReadyToClaimTransactionsNumber: (readyToClaimTransactionsNumber) => set({ readyToClaimTransactionsNumber }),
    fromAmount: 0,
    setFromAmount: (fromAmount) => set({ fromAmount }),
    toAddress: undefined,
    setToAddress: (toAddress) => set({ toAddress }),
    fetchingExternalTransactions: false,
    setFetchingExternalTransactions: (fetchingExternalTransactions) => set({ fetchingExternalTransactions }),
}));

 
