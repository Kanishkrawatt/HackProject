import styled from "styled-components";
export const CardDiv = styled.div`
  display: flex;
  height: 40vh;
  min-width: 50vw;
  margin: 2rem;
  width: 80%;
  justify-content: center;
  align-items: center;
  transition: color 0.5s ease-in-out;
  padding: 2rem;
  border-bottom: 2px solid ${(props) => props.fakeData?"#A9A9A9":"orange"};
  flex-direction: row;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  &:hover .heading {
    color: #f9a826;
    transition: color 0.5s ease-in-out;
  }
`;
export const CardImg = styled.img`
  height: 100%;
  width: 40%;
  object-fit: cover;
  box-shadow: ${props=>props.fakeData==true&&"0 0 10px 0 rgba(0, 0, 0, 0.2)"};
  transition: transform 0.5s;
  border-radius: 2rem;
  @media (max-width: 1086px) {
    display: none;
  }
`;
export const CardAbout = styled.div`
  display: flex;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: ${props=>props.fakeData==true&&"0 0 10px 0 rgba(0, 0, 0, 0.2)"};
  margin-left: 2rem;
  flex-direction: column;
  width: 60%;
  height: 100%;
  @media (max-width: 1086px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Heading = styled.div`
  font-weight: 400;
  font-size: 2rem;
  height: ${(props) => props.fakeData==true&&"6rem"};
  background-color:${(props) => props.fakeData==true&&"lightgrey"};
  width: ${(props) => props.fakeData==true&&"10rem"};
  margin-bottom: 0rem;
  font-family: "Rum Raisin", sans-serif;
`;
export const SubHeading = styled.div`
  font-weight: 300;
  transform:translateY(${(props) => props.fakeData==true&&"0.2rem"});
  height: ${(props) => props.fakeData==true&&"3rem"};
  background-color:${(props) => props.wid&&props.fakeData==true&&"lightgrey"} ;
  width: ${(props) => props.fakeData==true&&"5rem"};
  color: ${(props) => props.fakeData==true?"white":props.color||"lightgrey"};
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
export const Amenities = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
`;
export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "Cinzel Decorative", cursive;
  font-weight: bold;
  @media (max-width: 1188px) {
    flex-direction: column;
  }
`;
export const Fair = styled.div`
  height: 2rem;
  width: 4rem;
  background-color:${(props) => props.fakeData==true&&"lightgrey"};

`;
export const Button = styled.button`
  border: 1px solid ${(props) => props.fakeData==true?"lightgrey":props.borderCol||"black"};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0rem 0.5rem 0.5rem;
  display: flex;
  transform:translateY(${(props) => props.fakeData==true&&"0.5rem"});
  background-color:${(props) => props.fakeData==true?"lightgrey":props.bgcolor || "white"};
  height: ${(props) => props.fakeData==true&&"3rem"};
  width: ${(props) => props.fakeData==true&&"5rem"};
  justify-content: center;
  font-size: 1rem;
  color: ${(props) => props.fakeData==true?"lightgrey":props.color || "black"};
  font-weight: 300;
  cursor: pointer;
  @media (max-width: 1086px) {
    font-size: smaller;
  }
`;
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
  align-items: center;
  padding-top: 5rem;
  width: 100vw;
  flex-wrap: wrap;
  @media (max-width: 886px) {
    margin: 2rem 0rem;
  }
`;
export const Features = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 4rem;
  transform:translateY(${(props) => props.fakeData==true&&"0.5rem"});
  background-color:${(props) => props.fakeData==true&&"lightgrey"};
  width: ${(props) => props.fakeData==true&&"20rem"};
  @media (max-width: 1086px) {
  }
  @media (max-width: 500px) {
    font-size: smaller;
  }
`;
