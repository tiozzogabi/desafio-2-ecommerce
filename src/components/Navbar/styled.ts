import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  height: 8vh;
  background-color: #FFC6C7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media(max-width: 768px){
    .hamburguer{
      color: white;
      position: absolute;
      right: 35px;
      font-size: 1.5rem;
    
    }

  }
  @media(min-width: 768px){
      display: grid;
      grid-template-columns: 1fr 8rem 1fr;
      align-items: center;
      justify-items: center;

    
    div, ul{
      display: flex;
    }
    .hamburguer{
      display: none;
    }

  }
`

export const MenuContainer = styled.ul`
  display: none;
  list-style: none;
  
  li{
    color: #33272A;
    font-weight: 700;
    margin-right: 1.5rem;
  }
`

export const Logo = styled.div`
  color: #F8F8F8;
  font-weight: bolder;
  font-size: 1.2rem;

`

export const MenuContainerIcon = styled.div`
  color: #33272A;
  display: none;
  font-size: 1.5rem;

  i{
      margin-right: 1.5rem;
  }

  button{
    color: #33272A;
    font-weight: 900;
    padding: .2rem 1rem;
    background: none;
    font-size: 1rem;
    border: 3px solid #33272A;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
  }

  @media(min-width: 768px){
    display: flex;
    align-items: center;

    .icon{
      margin-right: 1rem;
    }
  }

`

export const Modal = styled.div`
  position: absolute;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  form{
    width: 40%;
    min-width: 20rem;
    height: 40%;
    padding: 4rem;
    background: pink;
    border-radius: 10px;
  
    label{
      display: block;
      margin: .5rem 0;
      font-size: 1.1rem;
      font-weight: bold;
    }

    button{
      margin: 1rem .5rem 0 0;
      padding: .5rem;
      font-size: 1rem;
      color: #fff;
      background:turquoise;
      border-radius: 5px;
      border: none;
    }
  }
`