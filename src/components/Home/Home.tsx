import React, { ChangeEvent, FC, useState } from "react";

import * as S from "./style";

import { GoOutOnBike, SMSLogoBlack } from "../../assets";
import { useHistory } from "react-router-dom";

interface Props {}

const Home: FC<Props> = () => {
  const history = useHistory();
  const [code, setCode] = useState<string>("");

  const goApprovePage = (code: string) => {
    history.push(`/${code}`);
  };

  const handleCode = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  };

  const handleInquiry = () => {
    goApprovePage(code);
  };

  return (
    <S.HomeWrap>
      <S.Header />
      <h3>소개</h3>
      <S.Intro>
        <S.LogoWrap>
          <img src={SMSLogoBlack} alt="sms logo" title="sms logo" />
        </S.LogoWrap>
        <S.Desc>
          <p>
            교내 외출 시스템의 불편했던 점을 개선하고 학교와 학생 간 의사소통을
            도와주는 플랫폼 기획
          </p>
          <p>SMS(School Management System) for DSM</p>
        </S.Desc>
      </S.Intro>
      <S.Main>
        <S.MainTop>
          <img src={GoOutOnBike} alt="go out" title="go out" />
          <span>코드 입력</span>
        </S.MainTop>
        <S.Label htmlFor="code">
          <span>confirm-</span>
          <S.CodeInput
            type="text"
            id="code"
            placeholder="외출 코드 (숫자 12자리 입력)"
            value={code}
            onChange={handleCode}
            onKeyPress={e => e.key === "Enter" && handleInquiry()}
          />
        </S.Label>
        <S.Inquiry onClick={handleInquiry}>조회</S.Inquiry>
      </S.Main>
    </S.HomeWrap>
  );
};

export default Home;
