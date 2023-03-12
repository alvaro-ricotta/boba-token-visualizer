import styled from "styled-components";
import {ChainColorScheme} from "./types";

export const TokensContainer = styled.div`
  padding: 5px 15px;
  background: rgba(27, 28, 31, 1);
  backdrop-filter: blur(100px);
  border-radius: 8px;
  border: 1px solid rgba(45, 47, 58, 1);
`;

export const Token = styled.div`
  display: flex;
  margin: 10px 0px;
  align-items: center;
`;

export const Name = styled.div`
  min-width: 160px;
  padding-left: 10px;
`;

export const NetworkContainer = styled.div`
  min-width: 140px;
`;

export const Network = styled.div<ChainColorScheme>`
  display: inline-flex;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 14px;
  min-width: auto;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;

export const AddressContainer = styled.div`
  width:375px;
  color: rgb(66 68 81);
`;

export const Address = styled.button`
  background:transparent;
  border:0px;
  color:inherit;
  cursor:pointer;
  transition: color 0.2s ease;
  &:hover {
    color:#fff;
  }
`

export const Filters = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(45, 47, 58);
  align-items: center;
  justify-content: space-between;
`;

export const ChainFilter = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBox = styled.input`
  min-width: 220px;
  border-radius: 8px;
  padding: 10px 15px;
  outline: none;
  color: #f2f2f2;
  background: rgba(27, 28, 31, 1);
  border: 1px solid rgb(45, 47, 58);
  &:focus {
    border: 1px solid rgb(55, 58, 69);
  }
`;

export const SelectBox = styled.select`
  cursor: pointer;
  margin-left: 10px;
  border-radius: 8px;
  padding: 5px 15px 5px 10px;
  outline: none;
  color: #f2f2f2;
  background: rgba(27, 28, 31, 1);
  border: 1px solid rgb(45, 47, 58);
  display: inline-block;
  height: 37px;
  &:focus {
    border: 1px solid rgb(55, 58, 69);
  }
`;

export const TokenContainer = styled.div`
  padding: 15px 0px;
`;

export const NetworkAddress = styled.div`
  display:flex;
  align-items:center;
`
export const ClipboardAddress = styled.img`
  width:20px;
  cursor:pointer;
  &:active {
    filter: brightness(0.5);
  }
`

export const AddMetamask = styled.img`
  width:25px;
  margin-left:10px;
  cursor:pointer;
`
