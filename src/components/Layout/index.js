import React from 'react';

import { Grid } from './styles'

import MainHeader from '../MainHeader';
import Content from '../Content';

const Layout = () => {
  return(
    <Grid>
      <MainHeader/>
      <Content/>
    </Grid>
  )
  }
export default Layout;