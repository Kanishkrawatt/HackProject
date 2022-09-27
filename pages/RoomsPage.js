import React from 'react'
import styled from "styled-components"
const Page = styled.div`
    display: flex; 
    height: auto;
    min-height: 100vh;
    width: auto;
    padding:5rem 0rem;
    flex-direction: column;
`

import Card from '../Components/Card/card'
import db from '../db'
function RoomsPage(props) {
  let data =JSON.stringify(props.Alldata);
  return (
    <Page>
      <Card data ={data}/>
    </Page>
  )
}

export async function getStaticProps() {
  let data = await db.collection("RoomsData").get()
  let Alldata = data.docs.map(entry=>entry.data())
  return{
    props: { Alldata }, // will be passed to the page component as props
    revalidate: 1,
  };
}

export default RoomsPage