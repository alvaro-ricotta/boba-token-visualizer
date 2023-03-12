interface SupportedChain {
    [key: number]: string;
}

interface SupportedChainExplorer {
    [key: string]: string;
}

export type ChainColorScheme = {
    color: string;
    background:string;
}

interface SupportedColorChain {
    [key: number]: ChainColorScheme;
}

export const Chain: SupportedChain = {
    1: "Ethereum",
    5: "Göerli",
    288: "Boba Network",
    2888: "Boba Göerli",
};

export const Rpc:SupportedChainExplorer = {
    "Ethereum" : 'https://api.mycryptoapi.com/eth',
    "Göerli" : 'https://rpc.goerli.mudit.blog/',
    "Boba Network" : 'https://lightning-replica.boba.network/',
    "Boba Göerli" : 'https://goerli.boba.network',    
}


export const ChainExplorer:SupportedChainExplorer = {
    "Ethereum" : 'https://etherscan.io',
    "Göerli" : 'https://goerli.etherscan.io',
    "Boba Network" : 'https://bobascan.com',
    "Boba Göerli" : 'https://testnet.bobascan.com',
};

export const ChainColor: SupportedColorChain = {
    1: {
        color:'rgb(17 109 175)',
        background: 'rgb(0 96 255 / 11%)'
    },
    5: {
        color:'rgb(17 135 175)',
        background: 'rgb(0 203 255 / 11%)'
    },
    288: {
        color:'#8faf11',
        background: 'rgb(203 255 0 / 11%)'
    },
    2888: {
        color:'rgb(45 175 17)',
        background: 'rgb(36 255 0 / 11%)'
    },
};

export type TokenType = {
    chainId: number;
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
};