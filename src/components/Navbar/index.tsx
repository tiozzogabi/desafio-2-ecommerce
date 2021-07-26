import React, {useState} from 'react';
import * as S from './styled';
import { FaShoppingCart, FaSearch, FaHeart, FaBars  } from "react-icons/fa";

function Navbar() {
  const [login, setLogin] = useState(false);

  function showLogin(e: any) {
    console.log(login)
    setLogin(true);
    login ? document.body.addEventListener("click", closeLogin) : console.log('error')
  }

  function closeLogin(e: any) {
    console.log('close login: ', login)
    setLogin(false);
    document.body.removeEventListener("click", closeLogin);
  }

  function entrar() {
    
  }

  return(
    <S.NavContainer>
    <S.MenuContainer>
      <li>Categorias</li>
      <li>Promoções</li>
      <li>Coleções</li>
      <li>Contato</li>
    </S.MenuContainer>
    <S.Logo className="logo">PinkThinking</S.Logo>
    <FaBars className="hamburguer"/>
    <S.MenuContainerIcon>
      <FaSearch  className="icon"/>
      <FaHeart className="icon"/>
      <FaShoppingCart className="icon"/>
      <button onClick={showLogin}>Log in</button>
    </S.MenuContainerIcon>
    {login ? <S.Modal>
      <form action="">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email"  />
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" />
        <button type="submit" onClick={entrar}>Entrar</button>
        <span>Cadastre-se</span>
      </form>
    </S.Modal>: ''}
    </S.NavContainer>
  )
}

export default Navbar;