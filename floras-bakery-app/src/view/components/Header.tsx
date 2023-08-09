import React from 'react'
import { styled } from "styled-components";

import { Logo } from "../../assets/logo/logo-floras.svg";


const StyledHeader = styled.header`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 2rem;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 2rem;
`
const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  padding: 0.5;
  margin: 0;
  gap: 0.875rem;
`

const Link = styled.a`
  text-decoration: none;
  color: #015314;
  font-weight: 500;
`

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer><Logo /></LogoContainer>
      <NavBar>
        <NavList>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Sobre nós</Link></li>
          <li><Link href="#">Produtos</Link></li>
          <li><Link href="#">Club</Link></li>
          <li><Link href="#">Contato</Link></li>
        </NavList>
      </NavBar>
    </StyledHeader>
  )
}

export default Header