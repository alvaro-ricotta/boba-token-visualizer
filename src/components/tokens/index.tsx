import React, { useState, useEffect } from "react";
import axios from "axios";

import { TokenType, Chain, ChainColor, ChainExplorer } from "./types";
import {
  TokensContainer,
  Token,
  Name,
  NetworkContainer,
  Network,
  AddressContainer,
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

const tokenListUrl =
  "https://bobanetwork.github.io/token-list/boba.tokenlist.json";

export const Tokens = () => {
  const [tokens, setTokens] = useState<TokenType[]>([]);
  const [chains, setChains] = useState<number[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [chainFilter, setChainFilter] = useState<number>(0);

  useEffect(() => {
    axios.get(tokenListUrl).then((response) => setTokens(response.data.tokens));
  }, []);

  useEffect(() => {
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

  const handleExplorer = (chain: string, address: string) => {
    const explorer = ChainExplorer[chain];
    window.open(`${explorer}/address/${address}`, "_blank");
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
              return (
                <option value={chain} key={chain}>
                  {Chain[chain]}
                </option>
              );
            })}
          </SelectBox>
        </ChainFilter>
      </Filters>
      <TokenContainer>
        {filteredTokenByChain.map((token: TokenType, index: number) => {
          const { name, symbol, address, logoURI } = token;
          return (
            <Token key={index}>
              <img src={logoURI} alt={name} width="25" height="25" />
              <Name>{symbol}</Name>
              <NetworkContainer>
                <Network {...ChainColor[token.chainId]}>
                  {Chain[token.chainId]}
                </Network>
              </NetworkContainer>
              <NetworkAddress>
                <AddressContainer>
                  <Address
                    onClick={() =>
                      handleExplorer(Chain[token.chainId], address)
                    }
                  >
                    {address}
                  </Address>
                </AddressContainer>
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
