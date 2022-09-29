import React from "react";
import styled from "styled-components";
export const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100%;
  color: black;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  background-color: lightgrey;
  flex-direction: column;
  transition: background-color 0.5s;
`;

export const FooterDataDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width:1285px){
    display: ${props => (props.main ? "flex" : "none")};
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FooterData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 4rem;
  font-variant: small-caps;
  font-smooth: inherit;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Rum Raisin", sans-serif;
  margin: 1rem 6rem;
  @media (max-width:1285px){
    font-size: 1rem;
    margin: 1rem 4rem;
  }
  @media (max-width: 900px) {
    margin  : 1rem 2rem;
  }
`;
function Footer() {
  return (
    <FooterDiv>
      <FooterDataDiv main={true}>
        <FooterData>Footer</FooterData>
        <FooterData>Hey</FooterData>
        <FooterData>Footer</FooterData>
        <FooterData>Footer</FooterData>
        <FooterData>Footer</FooterData>
      </FooterDataDiv>
      <FooterDataDiv main={false}>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
      </FooterDataDiv>
      <FooterDataDiv main={false}>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
      </FooterDataDiv>
      <FooterDataDiv main={false}>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
        <FooterData style={{ fontSize: "1rem" }}>Footer</FooterData>
      </FooterDataDiv>
    </FooterDiv>
  );
}

export default Footer;
