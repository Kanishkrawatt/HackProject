import styled from "styled-components";

export const flexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Banner = styled(flexCenter)`
  height: 60vh;
  width: 60%;
  margin: 5rem 1rem 1rem;
  color: black;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  font-variant: small-caps;
  font-smooth: inherit;
  border-radius: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  background-color: lightgrey;
  font-family: "Rum Raisin", sans-serif;
  line-height: 1.2;
  background-size: cover;
  transition: background-color 0.5s;

  @media (max-width: 1000px) {
    width: 90%;
    margin: 5rem 1rem 1rem;
  }
  &:hover {
    background-color: #f5f5f5;
    transition: background-color 0.5s;
  }
`;
export const HomeTitle = styled(flexCenter)`
  font-size: 4rem;
  font-weight: 700;
  color: black;
`;

export const SideBanner = styled(flexCenter)`
  height: 30vh;
  width: 100%;
  color: black;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  background-color: lightgrey;
  border-radius: 2rem;
  margin: 0.5rem 0;
  transition: background-color 0.5s;
  @media (max-width: 1000px) {
    width: 50%;
    height: 100%;
    margin: 0rem 0.5rem;
  }
  &:hover {
    background-color: #f5f5f5;
    transition: background-color 0.5s;
  }
`;
export const BannerDiv = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  color: black;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const SideBannerdiv = styled(flexCenter)`
  height: 60vh;
  width: 30%;
  flex-direction: column;
  margin: 5rem 1rem 2rem;
  @media (max-width: 1000px) {
    width: 90%;
    height: 40vh;
    flex-direction: row;
    line-height: 1.2;
    margin: 1rem 1rem 1rem;
  }
`;
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: black;
  font-variant: small-caps;
  font-smooth: inherit;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Rum Raisin", sans-serif;
`;
export const InfoPanel = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 10vh;
  width: 92%;
  align-items: center;
  border-radius: 2rem;
  color: black;
  background-color: lightgrey;
`;
export const HomePage = styled.div`
  display: flex;
  min-height: 100vh;
  height: auto;
  width: 100%;
  align-items: center;
  color: black;
  flex-direction: column;
`;
export const DataBanner= styled(Banner)`
  width: 40%;
  @media (max-width: 1000px) {
    width: 90%;
  }
`