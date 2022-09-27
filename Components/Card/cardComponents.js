import styled from "styled-components";
export const CardDiv = styled.div`
  display: flex;
  min-height: 35vh;
  height: auto;
  min-width: 60vw;
  margin: 2rem;
  width: 80%;
  transition: color 0.5s ease-in-out;
  padding: 2rem;
  border-bottom:2px solid #f9a826;
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
  transition: transform 0.5s;
  border-radius: 2rem;
  @media (max-width:1086px){
    display: none;
}
    
`;
export const CardAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  @media (max-width:1086px){
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
  margin: 2rem;
  margin-bottom: 0rem;
  font-family: "Rum Raisin", sans-serif;
`;
export const SubHeading = styled.div`
  font-weight: 300;
  color: lightgrey;
  margin: 0rem 2rem 0rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
export const Amenities = styled.div`
  margin: 0rem 0rem 1rem;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;
  
    
`;
export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1.5rem;
  justify-content: space-between;
  font-family: 'Cinzel Decorative', cursive;
  font-weight: bold;
  @media (max-width: 1188px) {
    flex-direction: column;
}
`;
export const Fair = styled.div``;
export const Button = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0rem 0.5rem 0.5rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  background-color: ${(props) => props.bgcolor || "white"};
  @media (max-width:1086px){
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
  @media (max-width:886px){
    margin: 2rem;
  }

`;
export const Features = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0rem 2rem;
  @media (max-width:1086px){

  }
  @media (max-width:500px){
    font-size: smaller;
  }
`;
