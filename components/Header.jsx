import React from 'react'
import styled from 'styled-components'

const HeaderBox = styled.header`
@media screen and (min-width:280px) {
  background-image: url('img/Background01.png');
  background-attachment:fixed;
  background-repeat:no-repeat;
  height:250px;
  display:flex;
  align-items:center;
  flex-direction:column;
}

@media screen and (min-width:992px) {
  background-size:100% 100%;

  height:350px;
}

`

const Logo = styled.img`
@media screen and (min-width:280px) {
  margin-top:30px;
  width:180px;
  height:150px;
}
@media screen and (min-width:992px) {
  margin-top:50px;
}
`

const Presents = styled.h2`
@media screen and (min-width:280px) {
  font-family: Helvetica;
  letter-spacing: 6px;
  font-weight: bold;
  font-size:14px;
  margin-top:10px;
  margin-bottom:10px;
}

@media screen and (min-width:992px) {
  margin-top:40px;
  font-size:18px;
}
`

const Header = () => (
  <HeaderBox>
    <Logo src="img/adidas-logo.png" />
    <Presents>presents</Presents>
  </HeaderBox>
)

export default Header










