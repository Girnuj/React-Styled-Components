import React from 'react'
import {Button} from '../ButtonElement'
import { ImgWrap,Img, InfoContainer, InfoWrapper,Column2,BtnWrap,Subtitle,Heading,TopLine, InfoRow, Column1, TextWrapper  } from './InfoElements'

const InfoSection = ({lightBg,primary,dark,dark2 , id,imgStart,topLine,lightText,darkText,img,alt,headline,description,buttonLabel }) => {
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/> 
                        </ImgWrap>
                    </Column2>
                 </InfoRow>

             </InfoWrapper>
         </InfoContainer>   
        </>
    )
}

export default InfoSection

