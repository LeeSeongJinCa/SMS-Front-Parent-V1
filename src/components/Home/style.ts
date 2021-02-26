import styled from "styled-components";

import { SMS } from "../../assets";

export const HomeWrap = styled.div`
  width: 400px;
  margin: auto;
  padding: 12px 20px;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 12px;
  @media (max-width: 424px) {
    & {
      width: 100%;
      padding: 16px;
    }
  }
  > * {
    margin: 16px 0;
  }
  h3 {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Header = styled.header`
  height: 256px;
  background-image: url(${SMS});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Intro = styled.div`
  display: flex;
  line-height: 1.5;
  margin: 24px 0;
  text-align: center;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;

export const Desc = styled.div`
  width: 75%;
  > p {
    margin: 24px 0;
    font-weight: 500;
  }
`;

export const Main = styled.main``;

export const MainTop = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  > img {
    width: 25px;
    margin-right: 12px;
  }
  > span {
    font-weight: 500;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bababa;
  font-size: 14px;
`;

export const CodeInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 14px;
  &::placeholder {
    font-size: 14px;
  }
`;

export const Inquiry = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  color: white;
  background: #5323b2;
  outline: none;
`;
