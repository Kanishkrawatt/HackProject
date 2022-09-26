import styled from "styled-components";
export const CardDiv = styled.div`
  display: flex;
  height: 35vh;
  border-radius: 2rem;
  width: 60vw;
  margin: 2rem;
  transition: color 0.5s ease-in-out;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem;
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
`;
export const CardAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
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
  padding: 0rem 2rem;
  justify-content: space-between;
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
`;
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
  width: 100vw;
  margin-left: 6rem;

  /* background-color: blue; */
  padding-top: 5rem;
`;
export const Features = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0rem 2rem;
`;
