import React from "react";
import axios from "axios";

import { TokenType, Chain, ChainColor } from "./types";
import {
  TokensContainer,
  Token,
  Name,
  NetworkContainer,
  Network,
  Address,
  Filters,
  ChainFilter,
  SearchBox,
  SelectBox,
  TokenContainer,
  NetworkAddress,
  ClipboardAddress,
} from "./styles";
import Clipboard from "../../clipboard.svg";

const tokenList =
  "https://bobanetwork.github.io/token-list/boba.tokenlist.json";

export const Tokens = () => {
  const [tokens, setTokens] = React.useState<TokenType[]>([]);
  const [chains, setChains] = React.useState<number[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [chainFilter, setChainFilter] = React.useState<number>(0);

  React.useEffect(() => {
    axios.get(tokenList).then((response) => setTokens(response.data.tokens));
  }, []);

  React.useEffect(() => {
    setChains([...new Set(tokens.map(({ chainId }) => chainId))]);
  }, [tokens]);

  const filteredToken: TokenType[] = tokens.filter((x: TokenType) =>
    Object.values(x).some((val: any) => {
      return val.toString().toLowerCase().includes(searchValue.toLowerCase());
    })
  );

  const filteredTokenByChain = chainFilter
    ? filteredToken.filter((x) => x.chainId === chainFilter)
    : filteredToken;

  const handleClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  return (
    <TokensContainer>
      <Filters>
        <div>
          <h2>Token List</h2>
        </div>
        <div>
          <SearchBox
            placeholder="Search by Token / Chain / Network"
            onChange={(e: any) => setSearchValue(e.target.value)}
          />
        </div>
        <ChainFilter>
          <p>Filter by Chain: </p>
          <SelectBox onChange={(e) => setChainFilter(Number(e.target.value))}>
            <option value={0}>All Networks</option>
            {chains.map((chain: number) => {
              return <option value={chain}>{Chain[chain]}</option>;
            })}
          </SelectBox>
        </ChainFilter>
      </Filters>
      <TokenContainer>
        {filteredTokenByChain.map((token: TokenType) => {
          const { name, symbol, address, logoURI } = token;
          return (
            <Token>
              <img src={logoURI} alt={name} width="25" height="25" />
              <Name>{symbol}</Name>
              <NetworkContainer>
                <Network {...ChainColor[token.chainId]}>
                  {Chain[token.chainId]}
                </Network>
              </NetworkContainer>
              <NetworkAddress>
                <Address>{address}</Address>
                <ClipboardAddress
                  src={Clipboard}
                  onClick={() => handleClipboard(address)}
                  aria-pressed
                />
              </NetworkAddress>
            </Token>
          );
        })}
      </TokenContainer>
    </TokensContainer>
  );
};
