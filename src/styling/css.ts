import styled from "styled-components"

export const Heading = styled.h3`
font-weight: 600;
font-size: 32px;
line-height: 39px;
color: #03435F;
text-align: center;;

`
export const AdminHeading = styled.h3`
font-weight: 600;
font-size: 32px;
line-height: 39px;
color: #03435F;
text-align: center;
`
export const ViewAllAdminButton = styled.button`
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #14A800;
align-items: flex-start;
background: #FFFFFF;
border: 1px solid #14A800;
border-radius: 4px;
box-sizing: border-box;
flex: none;
box-sizing: border-box;
width: 124px;
height: 37px;
cursor: pointer;
`

export const ScoreCardHeading = styled.span`
font-weight: 600;
font-size: 32px;
color: #03435F;
margin-top: 50px;
`
export const NavText = styled.span`
font-weight: 600;
font-size: 32px;
color: #03435F;
margin-top: 50px;
`
export const LoginHeading = styled.h3`
font-weight: 600;
font-size: 32px;
font-weight: bold;
color: #03435F;
margin: 5rem 0;
`

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #03435f;
  display: block;
  color: #03435F;
`

export const Paragraph = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #BDBDBD;
padding: 2rem 2.5rem 0.1rem 2.5rem;
`


export const HorizontalLine = styled.div`
border: 1px solid #D9D9D9
`

export const ButtonText = styled.p`
color: #FFFFFF;
`
export const IButton = styled.button`
color: white;
background-color: #14A800;
flex-direction: row;
margin-left: 8rem;
`
export const MidButton = styled.button`
color: #000000;
background-color: #14A800;
`

export const LoginButtonBody = styled.button`
width: calc(100% - 0.21rem);
height: 2.5rem;
color: white;
border: 1px solid rgba(33, 51, 79, 0.15);
margin: 0.4rem 0;
background: linear-gradient(96.67deg, #34A853 0%, #B8D344 100%);
`

export const Input = styled.input`
  border: 0.15rem solid rgba(33, 51, 79, 0.15);
  color: #21334f;
  width: calc(100% - 1.5rem);
  padding: 0.4rem 0.5rem;
  display: inline-block;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  line-height: 1.5rem;
  height: 37px;
  border: 1px solid rgba(33, 51, 79, 0.15);
`;

export const ButtonBody = styled.button`
  width: calc(100% - 0.21rem);
  height: 2.5rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  border: 1px solid rgba(33, 51, 79, 0.15);
  /* padding: 0.8rem; */
  text-align: center;
  color: #fff;
  cursor: pointer;
  /* margin: 0.4rem 0; */
  background: #14a800;
  border:unset
`;

export const ButtonBody2 = styled.button`
  width: calc(100% - 0.21rem);
  height: 2.5rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: #14a800;
  margin-bottom: 1.5rem;
  border:unset
`;

export const FormCardBody = styled.div`
  background: #fff;
  width: 50%;
  /* margin: 3rem auto 0; */
  margin:auto;
  margin-top: 2rem;
  #super_admin_signup{
    text-align: center;
    margin-top: 3px;
    /* border:1px solid black; */
    padding-top: 30px;
  }
`;

/* export const super_admin_signup = styled.header
`
  text-align: center;
  margin-top: 5px; */
/* ` */

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  // margin-top: 10rem;

`;
export const Tr = styled.tr`
  // padding: 1rem 3rem;
  border: 1px solid #d9d9d9;
`;

export const Th = styled.th`
  background-color: #dddddd;
  text-align: left;
  padding: 10px;
 
`;

export const Td = styled.td`
  // border-bottom: 1px solid yellow;
  text-align: left;
  padding: 10px;
`;
export const Tbody = styled.tbody`
  position:relative;
  background-color: #fff;

`;
export const Thead = styled.thead`

`;
export const CardDashboard = styled.div`

`;
export const ProfileContentBody = styled.div`
background: #fff;
width: 500px;
border-right-width: 40px;
padding-right: 50px;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 50px;
margin-bottom: 20px;
// height: 80vh;
margin: 3rem auto 0;
`
export const AdminCard = styled.div`
  background: #fff;
  width: 42%;
  margin: -1rem auto 0;
  margin-top: 3rem;
`;

/* export const @media screen and (max-width: 700px) {
  
}  */

export const ScoreInput=styled.input` color: #21334f89;
width: calc(100% - 3.1rem);
display: inline-block;
padding: 0.4rem 1.5rem;
outline: unset;
font-size: 1rem;
line-height: 1.5rem;
height: 1.3rem;

&::placeholder,
&::-webkit-input-placeholder {
    color: #21334F29;
    font-weight: 200;
}

&:-ms-input-placeholder {
    color: #21334F29;
    font-weight: 200;
}

@media screen and (max-width: 900px) {
    padding: 0.3rem 1rem;
    outline: unset;
    width: calc(100% - 2rem);
    font-size: 0.8rem;
    line-height: 1.3rem;
    height: 1rem;
}
`
export const ScoreHeading=styled.h3 `font-weight: 600;
font-size: 32px;
line-height: 39px;
color: #03435F;
text-align: center;
` 
export const ScoreParagraph=styled.p` font-weight: 200;
font-size: 1rem;
color: #BDBDBD;
padding: 2rem 2.5rem 1.5rem 2.5rem;
box-shadow: inset 0px -0.51px #bdbdbd;
` 
export const ScoreCardBody=styled.div` background: #fff;
height: 85vh;
margin: 2rem auto 0;
width: 50%;

@media screen and (max-width: 700px) {
    width: 100%;
}

`


