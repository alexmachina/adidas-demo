import React from 'react'
import styled from 'styled-components'
import Videos from './Videos'
const BodyDiv = styled.article`
@media screen and (min-width:280px) {
  position:relative;
  background-image: url('img/Background02.png');
  background-size: 100% 100%;
  background-repeat:no-repeat;
  height:667px;
  display:flex;
}

@media screen and (min-width:480px) {
height:820px;
}
@media screen and (min-width:768px) {
  height:820px;
}

@media screen and (min-width:1200px) {
  height:1000px;
}
`

const VideosBox = styled.div`
@media screen and (min-width:280px) {
  margin-top:100px;
  height:100px;
  width:100%;
}
`

const Body = () => (
  <BodyDiv>
    <VideosBox>
      <Videos></Videos>
    </VideosBox>
  </BodyDiv>
)

export default Body
