import React from 'react'
import Layout from './Layout'
import { useMediaQuery } from '@mui/material';
import Detailpc from './Detailpc';
import Detailmb from './Detailmb';

function Detail({}) {
    const isScreenSmall = useMediaQuery('(max-width:480px)');
    const datail = isScreenSmall ? <Detailmb/> : <Detailpc/>;
  return (
    <Layout content={datail}/>
  )
}

export default Detail