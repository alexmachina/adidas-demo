import React from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import $ from 'jquery'

const BodyBox = styled.div`
@media screen and (min-width:280px){
  display:flex;
  align-items:center;
  flex-direction:column;
  
}
`
const ControlsBox = styled.div`
@media screen and (min-width:280px) {
  display:flex;
  width:250px;
  align-items:space-between;
  justify-content:space-between;
  margin-bottom:30px;
}

@media screen and (min-width:768px) {
  width:350px;
}
@media screen and (min-width:992px) {
  width:400px;
  margin-bottom:60px;
}
`

const LeftArrow = styled.div`
@media screen and (min-width:280px) {
  background-image: url('img/arrow-left@3x.png');
  background-size:100% 100%;
  width:45px;
  height: 45px;

  &:hover {
    background-image: url('img/arrow-left@3x-inverse.png');
    
  }
  
}`
                     

const StarName = styled.div`
@media screen and (min-width:280px){
  width:50%;
  font-size:16px;
  text-align:center;
  position:relative;
  top:10px;
  letter-spacing:4px;
}
@media screen and (min-width:768px) {
  font-size:22px;
}
`

const RightArrow = styled.div`
@media screen and (min-width:280px) {
  width:45px;
  height:45px;
  background-image: url('img/arrow-right@3x.png');
  background-size:100% 100%;

       &:hover {
         background-image: url('img/arrow-right@3x-inverse.png')
       }
}`

const CarouselBox = styled.div`
@media screen and (min-width:280px) {
  width:100%;
  margin-bottom:30px;
  text-align:center;
}

@media screen and (min-width:768px) {
  margin-bottom:70px;
}
@media screen and (min-width:992px) {
  margin-bottom:85px;
}`

const IFrame = styled.iframe`
@media screen and (min-width:280px){
  width:100%;
  height:300px;
  color:rgba(255,255,255,0)
}

@media screen and (min-width:480px) {
  height:400px;
}

@media screen and (min-width:768px) {
  height:400px;
  width:738px;
}

@media screen and (min-width:1200px) {
  height:550px;
  width: 992px;
}
`

const StarButton = styled.a`
@media screen and (min-width:280px) {
  text-decoration:none;
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:5px;
  width:80%;
  background-color:Transparent;
  background-image: none;
  background-repeat: repeat;
  border:1.5px solid white;
  height:60px;
  font-weight:bolder;
  color:white;
}

@media screen and (min-width:920px) {
  width:300px;
}
                   &:hover {
                     background-color:white;
                     color:black;
                   }
`
const Videos = class Videos extends React.Component {

  constructor(props) {
    super(props)
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this)
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this)
    this.setCarouselData = Carousel.ControllerMixin.setCarouselData
    this.state = {
          slidePos: 0,
          stars: [
        {
          starName: 'Leo Messi',
          videoUrl: 'https://spott-cms-rest-prd.appiness.mobi:443/apptvate/rest/v004/video/videos/df654623-016b-4878-9414-793b9c35d9e0/embeddedStreamer?templateName=default&theme=DARK&primaryColor=%23e30000&autoplay=false&hideProductRelevance=true&language=en',
          link: 'http://www.adidas.com/us/leo_messi'
        },
        {
          starName: 'Mesut Özil',
          videoUrl: 'https://spott-cms-rest-prd.appiness.mobi:443/apptvate/rest/v004/video/videos/706e65f5-c916-44a7-9392-5de9bdd9cd86/embeddedStreamer?templateName=default&theme=DARK&primaryColor=%23e30000&autoplay=false&hideProductRelevance=true&language=en',
          link: 'http://www.adidas.com/us/mesut_ozil'
        },
            
        {
          starName: 'Belgium Red Devils',
          videoUrl: 'https://spott-cms-rest-prd.appiness.mobi:443/apptvate/rest/v004/video/videos/be44283f-1f8a-476a-93e6-1aeb3953d1de/embeddedStreamer?templateName=default&theme=DARK&primaryColor=%23e30000&autoplay=false&hideProductRelevance=true&language=en',
          link: 'http://www.adidas.be/search?q=belgium'
          
        }
      ]
    }
  }

  render() {
    const slidePos = this.state.slidePos
    const stars = this.state.stars
    return (
      <BodyBox>
        <ControlsBox>
          <LeftArrow onClick={this.handleLeftArrowClick}></LeftArrow>
          <StarName>{stars[slidePos].starName.toUpperCase()}</StarName>
          <RightArrow onClick={this.handleRightArrowClick}></RightArrow>
        </ControlsBox>
        <CarouselBox>
          <Carousel decorators={[]} ref={c =>{ this.carousel = c}}>
            {this.state.stars.map(s => (
              
                <IFrame id={s.starName.toLowerCase().replace(' ','')} key={s.starName} src={s.videoUrl} allowFullScreen frameBorder="0"></IFrame>
              
            ))}
          </Carousel>
        </CarouselBox>
        <StarButton target="_blank" href={stars[slidePos].link}>
          EXPLORE ALL {stars[slidePos].starName.toUpperCase()} ITEMS
        </StarButton>
      
       
      
      </BodyBox>
    )
  }

  handleRightArrowClick(e) {
    e.preventDefault()
    const calcSlidePos = slidePos => {
      if (slidePos == 2)
      return 0
      else
        return slidePos + 1
    }
    
    const stars = this.state.stars
    const slidePos = this.state.slidePos
    const idToStahp = stars[slidePos].starName.toLowerCase().replace(' ','')

    document.getElementById(idToStahp).src = ""
    
    const newSlidePos = calcSlidePos(this.state.slidePos)
    const nextId = stars[newSlidePos].starName.toLowerCase().replace(' ', '')
    document.getElementById(nextId).src = stars[newSlidePos].videoUrl
    this.setState({slidePos: newSlidePos})

    
    this.carousel.goToSlide(newSlidePos)
  }

  handleLeftArrowClick(e) {
    e.preventDefault()
    const calcSlidePos = slidePos => {
      if (slidePos == 0)
        return 2
      else
        return slidePos - 1
    }
    const stars = this.state.stars
    const slidePos = this.state.slidePos
    const idToStahp = stars[slidePos].starName.toLowerCase().replace(' ','')
    
    document.getElementById(idToStahp).src = ""
    
    const newSlidePos = calcSlidePos(slidePos)
    const nextId = stars[newSlidePos].starName.toLowerCase().replace(' ','')
    document.getElementById(nextId).src = stars[newSlidePos].videoUrl
    this.setState({slidePos: newSlidePos})
    this.carousel.goToSlide(newSlidePos)
  }
}

export default Videos

















