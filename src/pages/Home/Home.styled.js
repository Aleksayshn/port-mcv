import styled from "styled-components";

export const Section = styled.section`
height: 100%;
@media screen and (max-width:999px) {
  
    height: calc(90lvh - 56px);
    }
`;
export const HeadProfile = styled.div`
margin-bottom:80px;
`;
export const HeadProfileBody = styled.div`

`;
export const Img = styled.img`
  object-fit: cover;
  
`;
export const ImgContainer = styled.div`
flex: 0 1 40%;
position: relative;

&::after {
    content: "";
    position: absolute;
    z-index: 2;
    left: 0;
    bottom: -1px;
    height: 70px;
    width: 100%;
    background-image: linear-gradient(to top, rgba(1, 22, 39, 1) 0%, rgba(1, 22, 39, 0) 100%);
  };
@media screen and (max-width:999px) {
display:none;
    }
`

export const Container = styled.div`
position: relative;
height: 100%;
margin-left:311px;
display: flex;
align-items:center;
gap:30px;
  justify-content: space-between;
  @media screen and (max-width:1200px) {
    margin-left:0;
    padding:0 54px;
    }
  @media screen and (max-width:999px) {
    margin-left:0;
    padding:0 27px;
    }
`;

export const TextList = styled.ul`
display:inline-flex;
flex-direction:column;
gap:10px;
  @media screen and (max-width:999px) {
display:none;
    }
`;
export const MobTextList = styled.ul`
display:none;
  @media screen and (max-width:999px) {
    position:relative;
    z-index:2;
display:block;
    }
`;
export const GreenLight = styled.div`
  position: absolute;
  z-index: 999;
  top: 64px;
  right: 352px;
  width: 454px;
  height: 492px;
  transform: rotate(-94.305deg);
  opacity: 0.4;
  background-image: url(./img/Green.png);
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Text = styled.span`
color: #E5E9F0;
font-size: 18px;
@media screen and (max-width:999px) {
font-weight: 450;
    }

`;
export const DevName = styled.h1`
color: #E5E9F0;
font-size: 62px;
font-weight: 400;
@media screen and (max-width:999px) {
  line-height: 1;
    }

`;
export const DevProfile = styled.h2`
color: #4D5BCE;
font-size: 32px;
font-weight: inherit;
@media screen and (max-width:999px) { 
  color: #43D9AD;
  font-size: 20px;
  font-weight: 450;
    }

`;
export const TextDownProfile = styled.li`
color: #607B96;
font-weight: inherit;
font-weight: 450;
@media screen and (max-width:999px) { 
font-size: 14px;
line-height: 1.4;
margin-bottom:16px;
    }
`;
export const TextViolet = styled.span`
color: #4D5BCE;
font-weight: 500;
@media screen and (max-width:999px) { 
font-size: 14px;
line-height: 1.4;
    }
`;
export const TextGreen = styled(TextViolet)`
color: #43D9AD;
`;
export const LinkOrange = styled.a`
color: #E99287;
font-weight: 500;
&:hover,
  &:focus {
    color: #4D5BCE;
  }
  @media screen and (max-width:999px) { 
font-size: 14px;
line-height: 1.4;
    }
`;

export const Green = styled.div`
position:absolute;
z-index:3;
top:9.6%;
right:26.6%;
width: 454px;
height: 492px;
transform: rotate(-94.305deg);
border-radius:100% 20%;
background: #43D9AD;
opacity: 0.4;
filter: blur(5.5rem);
@media screen and (max-width:999px) {
  width: 255px;
height: 277px;
top:12.53%;
right:21.05%;
    }
`;

export const Blue = styled(Green)`
z-index:4;
transform: rotate(13.508deg);
top:28.5%;
right:12.34%;
transform: rotate(13.508deg);
background: #4D5BCE;
@media screen and (max-width:999px) {
  width: 255px;
height: 277px;
top:24.76%;
right:-16.84%;
    }
`;




