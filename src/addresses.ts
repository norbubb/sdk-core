import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  v1MixedRouteQuoterAddress?: string
}

const DEFAULT_NETWORKS = [ChainId.X1, ChainId.X1_TESTNET]

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

export const UNI_ADDRESSES: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', [])

export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export const V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const V2_FACTORY_ADDRESSES: AddressMap = {}
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */
export const V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
export const V2_ROUTER_ADDRESSES: AddressMap = {}

// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
const X1_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x163c162f6EfE12050313a89356F54385e1181119',
  multicallAddress: '0xE53F0d699A4edF1F9C23caB074cFD988b7A9E183',
  quoterAddress: '0x2a7F7b556564B8aFc54cDBa8bfe059Ec8944B740',
  v3MigratorAddress: '0x5Ff00497f3f31452389eB31039CfbB91C24AB510',
  nonfungiblePositionManagerAddress: '0x6C96DE60866152A77c3808AABb0C4fB82d01ba11',
  tickLensAddress: '0x6C70dA82e9F32bc35375B017D886fbf231A1495C',
  swapRouter02Address: '0x26Fa86Bf4D118C5E0d1e47a6A5edf0304f7D2A31'
}
const X1_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x3F6904E81f636f0F476595ef633033647C702487',
  multicallAddress: '0xFfF0B8e56B5489a45F47128d93Ae5d471Ae0B3DF',
  quoterAddress: '0xb8b157C232cA20f65Fa6bFE965f15040171cE95f',
  v3MigratorAddress: '0x15ECbD27D8874fdF8d19564484E8E7EDEF8C2e3A',
  nonfungiblePositionManagerAddress: '0x6d5B724F924aC9e226FA28FcCc257670f4699D17',
  tickLensAddress: '0x065d9395CaC5761c08518C9686D15C12B6DE57C9',
  swapRouter02Address: '0xFcCd9d65b8ebb31DC5266434685c1f7EC3124928'
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.X1]: X1_ADDRESSES,
  [ChainId.X1_TESTNET]: X1_TESTNET_ADDRESSES
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {})
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {}

export const TIMELOCK_ADDRESSES: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e')
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
}

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress
  }
  return memo
}, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address ?? '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'
  }
  return ''
}
