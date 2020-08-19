import React, { FC, useEffect, useRef } from 'react';
import * as S from './styles';
import NavigationSubHeader from './Header/NavigationSubHeader';
import NavigationSubBody from './Body/NavigationSubBody';
import { useSelector } from 'react-redux';
import { stateType } from '../../../modules/reducer';
import CloseNavigatin from './Close/CloseNavigation';
import { customSelector } from '../../../lib/api';

function Sleep(delaySecond: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delaySecond * 1000);
  });
}

const NavigationSub: FC<{}> = () => {
  const isClose = customSelector((state) => state.subNav.isClose);
  const mainUrl = useSelector((store: stateType) => store.page.mainUrl);
  const isActive = mainUrl === '동아리' || mainUrl === '외출신청';
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (isClose || !isActive) {
      ref.current.style.minWidth = 'unset';
      return;
    }
    Sleep(0.25).then(() => {
      ref.current.style.minWidth = '220px';
      return;
    });
  }, [isClose, isActive]);

  return (
    <S.Container isActive={isActive} isClose={isActive && isClose} ref={ref}>
      {!isClose && isActive && (
        <>
          <NavigationSubHeader>{mainUrl}</NavigationSubHeader>
          <NavigationSubBody page={mainUrl} />
        </>
      )}

      {isClose && isActive && <CloseNavigatin />}
    </S.Container>
  );
};

export default NavigationSub;
