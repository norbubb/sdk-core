export enum ChainId {
  X1 = 196,
  X1_TESTNET = 195,
}

export const SUPPORTED_CHAINS = [
  ChainId.X1,
  ChainId.X1_TESTNET,
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  OKB = 'OKB'
}
