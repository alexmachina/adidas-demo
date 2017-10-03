import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Body from './Body'
const MainDiv = styled.div`
@media screen and (min-width:280px) {
  font-weight: bold;
  color: #ffffff;
  font-family: Helvetica;
}
`

const ShopBox = styled.div`
@media screen and (min-width:280px) {
  position:absolute;
  font-size:22px;
  top:235px;
  text-align:center;
  width:100%;
  z-index:2;
  
}

@media screen and (min-width:480px) {
  font-size:32px;
  top:230px;
}

@media screen and (min-width:768px) {
  font-size:42px;
  top:225px;
}
@media screen and (min-width:992px) {
  top:310px;
  font-size:64px;

}

@media screen and (min-width:992px) {
}

@media screen and (min-width:1200px){
  font-size:78px;
  top:300px;
}
`
const Main = () => (
  <MainDiv>
    <Header />
    <ShopBox>SPOTT THE WORLD CUP STARS</ShopBox>
    <Body />
  </MainDiv>
)

export default Main










