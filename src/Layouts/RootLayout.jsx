import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div >

      
      <Main>
        <Outlet />
      </Main>
    </div>
  )
}

export default RootLayout

const Main = styled.div``;