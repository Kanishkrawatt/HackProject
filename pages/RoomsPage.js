import React from 'react'
import styled from "styled-components"
const Page = styled.div`
    display: flex; 
    height: auto;
    min-height: 100vh;
    width: 100vw;
    /* background-color: blue; */
    padding-top: 5rem;
`

import Card from '../Components/Card/card'


function RoomsPage() {
  return (
    <Page>
      <Card/>
    </Page>
  )
}

export default RoomsPage