import React from 'react';
import * as S from './styled'
import kpopImg from '../../images/kpop-header.png'

function HeaderContainer() {
  return(
    <S.Container>
    <img src={kpopImg} alt="" />
    </S.Container>
  )
}

export default HeaderContainer;